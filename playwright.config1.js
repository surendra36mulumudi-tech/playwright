// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { worker } from 'cluster';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig({
  testDir: './tests',
  retries:1, // your failed test will be retried one more time. Default is 0
  workers: 1, // run your tests in one worker to avoid parallel execution. Default is number of cores on your machine
  timeout: 100 * 1000,
  expect: {
    timeout: 100 * 1000
  },

  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  projects:[
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        headless: false,    
        screenshot : 'on',
        //... devices['iPhone 12 Pro Max'],
        //trace: 'on',
        //video: 'on',
        // Base URL to use in actions like `await page.goto("/")`.
        // baseURL: 'http://<IP_ADDRESS>:3000',
    
       
          }
      },
      {
        name: 'chromium',
        use: {
          browserName: 'chromium',
          headless: false,  
          trace: 'retain-on-failure', // Record trace only on test failure to save resources.
          video: 'retain-on-failure', // Record video only on test failure to save resources.
          screenshot : 'only-on-failure', // Capture screenshots only on test failure to save resources.
          viewport: { width: 1280, height: 720 },          
          ignoreHTTPSErrors: true, // Ignore HTTPS errors for localhost testing OR resolve the certificate issue by adding the localhost certificate to your trusted certificates.
          permissions: ['geolocation'], // Grant geolocation permissions to the browser context.
          
          //... devices['Galaxy S9+'],
          // Base URL to use in actions like `await page.goto("/")`.
          // baseURL: 'http://<IP_ADDRESS>:3000',
    
       
              }
      },
        {
          name: 'firefox',
          use: {
            browserName: 'firefox',
            headless: true,    
            screenshot : 'on',
            //trace: 'on',
            video: 'on',
            
    
       
                }
      },
      {
     name: 'edge',
      use: {
        browserName: 'chromium',
        channel: 'msedge',   // ✅ Edge Browser
        headless: false,
        screenshot: 'on',
        video: 'on',
        // trace: 'on',

       
              
          }
      }

  ]
  

  
});
module.exports =defineConfig(config);
