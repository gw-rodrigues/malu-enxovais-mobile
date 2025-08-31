import { Badge, BadgeIcon } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { DashboardMockupData } from '@/features/admin/dashboard/mock'
import { MonitorCog, Package, Route, Truck } from 'lucide-react-native'

export default function RecentActivity() {
  const dashboardData = DashboardMockupData()

  const activityType = {
    system: MonitorCog,
    delivery: Truck,
    stock: Package,
    trip: Route,
  }

  return (
    <VStack space="lg">
      <Heading size="xl">Atividade Recente</Heading>

      {dashboardData?.recentActivities.map((activity) => (
        <Card size="lg" variant="elevated" key={activity.id}>
          <HStack space="md" className="items-center justify-between">
            <HStack space="md" className="items-center">
              <Badge
                variant="solid"
                action={activity.status}
                size="xl"
                className="p-2 rounded-full"
              >
                <BadgeIcon as={activityType[activity.type]} />
              </Badge>
              <VStack>
                <Text className="font-bold text-gray-900">
                  {activity.title}
                </Text>
                <Text className="text-sm">{activity.description}</Text>
              </VStack>
            </HStack>
            <Text className="">{activity.timestamp}</Text>
          </HStack>
        </Card>
      ))}
    </VStack>
  )
}
