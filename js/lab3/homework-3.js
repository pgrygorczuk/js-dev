// 3) Create an array (by hand) of objects and call sum() function in context of each one of them.
// Sum function is to come from this object  BaseObject = { x,y, sum: function (){ return this.x+this.y}} 
// Example array: [{x:2,y:3},{x:-1,x:6,{x:0,x:8},…..]

let example = [ {x:2,y:3}, {x:-1,y:6}, {x:0,y:8} ];

let BaseObject = 
{
    x: 0,
    y: 0,
    sum: function()
    {
        return this.x + this.y;
    },
};

BaseObject.__proto__.toString = function()
{
    return `${this.x}; ${this.y}`;
};

example.forEach( (item) => {
    result = BaseObject.sum.call( item );
    console.log( `${item.toString()} -> ${result}` );
});
