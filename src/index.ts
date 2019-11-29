import request from 'request'
import * as types from './types'

export const baselinkerClient = async (options: types.Options) => {
  const { token } = options

  if (!options || !token) {
    throw {
      status: 'ERROR',
      error_code: 'ERROR_MISSING_TOKEN',
      error_message: 'Token do komunikacji z baselinkerem jest wymagany',
    }
  }

  const requestOptions = {
    url: 'https://api.baselinker.com/connector.php',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    formData: { token },
  }

  // TODO: test if token is valid

  const baselinkerRequest = async (method: string, parameters = {}): Promise<any> => {
    return await new Promise((resolve, reject) => {
      const options = {
        ...requestOptions,
        formData: {
          ...requestOptions.formData,
          method,
          parameters: JSON.stringify(parameters),
        },
      }
      request(options, function(err, response, body) {
        const data = body && JSON.parse(body)
        if (err) return reject(err)
        else if (data && data.status === 'ERROR') return reject(data)
        else return resolve(data)
      })
    })
  }

  return {
    // https://api.baselinker.com/?method=getJournalList
    getJournalList: async (parameters: types.JournalListRequest = {}): Promise<types.JournalLog[]> => {
      const res: types.JournalListResponse = await baselinkerRequest('getJournalList', parameters)
      const logs: types.JournalLog[] = res.logs
      return logs || []
    },

    // https://api.baselinker.com/?method=getOrders
    getOrders: async (parameters: types.OrderRequest = {}): Promise<types.Order[]> => {
      const res: types.OrderResponse = await baselinkerRequest('getOrders', parameters)
      const orders: types.Order[] = res.orders
      return orders || []
    },
    getOrder: async (order_id: number): Promise<types.Order> => {
      const res: types.OrderResponse = await baselinkerRequest('getOrders', { order_id, get_unconfirmed_orders: 1 })
      const order: types.Order = res.orders[0]
      return order || null
    },

    // https://api.baselinker.com/?method=setOrderFields
    setOrderFields: async (parameters: types.OrderFields = {}): Promise<types.Order> => {
      const res: types.Order = await baselinkerRequest('setOrderFields', parameters)
      return res || null
    },

    // https://api.baselinker.com/?method=getOrderStatusList
    getOrderStatusList: async (): Promise<types.OrderStatus[]> => {
      const res: types.OrderStatusResponse = await baselinkerRequest('getOrderStatusList')
      const statuses = res && res.statuses
      return statuses || []
    },

    // ... list of baselinker methods - https://api.baselinker.com/index.php
  }
}
