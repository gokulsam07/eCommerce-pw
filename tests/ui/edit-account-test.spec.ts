
import {test,expect} from '../../fixtures/page-fixtures'
import { readJsonFile,generateRandomPhoneNumber } from '../../framework-utils/utils'


test.describe('Edit account details',()=>{

    let fData = readJsonFile('tests/api/registration/data/register-user.json')
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
        await request.storageState({path:'state-storage/primaryuser.json'})
        const responseOut = await request.post('index.php?route=account/edit', {multipart: editData})
        expect(responseOut.ok()).toBeTruthy();
        expect(responseOut.url()).toContain('account/account')
   
    })

    test.use({ storageState: 'state-storage/primaryuser.json' })
    test('validate account changes @sanity',async({page,editAccountPage})=>{
        await page.goto('index.php?route=account/edit')
        expect(await editAccountPage.validateFields('phone',editData.telephone)).toBe(true)
    })

})