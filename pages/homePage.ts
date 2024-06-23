import { Page } from '@playwright/test'

class HomePage {
    private readonly searchBar = this.page.getByLabel("Search For Products")
    private readonly searchBtn = this.page.locator(".search-button .type-text")
    private readonly shopByCat = this.page.getByLabel("Shop by Category")
    constructor(private readonly page: Page) {

    }

    async enterSearchString(q:string){
        await this.searchBar.fill(q)
    }
    async searchForItem(){
        await this.searchBtn.click();
    }

    async expandLeftMenuAndShopByCategory(cat:string){
        await this.shopByCat.click();
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