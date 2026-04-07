# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientApp.spec.js >> @Web Client App login test for  ADIDAS ORIGINAL
- Location: tests\ClientApp.spec.js:16:1

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://rahulshettyacademy.com/client", waiting until "load"

```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | class LoginPage{
  3  |     
  4  |     constructor(page)
  5  | {
  6  |     this.page = page;
  7  |     this.signInbutton= page.locator("[value='Login']");
  8  |     this.userName = page.locator("#userEmail");
  9  |     this.password = page.locator("#userPassword");
  10 | 
  11 | }
  12 | 
  13 | async goTo()
  14 | {
> 15 |     await this.page.goto("https://rahulshettyacademy.com/client");
     |                     ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  16 | }
  17 | 
  18 | async validLogin(username,password)
  19 | {
  20 |     await  this.userName.type(username);
  21 |      await this.password.type(password);
  22 |      await this.signInbutton.click();
  23 |      await this.page.waitForLoadState('networkidle');
  24 | 
  25 | }
  26 | 
  27 | }
  28 | module.exports = {LoginPage};
```