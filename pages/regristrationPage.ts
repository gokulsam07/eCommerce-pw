import {Page} from '@playwright/test'
import { timeStamp } from 'console';

export default class RegistrationPage{
    private readonly firstName = this.page.locator("#input-firstname")
    private readonly lastName = this.page.locator("#input-lastname")
    private readonly email = this.page.locator("#input-email")
    private readonly phone = this.page.locator("#input-telephone")
    private readonly password = this.page.locator("#input-password")
    private readonly confirmPwd = this.page.locator("#input-confirm")
    private readonly tnC = this.page.locator("label[for='input-agree']")
    private readonly submit = this.page.locator("input[value='Continue']")

    constructor(public page:Page){

    }

    async enterFirstName(fname:string){
       await this.firstName.fill(fname)
    }
    async enterLastName(lname:string){
       await this.lastName.fill(lname)
    }
    async enterEmail(mail:string){
       await this.email.fill(this.generateRandomEmail())
    }
    async enterTelephone(ph:string){
       await this.phone.fill(ph)
    }
    async enterPassword(pwd:string){
       await this.password.fill(pwd)
    }
    async confirmPassword(pwd:string){
       await this.confirmPwd.fill(pwd)
    }
    async enableTermsNConditions(){
       await this.tnC.click();
    }
    async registerUser(){
       await this.submit.click();
    }


    private generateRandomEmail():string{
        const timeStamp = Date.now()
        const email: string = `gokulsam07${timeStamp}@gmail.com`
        console.log("Generated Random e-mail: " + email)
        return email
    }
}


