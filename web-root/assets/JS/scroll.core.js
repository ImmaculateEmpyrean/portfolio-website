var onScrollFunctions = [];
var onScrollFunctionsHighSensitivity = [];

//setup variables
var scrollCooldownTime = 400; //milliseconds
var readyToScroll = true;

//this is the way I communicate with the browser
document.addEventListener("scroll",function(){ 
    processScrollEvents(); 
});

//used to process the scroll events in question
function processScrollEvents()
{
    //the low scroll sensitivity functions need not be triggered so many more number of times
    if(readyToScroll == true)
    {
        readyToScroll = false;
        forEach(onScrollFunctions,function(callback){
            callback();
        });
        setTimeout(function(){
            readyToScroll = true;
        },scrollCooldownTime)
    } 

    //the high sensitivity functions are to be triggered every scroll event
    forEach(onScrollFunctionsHighSensitivity,function(callback){
        callback();
    });   
}

function onScroll(callback)
{
    onScrollFunctions.push(callback);
}
function onScrollHighSensitivity(callback)
{
    onScrollFunctionsHighSensitivity.push(callback);
}

onScroll(function(){
    console.log("low-sensitivity scroll");
});
onScrollHighSensitivity(function(){
    console.log("high-sensitivity scroll");
});