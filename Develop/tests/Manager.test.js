// Manager constructor
const Manager = require("../lib/Manager");

//manager object
describe("Manager", () => {
  describe("Object", () => {
    test("creates a Manager object", () => {
      const manager = new Manager("Alyssa E", 123, "alyssa.esparza95@gmail.com", 6);

      expect(manager.officeNumber).toEqual(expect.any(number));
    });
  });

  describe("Role", () => {
    test("gets role of employee", () => {
      const manager = new Manager("Alyssa", 123, "alyssa.esparza95@gmail.com");

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});