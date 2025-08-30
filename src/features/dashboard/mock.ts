import { useEffect, useState } from 'react'

interface DashboardData {
  totalProducts: number
  lowStockProducts: number
  activeTrips: number
  totalDealers: number
  totalConsignments: number
  recentTrips: {
    id: string
    code: string
    driver: string
    route: string
    status: string
    progress: number
    items: number
    value: number
    stops: { completed: number; total: number }
  }[]
  recentActivities: {
    id: string
    type: 'delivery' | 'trip' | 'stock' | 'system'
    title: string
    description: string
    timestamp: string
    status: 'success' | 'info' | 'warning' | 'error' | 'muted' | undefined
  }[]
}

export function DashboardMockupData() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)

  useEffect(() => {
    try {
      const demoData: DashboardData = {
        totalProducts: 1247,
        lowStockProducts: 12,
        activeTrips: 8,
        totalDealers: 67,
        totalConsignments: 156,
        recentTrips: [
          {
            id: 'trip-1',
            code: 'SP-001',
            driver: 'João Silva',
            route: 'São Paulo → Rio de Janeiro',
            status: 'in_transit',
            progress: 62,
            items: 156,
            value: 2847.5,
            stops: { completed: 5, total: 8 },
          },
          {
            id: 'trip-2',
            code: 'RJ-002',
            driver: 'Maria Santos',
            route: 'Rio de Janeiro → Belo Horizonte',
            status: 'loading',
            progress: 15,
            items: 44,
            value: 1920.0,
            stops: { completed: 0, total: 6 },
          },
        ],
        recentActivities: [
          {
            id: 'act-1',
            type: 'system',
            title: 'Sistema inicializado',
            description: 'Dashboard carregado com sucesso',
            timestamp: 'agora',
            status: 'success',
          },
          {
            id: 'act-2',
            type: 'trip',
            title: '8 viagens ativas',
            description: 'Operações em andamento',
            timestamp: '5min',
            status: 'info',
          },
          {
            id: 'act-3',
            type: 'stock',
            title: '12 produtos em estoque baixo',
            description: 'Atenção necessária',
            timestamp: '10min',
            status: 'error',
          },
        ],
      }
      setDashboardData({ ...demoData })
    } catch (error) {
      console.error('Erro ao carregar dashboard:', error)
      // Ensure we always show something
      setDashboardData({
        totalProducts: 1247,
        lowStockProducts: 12,
        activeTrips: 8,
        totalDealers: 67,
        totalConsignments: 156,
        recentTrips: [],
        recentActivities: [
          {
            id: 'act-1',
            type: 'delivery',
            title: 'Modo demonstração',
            description: 'Dados simulados para teste',
            timestamp: 'agora',
            status: 'warning',
          },
        ],
      })
    }
  }, [])

  return dashboardData
}
