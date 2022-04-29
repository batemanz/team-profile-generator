class Employee {    
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
    return "Name: " + this.name;
    }
    
    getId() {
    return "ID: " + this.name;
    }
    
    getEmail() {
        return "Email: " + this.email;
    }
    
    getRole() {
        return "Postion: " + this.role;
    }
    // logInfo() {
    //     console.log(`Employee name is ${this.name}`);
    //     console.log(`Employee ID number is ${this.id}`);
    //     console.log(`Email ${this.email}`);
    //     console.log('------------');
    // }
}
// const empl = new Employee("Nate", 12, "nate@gmail.com");
// console.log(empl);
module.exports = Employee;