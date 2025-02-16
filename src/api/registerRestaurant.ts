import { api } from '../lib/axios'

export interface RegisterRestaurant {
  restaurantName: string
  email: string
  managerName: string
  phone: string
}

export async function resgisterRestaurant({
  email,
  managerName,
  phone,
  restaurantName,
}: RegisterRestaurant) {
  await api.post('/restaurants', { email, managerName, phone, restaurantName })
}
