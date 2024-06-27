
import path from 'path'
import {test,expect} from '../../Fixtures/PageFixtures'
import { readJsonFile,generateRandomPhoneNumber } from '../../FrameworkUtils/Utils'


test.describe('Edit account details',()=>{

    let fData = readJsonFile('tests/api/Registration/data/RegisterUser.json')
    const editData ={
        firstname: fData.firstname,
        lastname:  fData.lastname,
        email: fData.email,
        telephone:generateRandomPhoneNumber()
    }

    const loginForm = {
        email: fData.email,
        password: fData.password
    }

    test('Edit account details and validate @sanity', async ({request}) => {
        await request.post('index.php?route=account/login', {multipart: loginForm})
        await request.storageState({path:'stateStorage/primaryUser.json'})
        const responseOut = await request.post('index.php?route=account/edit', {multipart: editData})
        expect(responseOut.ok()).toBeTruthy();
        expect(responseOut.url()).toContain('account/account')
   
    })

    test.use({ storageState: 'stateStorage/primaryUser.json' })
    test('validate account changes @sanity',async({page,editAccountPage})=>{
        await page.goto('index.php?route=account/edit')
        expect(await editAccountPage.validateFields('phone',editData.telephone)).toBe(true)
    })

})