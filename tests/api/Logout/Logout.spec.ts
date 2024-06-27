
import {test,expect} from '../../../Fixtures/PageFixtures'
import { readJsonFile } from '../../../FrameworkUtils/Utils'


test.describe('Logout & validate',()=>{
    test('POST Logout & validate', async ({ request}) => {
        let fData = readJsonFile('tests/api/Registration/data/RegisterUser.json')
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