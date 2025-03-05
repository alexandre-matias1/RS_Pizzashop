import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()
  await page.getByRole('textbox', { name: 'Nome' }).fill('Pizza 101')
  await page
    .getByRole('textbox', { name: 'Descrição' })
    .fill('Another description')
  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado!')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Cancelar' }).click()

  await page.waitForTimeout(1000)
  expect(page.getByRole('button', { name: 'Pizza 101' })).toBeVisible()
  await page.waitForTimeout(1000)
})
