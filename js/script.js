let btn = document.querySelector('#contactinfoBTN');
let close = document.querySelector('#CloseBTN');
let scroolup = document.querySelector('#ScroolUpBtn');

let contact = document.querySelector('#contactinfo');

let closeBtnMenu = document.querySelector('#closeMenuBtn');
let closeMenu = document.querySelector('#CloseMenu');

// document.addEventListener('DOMContentLoaded', function() {contact.style.display = 'none';})

// btn.addEventListener('click', function()
// {
//     if (contact.style.display === "none") 
//     {
//         contact.style.display = "flex";
//     }
//     else 
//     {
//         contact.style.display = "none";
//     }
// });

// close.addEventListener('click', function()
// {
//     if (contact.style.display != "none") 
//     {
//         contact.style.display = "none";
//     }
// });

closeBtnMenu.addEventListener('click', function()
{
    if (closeMenu.style.display != "none") 
    {
        closeMenu.style.display = "none";
        document.querySelector('header').style.padding = ".25rem 3rem"
        document.querySelector('header').style.transition = ".5s"

        document.querySelector('nav').style.backgroundColor = "transparent";
        document.querySelector('nav').style.backdropFilter = "none";
        document.querySelector('nav').style.boxShadow = "none";

        closeBtnMenu.style.border = "1px solid white";
        closeBtnMenu.style.borderRadius = ".5rem";
        closeBtnMenu.style.backgroundColor = "rgba(255, 255, 255, 0.826)";
        closeBtnMenu.style.backdropFilter = "blur(10px)";
        closeBtnMenu.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    }
    else 
    {
        closeMenu.style.display = "flex";
        document.querySelector('header').style.padding = "1rem 3rem"
        document.querySelector('header').style.transition = ".5s"

        document.querySelector('nav').style.backgroundColor = "rgba(255, 255, 255, 0.826)";
        document.querySelector('nav').style.backdropFilter = "blur(10px)";
        document.querySelector('nav').style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

        closeBtnMenu.style.border = "none"
        closeBtnMenu.style.color = "black"

        closeBtnMenu.style.backgroundColor = "transparent";
        closeBtnMenu.style.backdropFilter = "none";
        closeBtnMenu.style.boxShadow = "none";

    }
});
