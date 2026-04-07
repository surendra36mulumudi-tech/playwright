const base = require('@playwright/test');

//test data send with fixture
//Custom fixture - test data send with fixture
exports.customtest = base.test.extend(
{
    testDataForPlaceOrder:  {
        username : "surendra36mulumudi@gmail.com",
        password : "Test@123",
        productName : "ADIDAS ORIGINAL",
        ThankyouMessage : " Thankyou for the order. ",
        cardCVV : "123",
        cardHolderName : "Surendra Mulumudi",
        countryCode : "ind",
        countryName : "India"
         }
}

)