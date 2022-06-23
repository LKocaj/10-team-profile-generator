const Employee = require("../lib/Employee");

describe("Employee class constructor", () => {
  it("New employee creation", () => {
    const teamMember = new Employee("Lawrence", "1", "lawrencecaj@gmail.com");
    expect(teamMember.name).toEqual("Lawrence");
    expect(teamMember.id).toEqual("1");
    expect(teamMember.email).toEqual("lawrencecaj@gmail.com");
  }),
    it("getName Function", () => {
      const teamMember = new Employee("Lawrence", "1", "lawrencecaj@gmail.com");
      expect(teamMember.getName()).toEqual("Lawrence");
    });
});