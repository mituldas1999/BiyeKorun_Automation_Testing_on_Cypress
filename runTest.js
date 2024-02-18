// run-tests.js example
const cypress = require("cypress");
const { merge } = require("mochawesome-merge");
const marge = require("mochawesome-report-generator");

async function generateReport() {
  const jsonReport = await merge({
    files: ["cypress/reports/*.json"],
  });
  await marge.create(jsonReport, {
    reportDir: "cypress/reports",
    inline: true,
    charts: true,
  });
}

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
  // await cypress.run({
  //   spec: "cypress/e2e/Backend/API/3-PublicAPI/",
  // });
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

  /***************** Payment Start ************************************/

  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.31-Payments/1.1-SSL_Limit/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.31-Payments/1.2-AllPayment/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.31-Payments/1.3-PaypalOrder/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.31-Payments/1.4-CheckOut/",
  });

  /***************** Payment End ************************************/

  /***************** Notification Start ************************************/
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.32-Notification/1.01-GetMyNotification/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.32-Notification/1.02-AddPushtoken/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.32-Notification/1.03-MarkedReadNotification/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.32-Notification/1.04-RemovePushtoken/",
  });

  /***************** Notification End ************************************/

  /***************** Chat Start ************************************/

  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.1-CreateChat/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.2-MyChats/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.3-ChatMassage/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.4-CreateChannel/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.5-UpdateChannel/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.6-SendMessages/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.7-SearchUserChat/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.8-UpdateChats/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.9-RemoveUser/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.10-AddUserChannel/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.11-ArchiveChannel/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.12-LeaveGroup/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.13-JoinChannel/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.14-ReactMessage/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.15-UpdateMessage/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.16-UploadFile/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.17-UpdateStatus/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.18-DeleteMessage/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.19-SearchChatFile/",
  });
  /***************** Chat End ************************************/
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.34-All_Order/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.35-Profile_status/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.36-Single_order/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.37-Update_Email/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.38-User_Connction/",
  });
  await generateReport();
  /*************** User Flow End *****************************/
}

runTests();
