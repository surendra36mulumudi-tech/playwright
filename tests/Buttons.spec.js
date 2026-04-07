const{test, expect} =require('@playwright/test');

test('Buttons Test', async({page})=>
{
    const userName= page.locator('#username');
    const password= page.locator('#password');
    const loginButton= page.locator('#signInBtn');
    const documentLink= page.locator('[href*="documents-request"]');

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await userName.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK2');

    const dropDown = page.locator('select.form-control');
    await dropDown.selectOption('consult');
    //await page.pause();
    //SAELECTING RADIO BUTTON
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    await expect(await page.locator('.radiotextsty').last().isChecked()).toBeTruthy();
    await page.locator('#terms').check();
    expect( await page.locator('#terms').isChecked()).toBeTruthy();
    await expect(documentLink).toBeVisible();
    await expect(documentLink).toHaveAttribute('class','blinkingText');

    //await loginButton.click();   
    

});

test('Child Window Handle Test', async({browser})=>
{

 const context = await browser.newContext();
 const page = await context.newPage();
 await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
 const documentLink= page.locator('[href*="documents-request"]');
 const [newPage] = await Promise.all(
[
  context.waitForEvent('page'),// Listen for the new page event
 //They are 3 states of promise : pending, fullfilled, rejected
 documentLink.click(),
 ]) //new page opened
  const text = await newPage.locator(".red").textContent();
  console.log(text);
  const arrayText = text.split('@');
  const domain = arrayText[1].trim().split(' ')[0];
  console.log(domain);
  await page.locator('#username').fill(domain)
  console.log( await page.locator('#username').inputValue());// to get the value present in the edit box

});