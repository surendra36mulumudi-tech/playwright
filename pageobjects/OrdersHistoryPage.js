const { expect } = require('@playwright/test');
class OrdersHistoryPage{
    constructor(page)
    {
        this.page = page;
        this.myOrdersButton = this.page.locator('button[routerlink*="myorders"]');
        this.ordersTable = page.locator("tbody");
        this.rows = page.locator("tbody tr");
        this.orderdIdDetails =page.locator(".col-text");
    }

async VerifyOrderExists(orderId){
    await this.myOrdersButton.click();
    //Table body
    await  this.ordersTable.waitFor();
         
     
       for (let i = 0; i < await this.rows.count(); ++i) {
          const rowOrderId = await this.rows.nth(i).locator("th").textContent();
          if (orderId.includes(rowOrderId)) {
             await this.rows.nth(i).locator("button").first().click();
             break;
          }
       }
}
async getOrderId()
{
    
    return await this.orderdIdDetails.textContent();
}
 async orderSuummaryPage(username,countryName){
//order summary page
   const billingAddressEmail = await this.page.locator('p.text').nth(0).textContent();
   console.log(billingAddressEmail);
   const billingAddressCountry = await this.page.locator('p.text').nth(1).textContent();
   console.log(billingAddressCountry);
    expect(billingAddressEmail).toContain(username);
    expect(billingAddressCountry).toContain(countryName);
    const deliveryAddressEmail = await this.page.locator('p.text').nth(2).textContent();
    console.log(deliveryAddressEmail);
    const deliveryAddressCountry = await this.page.locator('p.text').nth(3).textContent();
    console.log(deliveryAddressCountry);
    expect(deliveryAddressEmail).toContain(username);
    expect(deliveryAddressCountry).toContain(countryName);
    await this.page.locator('div .-teal').click();

}
}
module.exports = {OrdersHistoryPage};