const Manager = require("../lib/Manager");

describe("Manager class constructor", () => {
  it("New manager creation", () => {
    const teamMember = new Manager("Lawrene", "1", "lawrencecaj@gmail.com", "1337");
    expect(teamMember.name).toEqual("Lawrence");
    expect(teamMember.id).toEqual("1");
    expect(teamMember.email).toEqual("lawrencecaj@gmail.com");
    expect(teamMember.officeNumber).toEqual("1337");
  }),
    it("getName Function", () => {
      const teamMember = new Manager("Lawrence", "1", "lawrencecaj@gmail.com", "1337");
      expect(teamMember.getName()).toEqual("Lawrence");
    });
});