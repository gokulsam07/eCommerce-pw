
import { test as axeBase, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

type AxeFixture = {
  axe: AxeBuilder
}

const test = axeBase.extend<AxeFixture>({
  axe: async ({ page }, use) => {
    const axeCheck = new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    await use(axeCheck)
  }
})

export async function attachAccessibilityResults(testInfo: any, results: any) {
  await testInfo.attach('accessibility-test-result', {
    body: JSON.stringify(results, null, 2),
    contentType: 'application/json',
  });
}


export {test,expect}