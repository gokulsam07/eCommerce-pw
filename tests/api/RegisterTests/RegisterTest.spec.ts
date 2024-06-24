import { test, expect } from '../../../fixtures/PageFixtures'


test('GET request to public endpoint', async ({restController}) => {
        const response = await restController.get('route=account/login');
        console.log(response)
        console.log(String(await response.body()))
        expect(response.ok()).toBeTruthy();
})



