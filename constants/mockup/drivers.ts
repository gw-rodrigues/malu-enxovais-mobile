interface Driver {
  id: string
  full_name: string
  email?: string
  phone?: string
  role: string
  qr_code?: string
  is_active: boolean
  created_at: string
}

export const mockDrivers: Driver[] = [
  {
    id: 'driver-demo-id',
    full_name: 'João Silva',
    email: 'joao@maluenxovais.com',
    phone: '(11) 99999-9999',
    role: 'driver',
    qr_code: 'DRV_DEMO001',
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 'driver-2',
    full_name: 'Maria Santos',
    email: 'maria@maluenxovais.com',
    phone: '(11) 88888-8888',
    role: 'driver',
    qr_code: 'DRV_DEMO002',
    is_active: false,
    created_at: new Date().toISOString(),
  },
]
