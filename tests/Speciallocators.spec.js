const{test,expect} = require('@playwright/test');

test('Special locators in Playwright', async({page})=>
{
    page.goto('https://rahulshettyacademy.com/angularpractice/');
    //palywright special locators
    //1. getByLabel --> select the checkbox
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    //select the redio button
    await page.getByLabel('Employed').check();
    // select options from dropdown
    await page.getByLabel('Gender').selectOption("Female");
    //When we have scope of edit box typing "getByLabel" will not work

    //2. getByPlaceholder --> type in the edit box
    await page.getByPlaceholder('Password').fill('12345');
    //3. getByRole --> click on the submit button
    await page.getByRole('button', {name:'Submit'}).click();
    //4. getByText --> click on the link
    await page.getByText('Success! The Form has been submitted successfully!.').isVisible();

   // await page.pause();
})