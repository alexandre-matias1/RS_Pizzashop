import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Nome do estabelecimento' })
    .fill('Pizza Shop')
  await page.getByRole('textbox', { name: 'Seu nome' }).fill('Paulo')
  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('paulo@paulo.com')
  await page.getByRole('textbox', { name: 'Telefone' }).fill('1140028922')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  const toast = page.getByText('Restaurante cadastrado com sucesso')
  await expect(toast).toBeVisible()
})

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
