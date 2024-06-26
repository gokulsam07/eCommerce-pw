import { Page } from '@playwright/test'

class EditAccountPage {
    private readonly firstName = this.page.locator("#input-firstname")
    private readonly lastName = this.page.locator("#input-lastname")
    private readonly email = this.page.locator("#input-email")
    private readonly phone = this.page.locator("#input-telephone")
    private readonly submit = this.page.locator("input[value='Continue']")
    constructor(private readonly page: Page) {

    }

    async selectAccountMenu(menu: string) {
        await this.page.locator(`xpath=//a[normalize-space()='${menu}']`).click();
    }
    async editProfileDetailsAndSave(field: 'firstName' | 'lastName' | 'email' | 'phone', value: string): Promise<void> {
        switch (field) {
            case 'firstName':
                await this.firstName.fill(value);
                break;
            case 'lastName':
                await this.lastName.fill(value);
                break;
            case 'email':
                await this.email.fill(value);
                break;
            case 'phone':
                await this.phone.fill(value);
                break;
            default:
                throw new Error(`Unknown field: ${field}`);
        }

        await this.submit.click();
    }

    async validateFields(field: 'firstName' | 'lastName' | 'email' | 'phone', value: string): Promise<boolean> {
        let retrieved: string
        switch (field) {
            case 'firstName':
                retrieved = await this.firstName.getAttribute('value')??""
                return retrieved?.includes(value)
            case 'lastName':
                retrieved = await this.lastName.getAttribute('value')??""
                return retrieved?.includes(value)
            case 'email':
                retrieved = await this.email.getAttribute('value')??""
                return retrieved?.includes(value)
            case 'phone':
                retrieved = await this.phone.getAttribute('value')??""
                return retrieved?.includes(value)
            default:
                throw new Error(`Unknown field: ${field}`);
        }
    }


}

export default EditAccountPage;