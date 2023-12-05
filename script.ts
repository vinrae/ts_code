import { Builder, By, Capabilities, until, WebDriver } from 'selenium-webdriver';

async function checkTextOnPage(expectedText: string): Promise<void> {
   const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

   try {
     // Open a web page
     await driver.get('https://example.com');

     // Wait for the page to load completely (you can use other conditions here)
     await driver.wait(until.titleIs('Example Domain'), 5000);

     // Get text from the element with the given xpath
     const xpathExpression = "//div[1]";
     const elementText = await driver.findElement(By.xpath(xpathExpression)).getText();

     // Check if the expected text is contained in the received text
     if (elementText.includes(expectedText)) {
       console.log(`Text "${expectedText}" found on page.`);
     } else {
       console.log(`Text "${expectedText}" was not found on the page.`);
     }
   } finally {
     // Close the browser after the check is completed
     await driver.quit();
   }
}

// Check for the text  on the page
checkTextOnPage("Status").catch(console.error);
