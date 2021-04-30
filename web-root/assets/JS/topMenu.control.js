var windowTop = true;
var smallDetection = 200; 

onScrollHighSensitivity(function(e)
{
    console.log(window.scrollY);

    if(window.scrollY > smallDetection)
    {
        var topMenu = document.querySelector('.top-menu');
        topMenu.classList.add('small');
    }
});