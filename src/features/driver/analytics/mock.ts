interface AnalyticsData {
  summary: {
    totalRevenue: number
    revenueGrowth: number
    totalOrders: number
    ordersGrowth: number
    avgOrderValue: number
    avgOrderGrowth: number
    conversionRate: number
    conversionGrowth: number
  }
  salesData: {
    month: string
    revenue: number
    orders: number
    profit: number
  }[]
  productPerformance: {
    category: string
    sales: number
    growth: number
    margin: number
    color: string
  }[]
  dealerPerformance: {
    region: string
    revenue: number
    dealers: number
    avgRevenue: number
    growth: number
  }[]
  tripEfficiency: {
    onTimeDeliveries: number
    avgDeliveryTime: number
    fuelEfficiency: number
    routeOptimization: number
  }
  topProducts: {
    name: string
    sales: number
    revenue: number
    growth: number
  }[]
  regionalData: {
    region: string
    value: number
  }[]
}

export const mockAnalyticsData: AnalyticsData = {
  summary: {
    totalRevenue: 2847569.5,
    revenueGrowth: 23.5,
    totalOrders: 1247,
    ordersGrowth: 18.2,
    avgOrderValue: 2284.5,
    avgOrderGrowth: 4.3,
    conversionRate: 34.7,
    conversionGrowth: -2.1,
  },
  salesData: [
    { month: 'Jan', revenue: 185430, orders: 89, profit: 55629 },
    { month: 'Fev', revenue: 223540, orders: 102, profit: 67062 },
    { month: 'Mar', revenue: 267890, orders: 125, profit: 80367 },
    { month: 'Abr', revenue: 298450, orders: 138, profit: 89535 },
    { month: 'Mai', revenue: 334560, orders: 156, profit: 100368 },
    { month: 'Jun', revenue: 378920, orders: 172, profit: 113676 },
    { month: 'Jul', revenue: 415680, orders: 189, profit: 124704 },
    { month: 'Ago', revenue: 456230, orders: 201, profit: 136869 },
    { month: 'Set', revenue: 398760, orders: 175, profit: 119628 },
    { month: 'Out', revenue: 423890, orders: 186, profit: 127167 },
    { month: 'Nov', revenue: 478950, orders: 214, profit: 143685 },
    { month: 'Dez', revenue: 523780, orders: 235, profit: 157134 },
  ],
  productPerformance: [
    {
      category: 'Cama',
      sales: 5847,
      growth: 18.5,
      margin: 32.4,
      color: '#3b82f6',
    },
    {
      category: 'Mesa',
      sales: 4231,
      growth: 12.3,
      margin: 28.7,
      color: '#06b6d4',
    },
    {
      category: 'Banho',
      sales: 3789,
      growth: 25.1,
      margin: 35.2,
      color: '#10b981',
    },
    {
      category: 'Decoração',
      sales: 2156,
      growth: -4.2,
      margin: 24.8,
      color: '#f59e0b',
    },
    {
      category: 'Infantil',
      sales: 1890,
      growth: 31.7,
      margin: 38.5,
      color: '#8b5cf6',
    },
  ],
  dealerPerformance: [
    {
      region: 'São Paulo',
      revenue: 856430,
      dealers: 18,
      avgRevenue: 47579,
      growth: 22.1,
    },
    {
      region: 'Rio de Janeiro',
      revenue: 634520,
      dealers: 14,
      avgRevenue: 45323,
      growth: 16.8,
    },
    {
      region: 'Minas Gerais',
      revenue: 523890,
      dealers: 12,
      avgRevenue: 43658,
      growth: 28.5,
    },
    {
      region: 'Paraná',
      revenue: 398760,
      dealers: 10,
      avgRevenue: 39876,
      growth: 19.3,
    },
    {
      region: 'Bahia',
      revenue: 287650,
      dealers: 8,
      avgRevenue: 35956,
      growth: 33.7,
    },
    {
      region: 'Outros',
      revenue: 445980,
      dealers: 15,
      avgRevenue: 29732,
      growth: 14.2,
    },
  ],
  tripEfficiency: {
    onTimeDeliveries: 87.3,
    avgDeliveryTime: 2.4,
    fuelEfficiency: 92.1,
    routeOptimization: 78.6,
  },
  topProducts: [
    {
      name: 'Jogo de Cama Casal Premium',
      sales: 234,
      revenue: 128590,
      growth: 24.5,
    },
    { name: 'Toalha de Banho Luxo', sales: 187, revenue: 96750, growth: 18.2 },
    {
      name: 'Edredom Queen Antialérgico',
      sales: 156,
      revenue: 87340,
      growth: 31.7,
    },
    { name: 'Kit Mesa Bordado', sales: 143, revenue: 76890, growth: 12.8 },
    {
      name: 'Protetor Colchão Impermeável',
      sales: 129,
      revenue: 65780,
      growth: 22.1,
    },
  ],
  regionalData: [
    { region: 'SP', value: 856430 },
    { region: 'RJ', value: 634520 },
    { region: 'MG', value: 523890 },
    { region: 'PR', value: 398760 },
    { region: 'BA', value: 287650 },
    { region: 'Outros', value: 445980 },
  ],
}
