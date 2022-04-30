const Intern = require("../lib/intern");
const name = "tina";
const id = 1212;
const email = "tina@email.com";
const school = "university"

describe("Employed", () => {
    it("Intern should render correct name, id, email, and school", () => {
      const testEmployee = new Intern(name, id, email, school)
        expect(testEmployee.name).toBe("tina");
        expect(testEmployee.id).toBe(1212);
        expect(testEmployee.email).toBe("tina@email.com");
        expect(testEmployee.school).toBe("university");
    })
    it("Intern methods should work", () => {
        const testEmployee = new Intern(name, id, email, school)
        const testGetSchool = testEmployee.getSchool();
          expect(testGetSchool).toBe("school: university");
    })
  });