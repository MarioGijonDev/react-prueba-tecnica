// @ts-check
import { test, expect } from '@playwright/test'

const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/' // [DEJÓ DE FUNCIONAR (BAD GATEWAY)]

const LOCALHOST_URL = 'http://localhost:5173/'

test('has title', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_ENDPOINT_IMAGE_URL)).toBeTruthy()
})
