import { Badge, BadgeIcon, BadgeText } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Icon } from '@/components/ui/icon'
import { Progress, ProgressFilledTrack } from '@/components/ui/progress'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { DashboardMockupData } from '@/constants/mockup/dashboard'
import { PackagePlus, Route, Truck } from 'lucide-react-native'

type RouteStatusProps = {
  [key: string]: {
    title: string
    icon: React.ComponentType<any>
    action: 'success' | 'warning' | 'error' | 'info' | 'muted'
  }
}

export default function ActiveTravels() {
  const dashboardData = DashboardMockupData()

  const routeStatus: RouteStatusProps = {
    in_transit: { title: 'Em trânsito', icon: Route, action: 'success' },
    loading: { title: 'Carregando', icon: PackagePlus, action: 'warning' },
  }

  return (
    <VStack space="lg">
      <HStack className="items-center justify-between">
        <Heading size="xl">Viagens Ativas</Heading>
        <Button variant="link" action="primary">
          <Text className="underline underline-offset-2">Ver todas</Text>
        </Button>
      </HStack>
      {dashboardData?.recentTrips.map((trip) => (
        <Card size="lg" variant="elevated" key={trip.id}>
          <VStack space="md">
            <HStack space="md" className="items-center justify-between">
              <HStack space="md" className="items-center">
                <Icon as={Truck} className="w-8 h-8 text-gray-700" />
                <VStack>
                  <Text className="text-xl font-bold text-gray-900">
                    {trip.code}
                  </Text>
                  <Text className="">{trip.driver}</Text>
                </VStack>
              </HStack>
              <Badge
                variant="solid"
                action={routeStatus?.[trip.status].action}
                size="lg"
                className="rounded-full"
              >
                <BadgeText>{routeStatus?.[trip.status].title}</BadgeText>
                <BadgeIcon
                  as={routeStatus?.[trip.status].icon}
                  className="ml-2"
                />
              </Badge>
            </HStack>

            <HStack className="items-center justify-between">
              <Text>{trip.route}</Text>
              <Text className="font-bold">{trip.items} produtos</Text>
            </HStack>
            <HStack className="items-center justify-between">
              <Text>
                {trip.stops.completed}/{trip.stops.total} paradas
              </Text>
              <Text className="font-bold">
                {trip.value.toLocaleString()} R$
              </Text>
            </HStack>
            <Progress value={trip.progress} size="md" orientation="horizontal">
              <ProgressFilledTrack />
            </Progress>
          </VStack>
        </Card>
      ))}
    </VStack>
  )
}
