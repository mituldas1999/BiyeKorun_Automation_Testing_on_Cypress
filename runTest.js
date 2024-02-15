// run-tests.js example
const cypress = require("cypress");

async function runTests() {
  /*************** Admin Start *****************************/
  //   await cypress.run({
  //     spec: "cypress/e2e/Backend/API/1-AdminFlow/",
  //   });
  /****************** Admin End ***********************************/
  /*************** Package Start *****************************/
  //   await cypress.run({
  //     spec: "cypress/e2e/Backend/API/2-Packages/",
  //   });
  /*************** Package End *****************************/

  /*************** Public API Start *****************************/
  // await cypress.run({
  //   spec: "cypress/e2e/Backend/API/3-PublicAPI/",
  // });
  /*************** Public API End *****************************/

  /***************** User Flow Start ************************************/
  //     await cypress.run({
  //       spec: "cypress/e2e/Backend/API/4-UserFlow/0.1-Register/",
  //     });
  //     await cypress.run({
  //       spec: "cypress/e2e/Backend/API/4-UserFlow/0.2-SendOTP/",
  //     });
  //   await cypress.run({
  //     spec: "cypress/e2e/Backend/API/4-UserFlow/1.35-ChatAPI/",
  //   });


  /***************** User Flow Start ************************************/




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
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.4-UpdateChats/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.5-SearchUserChat/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.6-SendMessages/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.7-UpdateMessage/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.8-DeleteMessage/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.9-ReactMessage/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.10-UpdateStatus/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.11-CreateChannel/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.12-ArchiveChannel/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.13-AddUserChannel/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.14-UpdateChannel/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.15-JoinChannel/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.16-RemoveUser/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.17-LeaveGroup/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.18-UploadFile/",
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
  /*************** User Flow End *****************************/
}

runTests();
