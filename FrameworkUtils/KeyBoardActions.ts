import { Page, Keyboard } from '@playwright/test';
import { Keys } from '../FrameworkUtils/Keys';

class KeyboardActions {

    constructor(private readonly page: Page, private readonly keyboard: Keyboard) {


    }

    async press(key: string, options?: { delay?: number }): Promise<void> {
        await this.keyboard.press(key, options);
      }
    
      async down(key: string): Promise<void> {
        await this.keyboard.down(key);
      }
    
      async up(key: string): Promise<void> {
        await this.keyboard.up(key);
      }
    
      async type(text: string, options?: { delay?: number }): Promise<void> {
        await this.keyboard.type(text, options);
      }
    
      async insertText(text: string): Promise<void> {
        await this.page.keyboard.insertText(text);
      }
}

export default KeyboardActions