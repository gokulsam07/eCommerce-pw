import { Page, Locator } from '@playwright/test';

class BrowserActions {
  constructor(private page: Page) {}

  // Fill input field
  async enterText(locator: string, value: string) {
    await this.page.locator(locator).fill(value);
  }

  // Type text with a delay between keystrokes
  async typeSequentially(locator: string, value: string, delayInterval: number) {
    await this.page.locator(locator).pressSequentially(value, { delay: delayInterval });
  }

  // Click element
  async clickElement(locator: string) {
    await this.page.locator(locator).click();
  }

  //double click element 
  async doubleClick(locator:string){
    await this.page.locator(locator).dblclick();
  }

  //right & modifier click
  async buttonClick(locator:string,btn:"left"|"right"|"middle"){
    await this.page.locator(locator).click({button:btn})
  }

  //modifier click Meta --Windows
  async modifierClick(locator:string,mods:'Alt' | 'Control' | 'Meta' | 'Shift'){
    await this.page.locator(locator).click({modifiers:[mods]})
  }

  // Select option from dropdown
  async selectOption(locator: string, value: string) {
    await this.page.locator(locator).selectOption(value);
  }

  // Check checkbox
  async checkCheckbox(locator: string) {
    await this.page.locator(locator).check();
  }

  // Uncheck checkbox
  async uncheckCheckbox(locator: string) {
    await this.page.locator(locator).uncheck();
  }

  // Hover over element
  async hoverOverElement(locator: string) {
    await this.page.locator(locator).hover();
  }

  // Drag and drop
  async dragAndDrop(sourceLocator: string, targetLocator: string) {
    await this.page.locator(sourceLocator).dragTo(this.page.locator(targetLocator));
  }

  // Take screenshot
  async takeScreenshot(locator: string, path: string) {
    await this.page.locator(locator).screenshot({ path });
  }

  // Get text content of an element
  async getTextContent(locator: string): Promise<string|null> {
    return this.page.locator(locator).textContent();
  }

  // Get input value
  async getInputValue(locator: string): Promise<string> {
    return this.page.locator(locator).inputValue();
  }

  // Wait for element to be visible
  async waitForVisibility(locator: string, timeout: number = 30000) {
    await this.page.locator(locator).waitFor({ state: 'visible', timeout });
  }

  // Wait for element to be hidden
  async waitForHidden(locator: string, timeout: number = 30000) {
    await this.page.locator(locator).waitFor({ state: 'hidden', timeout });
  }


  // Upload file
  async uploadFile(locator: string, filePath: string) {
    await this.page.locator(locator).setInputFiles(filePath);
  }

  // Clear input field
  async clearField(locator: string) {
    await this.page.locator(locator).clear();
  }


  // Focus on element
  async focusOnElement(locator: string) {
    await this.page.locator(locator).focus();
  }

}

export default BrowserActions;
