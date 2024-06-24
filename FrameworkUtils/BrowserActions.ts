import { Page, Locator, Keyboard } from '@playwright/test';


class BrowserActions {
  constructor(private readonly page: Page, private readonly keyboard?: Keyboard) {


  }

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
  async doubleClick(locator: string) {
    await this.page.locator(locator).dblclick();
  }

  //right & modifier click
  async buttonClick(locator: string, btn: "left" | "right" | "middle") {
    await this.page.locator(locator).click({ button: btn })
  }

  //modifier click Meta --Windows
  async modifierClick(locator: string, mods: 'Alt' | 'Control' | 'Meta' | 'Shift') {
    await this.page.locator(locator).click({ modifiers: [mods] })
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
  async getTextContent(locator: string): Promise<string | null> {
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


  /*
   * Keyboard Actions 
   */

  async press(key: string, options?: { delay?: number }): Promise<void> {
    await this.keyboard?.press(key, options);
  }

  async down(key: string): Promise<void> {
    await this.keyboard?.down(key);
  }

  async up(key: string): Promise<void> {
    await this.keyboard?.up(key);
  }

  async type(text: string, options?: { delay?: number }): Promise<void> {
    await this.keyboard?.type(text, options);
  }

  async insertText(text: string): Promise<void> {
    await this.page.keyboard.insertText(text);
  }


  //Locators

  async findElement(selector: string, nthElement?: number): Promise<Locator> {
    if (!nthElement) {
      return await this.page.locator(selector)
    } else {
      return await this.page.locator(selector).nth(nthElement)
    }
  }

  async findElementByElementAttributes(selector: string, attr: "id" | "placeholder" | "label" | "text" | "altText" | "role" | "title"): Promise<Locator> {
    let element: Locator | null = null;
    switch (attr) {
      case 'id':
        element = await this.page.locator(`[id="${selector}"]`);
        break;
      case 'placeholder':
        element = await this.page.locator(`[placeholder="${selector}"]`);
        break;
      case 'label':
        element = await this.page.locator(`label:has-text("${selector}")`);
        break;
      case 'text':
        element = await this.page.locator(`text="${selector}"`);
        break;
      case 'altText':
        element = await this.page.locator(`[alt="${selector}"]`);
        break;
      case 'role':
        element = await this.page.locator(`[role="${selector}"]`);
        break;
      case 'title':
        element = await this.page.locator(`[title="${selector}"]`);
        break;
      default:
        throw new Error(`Unsupported attribute type: ${attr}`);
    }

    return element;
  }

}

export default BrowserActions;
