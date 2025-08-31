export type Product = {
  id: string
  sku: string
  name: string
  categories?: { name: string }
  description?: string
  price: number
  minimum_stock: number
  qr_code: string
  created_at: string
  is_active: boolean
  current_stock: number
}

export type Movement = {
  id: string
  product_id: string
  quantity: number
  movement_type: string
  created_at: string
  notes?: string
  reference_type?: string
}
