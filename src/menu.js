function createMenu(){
    let menu = document.createElement('div');
    
    for (let i = 1; i<=8; i++){
        let item = document.createElement('div');

        let itemName = document.createElement('h2');
        itemName.textContent = `Pizza #${i}`;
        item.appendChild(itemName);

        let itemDescription = document.createElement('p');
        itemDescription.textContent = `A delicious diary-free pizza.`;
        item.appendChild(itemDescription);

        menu.appendChild(item);
    }
    return menu;
}


export default createMenu;