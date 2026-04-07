const { expect } = require('@playwright/test');
class Checkoutpage{
    constructor(page){ 
        this.page = page;
        this.cvv = page.locator('input.txt').nth(1);
        this.cardHolderName = page.locator('input.txt').nth(2);
         
this.country = page.locator("[placeholder*='Country']");
this.dropdown = page.locator(".ta-results");
this.emailId = page.locator(".user__name [type='text']").first();
this.submit =  page.locator(".action__submit");
this.orderConfirmationText = page.locator(".hero-primary");
this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");

}
async searchCountryAndSelect(cardCVV,cardHolderName,countryCode,countryName)
{
    await this.cvv.fill(cardCVV);
    await this.cardHolderName.fill(cardHolderName); 
    await this.country.type(countryCode,{delay:100});
    await this.dropdown.waitFor();
    const optionsCount = await this.dropdown.locator("button").count();
    for(let i =0;i< optionsCount; ++i)
    {
      const  text =  await this.dropdown.locator("button").nth(i).textContent();
        if(text.trim() === countryName)
        {
           await this.dropdown.locator("button").nth(i).click();
           break;
        }
    }

}

async VerifyEmailId(username)
{
    await expect(this.emailId).toHaveText(username);
}

async SubmitAndGetOrderId()
{
 await this.submit.click();
 await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
 return await this.orderId.textContent();
}
}
module.exports = {Checkoutpage};