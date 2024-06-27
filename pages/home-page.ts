import { Page } from '@playwright/test'
import BrowserActions from '../framework-utils/browser-actions'


class HomePage {
    private bActions:BrowserActions;
    private readonly searchBar = "Search For Products"
    private readonly searchBtn = this.page.locator(".search-button .type-text")
    private readonly shopByCat = "Shop by Category"
    constructor(private readonly page: Page) {
        this.bActions=new BrowserActions(page)
    }

    async enterSearchString(q:string){
        (await this.bActions.findElementByElementAttributes(this.searchBar,'label')).fill(q)
    }
    async searchForItem(){
        await this.searchBtn.click();
    }

    async expandLeftMenuAndShopByCategory(cat:string){
        await this.bActions.clickElement(this.shopByCat)
        await this.page.locator(`//xpath='//span[normalize-space()='${cat}']`).click()
    }

    async selectOptionFromRibbonMenu(toHover:boolean, menu:string[]){
        if(toHover){
            await this.page.locator(`xpath=//span[normalize-space()='${menu[0]}']`).nth(1).hover();
            await this.page.locator(`xpath=//span[normalize-space()='${menu[1]}']`).click();
        }else{
            await this.page.locator(`xpath=//span[normalize-space()='${menu[0]}']`).first().click();
        }
        
    }
}

export default HomePage;