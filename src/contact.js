function createContact(){
    let contact = document.createElement('div');

    let phoneNumber = document.createElement('p');
    phoneNumber.textContent = '987 654 321';
    contact.appendChild(phoneNumber);

    let location = document.createElement('p');
    location.textContent = 'Sesame Street, Hong Kong, USA';
    contact.append(location);

    return contact;
}


export default createContact;