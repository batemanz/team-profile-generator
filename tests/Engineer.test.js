const Engineer = require("../lib/engineer");
const name = "linda";
const id = 5454;
const email = "linda@email.com";
const github = "https://www.github.com"

describe("Employed", () => {
    it("Engineer should render correct name, id, email, and github url", () => {
      const testEmployee = new Engineer(name, id, email, github)
        expect(testEmployee.name).toBe("linda");
        expect(testEmployee.id).toBe(5454);
        expect(testEmployee.email).toBe("linda@email.com");
        expect(testEmployee.github).toBe("https://www.github.com");
    })
    it("Engineer methods should work", () => {
        const testEmployee = new Engineer(name, id, email, github)
        const testGetGithub = testEmployee.getGithub();
          expect(testGetGithub).toBe("Github Url: https://www.github.com");
    })
  });