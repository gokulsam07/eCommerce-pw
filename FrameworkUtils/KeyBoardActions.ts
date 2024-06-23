import { Locator, Page } from "@playwright/test"

class KeyBoardActions {
    constructor(private page: Page) {

    }
    // Press key
    async pressKey(locator: string, key: string) {
        await this.page.locator(locator).press(key);
    }
}

export default KeyBoardActions;