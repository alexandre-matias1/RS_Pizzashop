import { api } from '../lib/axios'

export interface GetMangedRestaurantResponse {
  id: string
  name: string
  description: string | null
  managerId: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getMangedRestaurant() {
  const response = await api.get<GetMangedRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
