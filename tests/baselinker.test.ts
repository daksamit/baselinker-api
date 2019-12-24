import { baselinkerClient } from '../src'

const token = 'sample-baselinker-token'

const options = { token }
const client = baselinkerClient(options)

describe('Baselinker request', () => {
  it('test responses', async () => {
    const list = await client.getOrderStatusList()
    expect(Array.isArray(list) && list.length).toBeTruthy()
    const element = list[0]
    const properties = ['id', 'name', 'name_for_customer', 'color']
    properties.forEach(property => expect(element).toHaveProperty(property))
  })
})
