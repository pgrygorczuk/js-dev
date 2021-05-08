'use strict';

// ===================================================================================================================

class Polygon{
    constructor(vertices){
        this.vertices = vertices;
    }
    // Based on:
    // https://github.com/substack/point-in-polygon/blob/master/nested.js
    containsPoint(point, start, end) {
        let x = point[0], y = point[1];
        let inside = false;
        if (start === undefined) start = 0;
        if (end === undefined) end = this.vertices.length;
        let len = end - start;
        for (let i = 0, j = len - 1; i < len; j = i++) {
            let xi = this.vertices[i+start][0], yi = this.vertices[i+start][1];
            let xj = this.vertices[j+start][0], yj = this.vertices[j+start][1];
            let intersect = ((yi > y) !== (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }
        return inside;
    };
    // Simplified method.
    intersects(polygon){
        for(let point of this.vertices){
            if( polygon.containsPoint(point) )
                return true;
        }
        return false;
    }
}

// ===================================================================================================================

class Rectangle{
    constructor(x1, y1, x2, y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    intersects(rect){
        return !(
            this.x1 > rect.x2 || this.x2 < rect.x1 ||
            this.y1 > rect.y2 || this.y2 < rect.y1 );
    }
    containsPoint(x, y){
        return (
            this.x1 <= x && this.x2 >= x &&
            this.y1 <= y && this.y2 >= y );
    }
}

// ===================================================================================================================

class Actor{
    constructor(vertices){
        this.vertices = vertices;
        this.markedToRemove = false;
    }
    update(){
        throw new Error("You have to implement the method 'update'!");
    }
    handleCollision(actor){
        throw new Error("You have to implement the method 'handleCollision'!");
    }
    draw(context){
        context.beginPath();
        context.moveTo(
            this.vertices[this.vertices.length-1][0],
            this.vertices[this.vertices.length-1][1] );
        for(let vertex of this.vertices){
            context.lineTo(vertex[0], vertex[1]);
        }
        context.stroke();
    }
    getPolygon(){
        return new Polygon(this.vertices);
    }
    checkCollision(actor){
        return this.getPolygon().intersects( actor.getPolygon() );
    }
    handleCollisions(actors){
        for(let actor of actors){
            if( actor === this )
                return;
            if( this.checkCollision(actor) ){
                this.handleCollision(actor);
                return;
            }
        }
    }
}

// ===================================================================================================================

class Obstacle extends Actor{
    constructor(vertices){
        super(vertices);
    }
    update(){}
    handleCollision(actor){}
    draw(canvas){
        const ctx = canvas.getContext('2d');
        super.draw(ctx);
    }
}

// ===================================================================================================================

class RandomMovementField extends Actor{
    constructor(x, y, obstacles){
        const size = 20;
        super([
            [x, y], [x+size, y], [x+size, y+size], [x, y+size]
        ]);
        this.size = size;
        this.obstacles = obstacles;
    }
    update(){}
    handleCollision(actor){}
    moveToRandom(){
        let x, y;
        do{
            x = Math.floor( Math.random()*800 );
            y = Math.floor( Math.random()*600 );
        }while( this.obstacles[0].getPolygon().containsPoint([x, y]) ||
                this.obstacles[1].getPolygon().containsPoint([x, y]) );

        this.vertices = [
            [x, y], [x+this.size, y], [x+this.size, y+this.size], [x, y+this.size]
        ];
    }
    draw(canvas){
        const ctx = canvas.getContext('2d');
        const orgStyle = ctx.strokeStyle;
        ctx.strokeStyle = 'orangered';
        super.draw(ctx);
        ctx.strokeStyle = orgStyle;
    }
}

// ===================================================================================================================

class Ball extends Actor{
    constructor(x, y, canvas, r=8){
        super([]);
        this.x = x;
        this.y = y;
        this.vx = 1;
        this.vy = 1;
        this.radius = r;
        this.canvas = canvas;
    }
    getPolygon(){
        return new Polygon([
            [this.x - this.radius,  this.y - this.radius],
            [this.x,                this.y - this.radius],
            [this.x + this.radius,  this.y - this.radius],
            [this.x + this.radius,  this.y              ],
            [this.x + this.radius,  this.y + this.radius],
            [this.x,                this.y + this.radius],
            [this.x - this.radius,  this.y + this.radius],
            [this.x - this.radius,  this.y              ],
        ]);
    }
    getRectangle(){
        return new Rectangle(
            this.x - this.radius, this.y - this.radius,
            this.x + this.radius, this.y + this.radius );
    }
    update(){
        this.x += this.vx;
        this.y += this.vy;
        if( this.x + this.radius >= this.canvas.width || this.x - this.radius <= 0 ){
            this.vx = -this.vx;
        }
        if( this.y + this.radius >= this.canvas.height || this.y - this.radius <= 0 ){
            this.vy = -this.vy;
        }
    }
    handleCollision(actor){
        if( actor instanceof RandomMovementField ){
            let vx, vy;
            do{
                vx = Math.random()*8 - 4;
                vy = Math.random()*8 - 4;
            }while( this.vx === vx && this.vy === vy );
            this.vx = vx;
            this.vy = vy;
            actor.moveToRandom();
            return;
        }
        const type = this.getCollisionType(actor);
        if( ['LU', 'RU', 'LD', 'RD'].includes(type) ){
            this.vx = -this.vx;
            this.vy = -this.vy;
        }
        if( ['U', 'D'].includes(type) ){
            this.vy = -this.vy;
        }
        if( ['L', 'R'].includes(type) ){
            this.vx = -this.vx;
        }
    }
    draw(canvas, style = '#000000'){
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = style;
        ctx.beginPath();
        ctx.arc( this.x, this.y, this.radius, 0, 2*Math.PI );
        ctx.stroke();
    }
    getCollisionType(actor){
        const p1 = this.getPolygon();
        const p2 = actor.getPolygon();

        if( p2.containsPoint(p1.vertices[1]) ) return 'U';
        if( p2.containsPoint(p1.vertices[3]) ) return 'R';
        if( p2.containsPoint(p1.vertices[5]) ) return 'D';
        if( p2.containsPoint(p1.vertices[7]) ) return 'L';

        if( p2.containsPoint(p1.vertices[0]) ) return 'LU';
        if( p2.containsPoint(p1.vertices[2]) ) return 'RU';
        if( p2.containsPoint(p1.vertices[4]) ) return 'RD';
        if( p2.containsPoint(p1.vertices[6]) ) return 'LD';
        
        return false;
    }
}
