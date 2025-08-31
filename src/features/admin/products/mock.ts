export interface Product {
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

export interface Movement {
  id: string
  product_id: string
  quantity: number
  movement_type: string
  created_at: string
  notes?: string
  reference_type?: string
}

export const mockProducts: Product[] = [
  {
    id: 'prod-1',
    sku: 'JC001',
    name: 'Jogo de Cama Casal',
    categories: { name: 'Cama' },
    description: 'Jogo de cama casal 100% algodão',
    price: 89.9,
    minimum_stock: 10,
    current_stock: 25,
    qr_code: 'PRODUCT_ABC123',
    created_at: new Date().toISOString(),
    is_active: true,
  },
  {
    id: 'prod-2',
    sku: 'TB001',
    name: 'Toalha de Banho',
    categories: { name: 'Banho' },
    description: 'Toalha de banho felpuda',
    price: 45.9,
    minimum_stock: 15,
    current_stock: 8,
    qr_code: 'PRODUCT_DEF456',
    created_at: new Date().toISOString(),
    is_active: true,
  },
  {
    id: 'prod-3',
    sku: 'EQ001',
    name: 'Edredom Queen',
    categories: { name: 'Cama' },
    description: 'Edredom queen size microfibra',
    price: 129.9,
    minimum_stock: 5,
    current_stock: 0,
    qr_code: 'PRODUCT_GHI789',
    created_at: new Date().toISOString(),
    is_active: true,
  },
]

export const mockMovements: Movement[] = []
