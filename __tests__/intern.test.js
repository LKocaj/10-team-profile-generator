const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCONN";
  const e = new Intern("Bill", 1, "bill@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Bill", 1, "bill@test.com", "UCONN");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCONN";
  const e = new Intern("Bill", 1, "bill@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});