let isUpdate = false;
let addressBookObj = {};

window.addEventListener('DOMContentLoaded', (event) => {
    validateName();
    Phonenumber();
    Address();
    Zipcode();
    checkForUpdate();
});

function validateName() {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "NAme Cannot Be empty";
            return;
        }
        try {
            (new AddressBook()).Name = name.value;
             textError.textContent = "";
        } catch (e) {       //e holds the value of the exception
            console.error(e);
            textError.textContent = e;
        }
    });
}
function Phonenumber() {
    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phone.addEventListener('input', function () {
        if (phone.value.length == 0) {
            phoneError.textContent = "";
            return;
        }
        try {
            (new AddressBook()).PhoneNo = phone.value;
             phoneError.textContent = "";
        } catch (e) {
            console.error(e);
            phoneError.textContent = e;
        }
    });
}
    function Address() {
        const address = document.querySelector('#address');
        const addressError = document.querySelector('.address-error');
        address.addEventListener('input', function () {
            if (address.value.length == 0) {
                addressError.textContent = "";
                return;
            }
            try {
                (new AddressBook()).Address = address.value;
                addressError.textContent = "";
            } catch (e) {
                console.error(e);
                addressError.textContent = e;
            }
        });
}
function Zipcode() {
    const zipcode = document.querySelector('#zipcode');
    const zipcodeError = document.querySelector('.zip-error');
    zipcode.addEventListener('input', function () {
        if (zipcode.value.length == 0) {
            zipcodeError.textContent = "";
            return;
        }
        try {
            (new AddressBook()).Zipcode = zipcode.value;
            zipcodeError.textContent = "";
        } catch (e) {
            console.error(e);
            zipcodeError.textContent = e;
        }
    });
}

const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
        createAddressBookObj();
        createAndUpdateStorage();
        resetForm();
        window.location.replace(site_properties.home_page);
    }
    catch (e) {
        return;
    }

}

//creating Id automatically and storing into the Local storage
const createNewId = () => {
    let addressBookId = localStorage.getItem('addressBookID');
    addressBookId = !addressBookId ? 1 : (parseInt(addressBookId) + 1);
    localStorage.setItem('addressBookID', addressBookId);
    return addressBookId;
}

//getting all tyhe data from form and storing in addressBook object
const createAddressBookObj = () => {

    addressBookObj.name = getInputValueById('#name');
    addressBookObj.phone = getInputValueById('#phone');
    addressBookObj.address = getInputValueById('#address');
    addressBookObj.city = getInputValueById('#city');
    addressBookObj.state = getInputValueById('#state');
    addressBookObj.zipcode = getInputValueById('#zipcode');
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

//Storing data locally
function createAndUpdateStorage() {

    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList) {
        let addressBookData = addressBookList.find(bookData => bookData.id == addressBookObj.id);
        if (!addressBookData) {
            addressBookList.push(createAddressBook());
            alert("Added Successfully");
        } else {
            const index = addressBookList
                .map(bookData => bookData.id)
                .indexOf(addressBookData.id);
            addressBookList.splice(index, 1, createAddressBook(addressBookData.id));
            alert("Updated Successfully");
        }
    } else {
        addressBookList = [createAddressBook()]
    }
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}

const createAddressBook = (id) => {
    let addressBookData = new AddressBook();
    if (!id) addressBookData.id = createNewId();
    else addressBookData.id = id;
    setaddressBookData(addressBookData);
    return addressBookData;
}

const setaddressBookData=(addressBookData)=>{

    try {
        addressBookData.name = addressBookObj.name;
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    addressBookData.address = addressBookObj.address;
    addressBookData.city = addressBookObj.city;
    addressBookData.state = addressBookObj.state;
    addressBookData.zipcode = addressBookObj.zipcode;
    addressBookData.phone = addressBookObj.phone;
}

const resetForm = () => {
    setValue('#name', '');
    setValue('#phone', '');
    setValue('#address', '');
    setValue('#city', '');
    setValue('#state', '');
    setValue('#zipcode', '');

}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}
const setTextValue = (id, value) => {
    const element = document.querySelector(id); 
    element.textContent = value;
}

const setForm= () => {
    setValue('#name',addressBookObj.name);
    setValue('#address',addressBookObj.address);
    setValue('#city',addressBookObj.city);
    setValue('#state',addressBookObj.state);
    setValue('#phone',addressBookObj.phone);
    setValue('#zipcode',addressBookObj.zipcode);
    //alert(addressBookData.toString());
}

const checkForUpdate =() => {
    const addressBookJSON = localStorage.getItem('editAddr');
    isUpdate = addressBookJSON ? true : false;
    if(!isUpdate) return;
    addressBookObj = JSON.parse(addressBookJSON);
    setForm();
}