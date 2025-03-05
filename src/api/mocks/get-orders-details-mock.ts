import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrdersDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Joao',
      email: 'joao@mail.com',
      phone: '1140028922',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza 2' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 1000,
        product: { name: 'Pizza 3' },
        quantity: 1,
      },
      {
        id: 'order-item-3',
        priceInCents: 1000,
        product: { name: 'Pizza 4' },
        quantity: 1,
      },
    ],
    totalInCents: 3000,
  })
})
