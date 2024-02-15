// run-tests.js example
const cypress = require("cypress");

async function runTests() {
  /*************** Admin Start *****************************/
  await cypress.run({
    spec: "cypress/e2e/Backend/API/1-AdminFlow/",
  });
  /****************** Admin End ***********************************/

  /*************** Package Start *****************************/
  await cypress.run({
    spec: "cypress/e2e/Backend/API/2-Packages/",
  });
  /*************** Package End *****************************/

  /*************** Public API Start *****************************/
  await cypress.run({
    spec: "cypress/e2e/Backend/API/3-PublicAPI/",
  });
  /*************** Public API End *****************************/

  /***************** User Flow Start ************************************/
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/0.1-Register/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/0.2-SendOTP/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/0.3-VerifyOTP/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/0.4-Delete_OTP/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/0.5-ResendOTP/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/0.6-OTP_Send/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/0.7-ChangePassword/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/0.8-ResetPassword/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/0.9-ForgotPassword/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1-UserSignIn/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.1-UserUploadPic/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.2-UserUpdatePic/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.3-UserDeletePic/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.4-ProfilePicUpdate/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.5-PartnerPreference/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.6-VerifyNID/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.7-Hobbies/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.8-VerifyUser/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.9-SeeAllUser/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.10-GetMatches/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.11-PremiumMatch/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.12-SearchUser/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.13-InviteFriend/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.14-SingleInvite/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.15-FriendshipStatus/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.16-UpdateFriends/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.17-FriendshipCount/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.18-SeeAllFriends/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.19-InviteFriendCount/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.20-UpdateProfile/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.21-SingleUser/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.22-ViewProfile/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.23-CreateProfileView/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.24-RecentVisitors/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.25-MyPhotos/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.26-PublicProfile/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.27-ComparePartnerPreference/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.28-GetContact/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.29-MatchCount/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.30-HideUnhide/",
  });

  /*************** User Flow End *****************************/
}

runTests();
