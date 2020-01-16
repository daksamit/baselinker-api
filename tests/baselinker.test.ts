import { baselinkerClient } from '../src'

require('dotenv').config()
const token = process.env.TOKEN || ''

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

describe('Baselinker playground', () => {
  it('orders hould return an array', async () => {
    const orders = await client.getOrders()
    expect(orders instanceof Array).toBeTruthy()
  })
})
