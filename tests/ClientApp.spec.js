
 const {test, expect} = require('@playwright/test');
 const {customtest} = require('../utils/testbase');
 const {POManager} = require('../pageobjects/POManager');
 //Json --> string --> js object
 const testData = JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));




 
 

for(const data of testData)
{ 
test(`@API Client App login test for  ${data.productName}`, async({page})=>{
  
  //js file - Login page js, dashboard page js
  // Data file - testData.json and data driven framework - read data from json file and use that data in test case
  
    const poManager = new POManager(page);
    //const ThankyouMessage = ' Thankyou for the order. ';
    //const username = 'surendra36mulumudi@gmail.com';
    //const password = 'Test@123';
    //const productName = "ADIDAS ORIGINAL";
    //const cardCVV = "123";
    //const cardHolderName = "Surendra Mulumudi";
    //const countryCode = "ind";
    //const countryName = "India";    
    //Zara Coat 4
    //const productName = "Zara Coat 3";
    
    //Login page
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username,data.password);

    //Dashboard page
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.navigateToCart();

    //Cart page
    const cartPage = poManager.getCartPage();
   await cartPage.VerifyProductIsDisplayed(data.productName);
   await cartPage.Checkout();

   //Checkout page
    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.searchCountryAndSelect(data.cardCVV,data.cardHolderName,data.countryCode,data.countryName);
    const orderId = await checkoutPage.SubmitAndGetOrderId();
    console.log("orderId:", orderId);
    await dashboardPage.navigateToOrders();

    //Orders History page
    const ordersHistoryPage = poManager.getOrdersHistoryPage();
    await ordersHistoryPage.VerifyOrderExists(orderId);
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
    const retrievedOrderId = await ordersHistoryPage.getOrderId();
    console.log("Retrieved Order ID:", retrievedOrderId);
    await ordersHistoryPage.orderSuummaryPage(data.username,data.countryName);

});
}
customtest('@Web Client App login test with fixture test data', async({page, testDataForPlaceOrder})=>
  {
  
  //js file - Login page js, dashboard page js
  // Data file - testData.json and data driven framework - read data from json file and use that data in test case
  
    const poManager = new POManager(page);
    //const ThankyouMessage = ' Thankyou for the order. ';
    //const username = 'surendra36mulumudi@gmail.com';
    //const password = 'Test@123';
    //const productName = "ADIDAS ORIGINAL";
    //const cardCVV = "123";
    //const cardHolderName = "Surendra Mulumudi";
    //const countryCode = "ind";
    //const countryName = "India";    
    //Zara Coat 4
    //const productName = "Zara Coat 3";
    
    //Login page
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataForPlaceOrder.username,testDataForPlaceOrder.password);

    //Dashboard page
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(testDataForPlaceOrder.productName);
    await dashboardPage.navigateToCart();

    //Cart page
    const cartPage = poManager.getCartPage();
   await cartPage.VerifyProductIsDisplayed(testDataForPlaceOrder.productName);
   await cartPage.Checkout();

   //Checkout page
    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.searchCountryAndSelect(testDataForPlaceOrder.cardCVV,testDataForPlaceOrder.cardHolderName,testDataForPlaceOrder.countryCode,testDataForPlaceOrder.countryName);
    const orderId = await checkoutPage.SubmitAndGetOrderId();
    console.log("orderId:", orderId);
    await dashboardPage.navigateToOrders();

    //Orders History page
    const ordersHistoryPage = poManager.getOrdersHistoryPage();
    await ordersHistoryPage.VerifyOrderExists(orderId);
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
    const retrievedOrderId = await ordersHistoryPage.getOrderId();
    console.log("Retrieved Order ID:", retrievedOrderId);
    await ordersHistoryPage.orderSuummaryPage(testDataForPlaceOrder.username,testDataForPlaceOrder.countryName);

});

