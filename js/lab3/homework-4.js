// 4) Given an array of objects, for each object call operation() function in context of next object.
// If object is last, got back to start of the array for operation function. In loop;

let arr =
[
    {
        x: 1,
        y: 'object one value',
        //operation: () => { return 'object one prefix' + this.x + this.y }
        operation: function(){ return 'object one prefix ' + this.x + this.y; }
    },
    {
        x: 2,
        y: 'object two value',
        //operation: () => { return 'object two prefix' + this.x + this.y }
        operation: function(){ return 'object two prefix ' + this.x + this.y; }
    },
    {
        x: 3,
        y: 'object three value',
        //operation: () => { return 'object three prefix' + this.x + this.y }
        operation: function(){ return 'object three prefix ' + this.x + this.y; }
    },
];

for(let i=0; i<arr.length; ++i)
{
    let
        next = (i+1 < arr.length)? arr[i+1] : arr[0];
        result = arr[i].operation.call( next );
    console.log( result );
}
