function createHome(){
    let home = document.createElement('div');

    let pizzaImg = document.createElement('img');
    pizzaImg.src = "pizza.jpg";
    home.appendChild(pizzaImg);

    let description = document.createElement('p');
    description.textContent = "Best pizza in the galaxy since 1254 BCE.";
    home.appendChild(description);
    return home;
}


export default createHome;