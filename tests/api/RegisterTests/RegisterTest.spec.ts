
import { test, expect } from '../../../fixtures/PageFixtures';
import { generateUniqueEmail, readJsonFile } from '../../../FrameworkUtils/Utils';


test.describe('Register & login',()=>{
    test('GET request to public endpoint', async ({ request }) => {
        const response = await request.get('index.php?route=account/login');
        expect(response.ok()).toBeTruthy();
    })

    test('GET request to non-existent endpoint', async ({ request }) => {
        const response = await request.get('index.php?route=account/doesnotexist');
        expect(response.status()).toBe(404);
    })

    test('POST Register user and validate login @sanity', async ({ request}) => {
        let emailValue: string=generateUniqueEmail()
        let fData = readJsonFile('tests/api/RegisterTests/RegisterUser.json')
        fData.email=emailValue
        const response = await request.post(`index.php?route=account/register`, { multipart:fData});
        expect(response.ok()).toBeTruthy();
        expect(response.url()).toContain('success');
        const loginForm = {
            email: emailValue,
            password: fData.password
        };
        const responseV = await request.post('index.php?route=account/login', {multipart: loginForm})
        expect(responseV.ok()).toBeTruthy();
        expect(responseV.url()).toContain('account/account');
    })

})
    


