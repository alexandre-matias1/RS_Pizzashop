import { render } from '@testing-library/react'

import { OrderStatus } from '@/pages/app/orders/order-status'

describe('Order Status', () => {
  it('should display the right text based when order status is pending', () => {
    // Pending
    const wrapper = render(<OrderStatus status="pending" />)

    // wrapper.debug()

    const statusText = wrapper.getByText('Pendente')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })
  it('should display the right text based when order status is canceled', () => {
    // Canceled

    const wrapper = render(<OrderStatus status="canceled" />)

    // wrapper.debug()

    const statusText = wrapper.getByText('Cancelado')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })
  it('should display the right text based when order status is delivering', () => {
    // delivering

    const wrapper = render(<OrderStatus status="delivering" />)

    // wrapper.debug()

    const statusText = wrapper.getByText('Em entrega')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })
  it('should display the right text based when order status is processing', () => {
    // processing

    const wrapper = render(<OrderStatus status="processing" />)

    // wrapper.debug()

    const statusText = wrapper.getByText('Em preparo')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })
  it('should display the right text based when order status is delivered', () => {
    // delivered

    const wrapper = render(<OrderStatus status="delivered" />)

    // wrapper.debug()

    const statusText = wrapper.getByText('Entregue')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})
