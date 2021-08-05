/*---------------SHOW  MENU---------------*/
const showMenu = (toggleId , navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);


    //VALIDATE THAT VARIABLE EXIST
    if(toggle && nav){
        //WE ADD THE show_menu CLASS TO THE DIV TAG WITH THE new_menu CLASS
        toggle.addEventListener('click' , () => {
            nav.classList.toggle('show-menu');
        });
    }
}
showMenu('nav-toggle' , 'nav-menu');

const navLink = document.querySelectorAll('.nav_link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    //WHEN WE CLICK ON EACH nav_link, WE NEED TO REMOVE THE show-menu CLASS
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click' , linkAction));

// THEME CHANGER BUTTON
const themeButton = document.getElementById('theme-button');
const darktheme = 'dark-theme'; 
const sun = document.getElementsByClassName('change-theme')[0];
themeButton.addEventListener('click' , ()=> {
     document.body.classList.toggle(darktheme);
     sun.classList.toggle('fa-sun');
})