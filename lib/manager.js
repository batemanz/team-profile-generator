const Employee = require("./employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;

    }
    
    getRole() {
    return "manager";
    }

    getOfficeNumber() {
    return "office number: " + this.officeNumber;
    }
}

// const mngr = new Manager("steve", 1243, "non@email.com", 9283745);
// console.log(mngr);
module.exports = Manager;