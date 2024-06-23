import { Locator, Page } from '@playwright/test'

class AddressBookPage {
    private readonly delete = this.page.locator(".btn.btn-danger")
    private readonly warning = this.page.locator(".alert.alert-warning")

    constructor(private readonly page:Page){

    }

    async deleteAddress(){
        await this.delete.click()
    }
    async validateWarning():Promise<Locator>{
        return this.warning
    }

 
}

export default AddressBookPage;