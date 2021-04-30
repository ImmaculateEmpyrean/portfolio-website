var onBeginFunctions = [];

document.addEventListener("DOMContentLoaded",function()
{
    forEach(onBeginFunctions,function(callback){
        callback();
    });
});

function onBegin(callback)
{
    onBeginFunctions.push(callback);
}

function forEach(array,callback)
{
    for(var i = 0;i< array.length;i++)
    {
        callback(array[i]);
    }
}