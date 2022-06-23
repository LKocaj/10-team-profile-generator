const Intern = require("../lib/Intern");

describe("Intern class constructor", () => {
  it("New intern creation", () => {
    const teamMember = new Intern("Lawrence", "1", "lawrencecaj@gmail.com", "UCONN");
    expect(teamMember.name).toEqual("Lawrence");
    expect(teamMember.id).toEqual("1");
    expect(teamMember.email).toEqual("lawrencecaj@gmail.com");
    expect(teamMember.internSchool).toEqual("UCONN");
  }),
    it("getName Function", () => {
      const teamMember = new Intern(
        "Lawrence",
        "1",
        "lawrencecaj@gmail.com",
        "lkocaj"
      );
      expect(teamMember.getName()).toEqual("Lawrence");
    });
});