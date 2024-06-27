import {attachAccessibilityResults, expect, test} from './axe-fixture'


test.describe('Axe health check',()=>{
    test('Accessibility check for home page',async({page,axe},testInfo)=>{
        await page.goto('')
        await page.waitForLoadState()
        let res = await axe.analyze()
        await attachAccessibilityResults(testInfo,res)
        expect.soft(res.violations).toEqual([])
    })
    

    test('Accessibility check for login page',async({page,axe},testInfo)=>{
        await page.goto('/index.php?route=account/login')
        await page.waitForLoadState()
        let res = await axe.analyze()
        await attachAccessibilityResults(testInfo,res)  
        expect.soft(res.violations).toEqual([])
    })
    
    
    test('Accessibility check for registration page',async({page,axe},testInfo)=>{
        await page.goto('/index.php?route=account/register')
        await page.waitForLoadState()
        let res = await axe.analyze()
        await attachAccessibilityResults(testInfo,res)  
        expect.soft(res.violations).toEqual([])
    })
    
    test('Accessibility check for search page',async({page,axe},testInfo)=>{
        await page.goto('/index.php?route=product%2Fsearch&search=')
        await page.waitForLoadState()
        let res = await axe.analyze()
        await attachAccessibilityResults(testInfo,res)  
        expect.soft(res.violations).toEqual([])
    })
    
    test('Accessibility check for blog page',async({page,axe},testInfo)=>{
        await page.goto('/index.php?route=extension/maza/blog/home')
        await page.waitForLoadState()
        let res = await axe.analyze()
        await attachAccessibilityResults(testInfo,res)  
        expect.soft(res.violations).toEqual([])
    })
})
