import { Page } from '@playwright/test'

class MyAccountPage {
    private readonly msg = this.page.locator(".alert.alert-success.alert-dismissible")

    constructor(private readonly page:Page){

    }

    async selectAccountMenu(menu:string){
        await this.page.locator(`xpath=//a[normalize-space()='${menu}']`).click();
    }

    async validateMessage(validate:string):Promise<string|null>{
        return await this.msg.textContent()
    }

}

export default MyAccountPage;