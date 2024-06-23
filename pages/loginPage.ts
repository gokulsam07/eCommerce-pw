import {Page} from '@playwright/test'
class LoginPage{
    private readonly email = this.page.locator("#input-email")
    private readonly pwd = this.page.locator("#input-password")
    private readonly loginBtn = this.page.locator("input[value='Login']")
    
    constructor(private readonly page:Page){
        
    }

    async enterUserName(uName:string){
       await this.email.fill(uName);
    }
    async enterPassword(pwd:string){
        await this.pwd.fill(pwd);
     }
     async login(){
        await this.loginBtn.click();
     }
}

export default LoginPage;