class AddressBook{
    get Id()
    {
        return this._id;
    }
    set Id(id)
    {
        this._id=id;
    }
    get Name() {
        return this._name;
    }
    set Name(name) {
        let nameRegex=RegExp('(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})$')
        if(!nameRegex.test(name))
        throw "Name Is Incorrect!"
    }
    get City() {
        return this._city;
    }
    set City(city) {
        this._city = city;
    }
    get State() {
        return this._state;
    }
    set State(state) {
        this._state = state;
    }
    get PhoneNo() {
        return this._phone;
    }
    set PhoneNo(phone) {
        let phonergx=RegExp('^[+]{0,1}[0-9]{2}\\s{0,1}[0-9]{10}$')
        if(!phonergx.test(phone))
            throw "Phonenumber Is Incorrect!"
    }
    get Address(){
        return this._address;
    }
    set Address(address){
        let addrrgx = RegExp('^[0-9\\\/# ,a-zA-Z]+[ ,]+[0-9\\\/#, a-zA-Z]{1,}')
        if(!addrrgx.test(address))
        throw "Address Is Incorrect!";
    }
    get Zipcode(){
        return this._zipcode;
    }
    set Zipcode(zipcode){
        let ziprgx=RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')
        if(!ziprgx.test(zipcode))
        throw "Zip Code Is Incorrect!";
    }
    toString() {
            return "Id="+ this.id + ", Name=" + this.name + ", Phone No=" + this.phone +
            ", Address=" + this.address + ", Zip Code=" + this.zipcode +
            ", City=" + this.city + ", State=" +this.state;
    }
}
