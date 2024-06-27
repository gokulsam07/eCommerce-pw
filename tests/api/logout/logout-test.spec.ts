
import {test,expect} from '../../../fixtures/page-fixtures'
import { readJsonFile } from '../../../framework-utils/utils'


test.describe('Logout & validate',()=>{
    test('POST Logout & validate', async ({ request}) => {
        let fData = readJsonFile('tests/api/registration/data/register-user.json')
        const loginForm = {
            email: fData.email,
            password: fData.password
        };
        const responseIn = await request.post('index.php?route=account/login', {multipart: loginForm})
        expect(responseIn.ok()).toBeTruthy();
        expect(responseIn.url()).toContain('account/account');
        const responseOut = await request.post('index.php?route=account/logout')
        expect(responseOut.ok()).toBeTruthy()
        expect(responseOut.url()).toContain('account/logout');
        const responseV = await request.post('index.php?route=account/order')
        expect(responseV.url()).toContain('account/login')
    })

})