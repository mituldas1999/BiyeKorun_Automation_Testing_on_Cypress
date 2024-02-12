import { faker } from "@faker-js/faker";
describe("A user should be able to register in the browser", () => {
  it("Checking if a user can register in the browser or not", () => {
    const newUserEmail = faker.internet.email();
    cy.request({
      method: "POST",
      url: "/api/user/register",
      body: {
        email: newUserEmail,
        firstName: "Shakil",
        lastName: "Ahmed",
        dateOfBirth: "2023-10-26",
        gender: "string",
        postedBy: "Myself",
        language: ["Bangla", "English", "Urdu"],
        country: "Bangladesh",
        religion: "Islam",
        password: "Ashik@2430",
      },
    }).then((response) => {
      const newUserId = response.body.data._id;
      cy.writeFile("cypress/fixtures/userId.json", { userId: newUserId });
      const newUser = response.body.data.email;
      console.log(newUserId);
      cy.writeFile("cypress/fixtures/user.json", { userEmail: newUser });
    });
  });
});
