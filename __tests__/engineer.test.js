const Engineer = require("../lib/Engineer");

describe("Engineer class constructor", () => {
  it("New engineer creation", () => {
    const teamMember = new Engineer(
      "Lawrence",
      "1",
      "lawrencecaj@gmail.com",
      "lkocaj"
    );
    expect(teamMember.name).toEqual("Lawrence");
    expect(teamMember.id).toEqual("1");
    expect(teamMember.gitHubUsername).toEqual("lkocaj");
  }),
    it("getName Function", () => {
      const teamMember = new Engineer(
        "Lawrence",
        "1",
        "lawrencecaj@gmail.com",
        "lkocaj"
      );
      expect(teamMember.getName()).toEqual("Lawrence");
    });
});