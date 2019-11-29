export interface Options {
  token: string
}

export interface ErrorResponse {
  status: string
  error_code: string
  error_message: string
}

// https://api.baselinker.com/?method=getOrders

export interface OrderRequest {
  order_id?: number
  date_confirmed_from?: number
  date_from?: number
  id_from?: number
  get_unconfirmed_orders?: boolean
  status_id?: number
  filter_email?: string
}

export interface Order {
  order_id?: number
  external_order_id?: string
  shop_order_id?: string
  order_source?: string
  order_source_id?: 9740
  order_source_info?: string
  order_status_id?: number
  confirmed?: boolean
  date_confirmed?: number
  date_add?: number
  date_in_status?: number
  user_login?: string
  phone?: string
  email?: string
  user_comments?: string
  admin_comments?: string
  currency?: string
  payment_method?: string
  payment_method_cod?: string
  payment_done?: number
  delivery_method?: string
  delivery_price?: number
  delivery_package_module?: string
  delivery_package_nr?: string
  delivery_fullname?: string
  delivery_company?: string
  delivery_address?: string
  delivery_city?: string
  delivery_postcode?: string
  delivery_country?: string
  delivery_country_code?: string
  delivery_point_name?: string
  delivery_point_address?: string
  delivery_point_postcode?: string
  delivery_point_city?: string
  invoice_fullname?: string
  invoice_company?: string
  invoice_nip?: string
  invoice_address?: string
  invoice_city?: string
  invoice_postcode?: string
  invoice_country?: string
  invoice_country_code?: string
  want_invoice?: string
  extra_field_1?: string
  extra_field_2?: string
  order_page?: string
  pick_state?: number
  pack_state?: number
  products?: {
    storage?: string
    storage_id?: string
    order_product_id?: string
    product_id?: string
    variant_id?: string
    name?: string
    attributes?: string
    sku?: string
    ean?: string
    auction_id?: string
    price_brutto?: number
    tax_rate?: number
    quantity?: number
    weight?: number
  }[]
}

export interface OrderFields {
  order_id?: number
  admin_comments?: string
  user_comments?: string
  payment_method?: string
  payment_method_cod?: boolean
  email?: string
  phone?: string
  user_login?: string
  delivery_method?: string
  delivery_price?: number
  delivery_fullname?: string
  delivery_company?: string
  delivery_address?: string
  delivery_postcode?: string
  delivery_city?: string
  delivery_country?: string
  delivery_country_code?: string
  delivery_point_name?: string
  delivery_point_address?: string
  delivery_point_postcode?: string
  delivery_point_city?: string
  invoice_fullname?: string
  invoice_company?: string
  invoice_nip?: string
  invoice_address?: string
  invoice_postcode?: string
  invoice_city?: string
  invoice_country?: string
  invoice_country_code?: string
  want_invoice?: boolean
  extra_field_1?: string
  extra_field_2?: string
  pick_state?: number
  pack_state?: number
}

export interface OrderResponse {
  status: string
  orders: Order[]
}

// https://api.baselinker.com/?method=getJournalList

export interface JournalListRequest {
  last_log_id?: number
  logs_types?: number[]
  order_id?: number
}

export interface JournalLog {
  log_id: number
  log_type: number
  order_id: number
  object_id: number
  date: number
}

export interface JournalListResponse {
  status: string
  logs: JournalLog[]
}

// https://api.baselinker.com/?method=getOrderStatusList

export interface OrderStatus {
  id: number
  name: string
  name_for_customer: string
}

export interface OrderStatusResponse {
  status: string
  statuses: OrderStatus[]
}
