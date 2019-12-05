import { baselinkerClient } from '../src'

const token = '1234-56789-8JGKELWOIRJD8JWJQJB0DKEILBJLKSD3WJLKJEJIO3NCVNJLK3JIODSKLJWEIOQQ'
const options = { token }
const client = baselinkerClient(options)

describe('Baselinker api client', () => {
  it('should client contain properties', async () => {
    const properties = [
      'getJournalList',
      'getOrders',
      'getOrder',
      'setOrderFields',
      'getOrderStatusList',
      'getStoragesList',
    ]

    expect(client).toBeTruthy()
    properties.forEach(prop => expect(client).toHaveProperty(prop))
  })
})
