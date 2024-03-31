const body = document.querySelector(".body")
const navContainer = document.querySelector(".nav__container");
const menuIcon = document.querySelector(".nav__menu--first");
const arrowBackIcon = document.querySelector(".nav__menu--second");
const menuDropdown = document.getElementById("menu");
const section = document.getElementById("section");
const liLightModeToggle = document.getElementById("li-lightMode--toggle");
const lightModeToggle = document.getElementById("lightMode--toggle");



liLightModeToggle.addEventListener("click",toggleLightDarkMode);
lightModeToggle.addEventListener("click",toggleLightDarkMode);


function toggleLightDarkMode(){
    const htmlElement = document.documentElement; 
    const dataTheme = htmlElement.getAttribute("data-theme");

    if(dataTheme === "light"){
        htmlElement.setAttribute('data-theme','dark');
        localStorage.setItem("theme","dark");
    };
    if(dataTheme === "dark"){
        htmlElement.setAttribute('data-theme','light');
        localStorage.setItem("theme","light");
    };
    
}



const arrowRight = document.getElementById("arrow__right");
const arrowLeft = document.getElementById("arrow__left");
const scrollContainer = document.getElementById("ul__project__container");
const liElements = document.getElementById("ul__project__container__li__element");


scrollContainer.addEventListener("wheel",(evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

const scrollWidth = scrollContainer.children.scrollWidth;


arrowRight.addEventListener("click",(evt)=>{
    scrollContainer.scrollLeft += liElements.scrollWidth;

});

arrowLeft.addEventListener("click",(evt)=>{
    scrollContainer.scrollLeft -= liElements.scrollWidth;
})














/*
function setDarkMode(){
    setUserTheme("dark")
};

function setLightMode(){
    setUserTheme("light")
};

function setUserTheme(newTheme){
    document.documentElement.setAttribute("data-theme",newTheme);
};

*/
 

//Equivalente a :has() de css:
function hasPseudoClassTarget(father, child) {
    return father && child.matches(":target");
}



function toggleScaleVariables() {
    // Obtén el valor actual de las variables
    const img1Value = getComputedStyle(document.documentElement).getPropertyValue('--img1');
    const img2Value = getComputedStyle(document.documentElement).getPropertyValue('--img2');


    // Decide qué valores asignar a las variables según el estado actual
    const newImg1Value = img1Value === 'scale(0)' ? 'scale(1)' : 'scale(0)';
    const newImg2Value = img2Value === 'scale(0)' ? 'scale(1)' : 'scale(0)';

    // Cambia el valor de las variables CSS en :root
    document.documentElement.style.setProperty('--img1', newImg1Value);
    document.documentElement.style.setProperty('--img2', newImg2Value);
    // Define la variable CSS directamente en el documento principal (:root)

}


menuIcon.addEventListener('click', function () {
    event.stopPropagation();

    toggleScaleVariables();

    document.documentElement.style.setProperty('--clip', 'inset(0 0 0 0)');
    
});


arrowBackIcon.addEventListener('click', function () {
    event.stopPropagation();
    // Llama a la función para cambiar las variables
    toggleScaleVariables();

    document.documentElement.style.setProperty('--clip', 'inset(0 100% 0 0)');

});


/*
document.addEventListener('click', ()=>{

    let isMenuOpen = document.documentElement.style.getPropertyValue('--clip');

    if(isMenuOpen === "inset(0 0 0 0)"){
        toggleScaleVariables();
        document.documentElement.style.setProperty('--clip','inset(0 100% 0 0)')
    }
})
*/

