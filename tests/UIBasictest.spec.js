const {test,expect} = require('@playwright/test');
 
test('@API Browser Context palywright test', async({browser})=>
{
    //playwright code
    //step1: launch browser
    //browser is playwright fixture
    console.log("Hello Playwright");
    const context = await browser.newContext();
    //step2: create a new page
    const page = await context.newPage();
    //step3: navigate to url
    await page.goto("https://www.google.com/");
    //step4: perform actions
    //step5: close browser
    //In javascript, all the steps will execute at time
    // Code will not wait for the previous step to complete
    // Code will break if any step takes more time
    // To avoid that we use async and await

});

test('First Playwright test', async({page})=>
{   
    const expectedURL= 'https://www.saucedemo.com/';
    const expectedTitle= 'Swag Labs';
    const userName= page.locator('#user-name');
    const password= page.locator('#password');
    const loginButton= page.locator('#login-button');
    const userNameErrorMessage= page.locator('//h3[text()="Epic sadface: Username is required"]');
    const passwordErrorMessage= page.locator('//h3[text()="Epic sadface: Password is required"]');
    const invalidCredentialsMessage= page.locator('//h3[text()="Epic sadface: Username and password do not match any user in this service"]');
   
    const expectedUserNameErrorMessage= 'Epic sadface: Username is required';
    const expectedPasswordErrorMessage= 'Epic sadface: Password is required';
    const expectedInvalidCredentialsMessage= 'Epic sadface: Username and password do not match any user in this service';   
    //step3: navigate to url
    await page.goto(expectedURL);
    //get the title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle(expectedTitle);
    //await page.locator('//*[@id="application"]/header/div/div[2]/div/ol/li[3]/a').click();
   // console.log(await page.title());
    //await expect(page).toHaveTitle('Log In to Your Wix Account - Wix.com');
       
        await loginButton.click();
        console.log(await userNameErrorMessage.textContent());
        await expect(userNameErrorMessage).toHaveText(expectedUserNameErrorMessage);
        await userName.fill('sss');
        await loginButton.click();
        console.log(await passwordErrorMessage.textContent());
        await expect(passwordErrorMessage).toContainText(expectedPasswordErrorMessage);
        await password.fill('sss');
        await loginButton.click();
        console.log(await invalidCredentialsMessage.textContent());
        await expect(invalidCredentialsMessage).toContainText(expectedInvalidCredentialsMessage);
    
    // Clear the edit boxes by enetring new values
    await userName.fill('');
    await password.fill('');
    // Enter valid credentials and login
    await userName.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();
    console.log(await page.locator('#item_4_title_link').textContent()); 
    const allItems = await page.locator('.inventory_item_name').allTextContents(); 
    console.log(allItems);
    

    

   

});

