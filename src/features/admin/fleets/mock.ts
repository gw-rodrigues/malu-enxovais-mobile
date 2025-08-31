interface Vehicle {
  id: string
  license_plate: string
  brand?: string
  model?: string
  year?: number
  vehicle_type: string
  fuel_type?: string
  max_weight_kg?: number
  max_volume_m3?: number
  current_mileage_km?: number
  qr_code: string
  is_active: boolean
  created_at: string
  vehicle_drivers?: {
    driver_id: string
    is_primary: boolean
    users: {
      id: string
      full_name: string
    }
  }[]
}

export const mockVehicles: Vehicle[] = [
  {
    id: 'vehicle-1',
    license_plate: 'ABC-1234',
    brand: 'Mercedes-Benz',
    model: 'Atego',
    year: 2020,
    vehicle_type: 'truck',
    fuel_type: 'diesel',
    max_weight_kg: 5000,
    max_volume_m3: 25,
    current_mileage_km: 45000,
    qr_code: 'VEH_DEMO123',
    is_active: true,
    created_at: new Date().toISOString(),
    vehicle_drivers: [],
  },
  {
    id: 'vehicle-2',
    license_plate: 'DEF-5678',
    brand: 'Volkswagen',
    model: 'Delivery',
    year: 2019,
    vehicle_type: 'van',
    fuel_type: 'diesel',
    max_weight_kg: 3500,
    max_volume_m3: 15,
    current_mileage_km: 38000,
    qr_code: 'VEH_DEMO456',
    is_active: false,
    created_at: new Date().toISOString(),
    vehicle_drivers: [],
  },
]

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
