const { test, expect } = require('@playwright/test');

test(" Test Case visual testing",async ({page})=>{
 
   await page.goto("https://www.google.com");
   console.log(await page.title());
    
   
})


 