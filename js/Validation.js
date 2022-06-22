window.addEventListener('DOMContentLoaded', (event) => {
    validateName();
    Phonenumber();
    Address();
    Zipcode();
});
function validateName() {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
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