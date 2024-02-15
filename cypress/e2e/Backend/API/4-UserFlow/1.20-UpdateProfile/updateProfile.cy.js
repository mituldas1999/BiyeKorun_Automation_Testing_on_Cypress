describe("A user should be able to update their profile information", () => {
  it("Checking if an user can update their profile information", () => {
    const accessToken = Cypress.env("accessToken");
    // need to discus on the user id
    cy.request({
      method: "PATCH",
      url: "/api/user/update-profile",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        firstName: "Ashik testing",
        middleName: "dimu na",
        lastName: "Das",
        profilePicture: "65c2fd84ebf53acbef27685b", // need to discus here
        about: {
          aboutMe: "SQA Engineer",
        },
        phone: {
          number: "1775069169",
          countryCode: "880",
        },
        basicInfo: {
          diet: "Vegiterian",
          bloodGroup: "A+",
          maritalStatus: "Never Married",
          height: "5.9",
          weight: "100",
          dateOfBirth: "2023-10-29",
          gender: "Male",
        },
        community: {
          religion: "Hindu",
          language: ["Bangla", "English", "Urdu"],
          nativeLanguage: "Bengali",
        },
        interestAndMore: {
          interests: [
            {
              categories: "Fun",
              hobbies: ["computing"],
            },
          ],
        },
        family: {
          noOfBrothers: 0,
          brothersMarried: false,
          noOfSisters: 1,
          sistersMarried: true,
          children: "No",
          familyState: "Rajshahi",
          familyCity: "Naogaon",
          familyCountry: "Bangladesh",
          familyIncome: "20000",
          familyValues: "",
          fatherProfession: "Farmer",
          livingWith: "Family",
          motherProfession: "Home Maker",
          noOfKids: "0",
          type: "Join Family",
        },
        educationCareer: {
          education: "BSc in Computer Science and Engineering",
          college: "Green University of Bangladesh",
          income: {
            min: "10000",
            max: "20000",
          },
          employer: "ts4u.us",
          industry: "Software industry",
          occupation: "Software Engineer",
          workingWith: "Private Company",
        },
        location: {
          state: "Dhaka",
          city: "Dhaka",
          country: "Bangladesh",
          livingSince: "02 Years",
          residencyStatus: "Permanent Resident",
          zipCode: "1230",
        },
      },
    })
      .its("status")
      .should("eq", 200);
  });
});
