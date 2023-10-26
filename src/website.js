import createHome from "./home"
import createMenu from "./menu"
import createContact from "./contact"


function createHeader(){
    let header = document.createElement('header');

    let headline = document.createElement('h1');
    headline.textContent = "Pizzalioni";
    header.appendChild(headline);

    let buttonHome = document.createElement("Button");
    buttonHome.textContent = "Home";
    buttonHome.classList.add('home-button');
    header.appendChild(buttonHome);
    let buttonMenu = document.createElement("Button");
    buttonMenu.textContent = "Menu";
    buttonMenu.classList.add('menu-button');
    header.appendChild(buttonMenu);
    let buttonContact = document.createElement("Button");
    buttonContact.textContent = "Contact";
    buttonContact.classList.add('contact-button');
    header.appendChild(buttonContact);

    return header;
}

function createMain(){
    let main = document.createElement('main');
    main.classList.add('main');

    let homePage = createHome();
    main.appendChild(homePage);

    return main;
}

function createFooter(){
    let footer = document.createElement('footer');
    let footnote = document.createElement('a');
    footnote.textContent = "By Bryson Kushner";
    footer.appendChild(footnote);
    return footer;
}


function changeTab(e){
    let tab = e.target.textContent;
    let main = document.querySelector('.main');
    main.innerHTML = '';

    if (tab == 'Home'){
        let homePage = createHome();
        main.appendChild(homePage);
    }
    else if (tab == 'Menu'){
        let menuPage = createMenu();
        main.appendChild(menuPage);
    }
    else if (tab == 'Contact'){
        let contactPage = createContact();
        main.appendChild(contactPage);
    }
}


function initializeWebsite(){
    let content = document.querySelector('.content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    let homeButton = document.querySelector('.home-button');
    let menuButton = document.querySelector('.menu-button');
    let contactButton = document.querySelector('.contact-button');

    homeButton.addEventListener('click', changeTab);
    menuButton.addEventListener('click', changeTab);
    contactButton.addEventListener('click', changeTab);
}


export default initializeWebsite;