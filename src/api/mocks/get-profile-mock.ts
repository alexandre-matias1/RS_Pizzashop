import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Bob',
      email: 'bob@mail.com',
      phone: '11992310202',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
