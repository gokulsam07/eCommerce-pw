import { Locator, Page } from '@playwright/test'

class OrderHistoryPage {

    constructor(private readonly page: Page) {

    }
    async viewOrderId(id: string) {
        await this.page.locator(`xpath=//table[contains(@class, 'table-bordered')]//td[contains(text(), '${id}')]/parent::tr//a`).click()
    }

    async validateItem(itm:string,price:string):Promise<Locator>{
       return this.page.locator(
           `//table[contains(@class, 'table-bordered')]//tbody//td[contains(text(),'${itm}')]/ancestor::table//tfoot//td[contains(text(),'${price}')]`)
    }

}
export default OrderHistoryPage;