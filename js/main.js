//création d'une fonction
const handleMobileMenu = () => {
    const navMobileMenu = document.getElementById('navMobileMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');


    //permet de déplacer le menu sur 0 comme convenu dans le css
    const openMenu = () => {
        mobileMenu.classList.add('mobile-menu--open')
    };
    
    //pour refermer le menu 

    const closeMenu = () => {
        mobileMenu.classList.remove('mobile-menu--open')
    }
    
    //ecouter le click du visiteur est effectuer ce qu'il demande (donc ouvrir et fermer)
    navMobileMenu.addEventListener('click' , openMenu)
    mobileMenuClose.addEventListener('click', closeMenu)

}
    //Créer une fonction pour faire réapparaitre les éléments à opacité 0 du .main
const animateMainContent = () => {
 //Créer un tableau des éléments que je veut animer
    const elementsToAnimate = [
        { selector: ".main__hero-title", transform : false},
        { selector: ".main__hero-description", transform : false},
        { selector: ".main__hero-description-mobile", transform : false},
        { selector: ".main__hero-button", transform : false},
        //pour propager sur les elements main feature mais différement 
        ...Array.from(document.querySelectorAll(".main__feature")).map((feature) => ({
            element: feature,
            transform: true
        }))
    ]

    const animateElement = (element, delay = 0, transform = false) => {
    //declencher une fonction a la fin de ce timeOut
    setTimeout(() => {
        //au bout du délai je lui fait faire ce qu'il y a en dessous
        element.style.opacity = 1;
        if(transform) {
            element.style.transform = "translateY(0)";
            }
         }, delay);
    }
    //concernant l'animation et le pop des différents éléments
    elementsToAnimate.forEach((item, index) => {
        const element = item.element || document.querySelector(item.selector);

        if(element) {
            animateElement(element, index * 200, item.transform)
        }
    })
}



//Je l'appel pour qu'elle puisse etre déclenchée par mon navigateur

handleMobileMenu();
animateMainContent();