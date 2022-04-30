const Manager = require("../lib/manager");
const name = "louise";
const id = 9898;
const email = "louise@email.com";
const officeNumber = 900;

describe("Employed", () => {
    it("manager should render correct name, id, email, and officeNumber", () => {
      const testEmployee = new Manager(name, id, email, officeNumber)
        expect(testEmployee.name).toBe("louise");
        expect(testEmployee.id).toBe(9898);
        expect(testEmployee.email).toBe("louise@email.com");
        expect(testEmployee.officeNumber).toBe(900);
    })
    it("Manager methods should work", () => {
        const testEmployee = new Manager(name, id, email, officeNumber)
        const testGetOfficeNumber = testEmployee.getOfficeNumber();
          expect(testGetOfficeNumber).toBe("office number: 900");
    })
  });