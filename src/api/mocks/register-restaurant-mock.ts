import { http, HttpResponse } from 'msw'

import { RegisterRestaurant } from '../registerRestaurant'

export const registerRestaurantsMock = http.post<never, RegisterRestaurant>(
  '/restaurants',
  async ({ request }) => {
    const { restaurantName } = await request.json()

    if (restaurantName === 'Pizza Shop') {
      return new HttpResponse(null, { status: 201 })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
