const Employee = require("../lib/employee");
const name = "bob";
const id = 12;
const email = "bob@email.com";

describe("Employed", () => {
    it("Employee should render correct name", () => {
      const testEmployee = new Employee(name, id, email)
        expect(testEmployee.name).toBe("bob");
        expect(testEmployee.id).toBe(12);
    })
    it("Employee methods should work", () => {
        const testEmployee = new Employee(name, id, email)
        const testGetName = testEmployee.getName();
          expect(testGetName).toBe("Name: bob");
    })
  });