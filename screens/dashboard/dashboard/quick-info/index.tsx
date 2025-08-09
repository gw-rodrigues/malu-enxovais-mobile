import { Badge, BadgeIcon, BadgeText } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { DashboardMockupData } from '@/constants/mockup/dashboard'
import {
  ArrowUp,
  DollarSign,
  Package,
  Percent,
  Truck,
  Users,
} from 'lucide-react-native'

export default function QuickInfo() {
  const dashboardData = DashboardMockupData()

  return (
    <VStack space="lg">
      <Card size="lg" variant="elevated">
        <HStack space="md" className="items-center">
          <Icon as={Package} size="lg" />
          <Text className="text-base sm:text-base text-muted-foreground">
            Produtos em Estoque
          </Text>
        </HStack>

        <HStack className="items-center justify-between mt-4">
          <Heading size="2xl">
            {dashboardData?.totalProducts.toLocaleString()}
          </Heading>

          <Badge
            variant="solid"
            action="success"
            size="lg"
            className="rounded-full"
          >
            <BadgeText>12</BadgeText>
            <BadgeIcon as={Percent} />
            <BadgeIcon as={ArrowUp} className="ml-2" />
          </Badge>
        </HStack>
      </Card>
      <Card size="lg" variant="elevated">
        <HStack space="md" className="items-center">
          <Icon as={Truck} size="lg" />
          <Text className="text-base sm:text-base text-muted-foreground">
            Viagens
          </Text>
        </HStack>

        <HStack className="items-center justify-between mt-4">
          <Heading size="2xl">{dashboardData?.activeTrips}</Heading>

          <Badge
            variant="solid"
            action="info"
            size="lg"
            className="rounded-full"
          >
            <BadgeText>3 ativos</BadgeText>
          </Badge>
        </HStack>
      </Card>
      <Card size="lg" variant="elevated">
        <HStack space="md" className="items-center">
          <Icon as={Users} size="lg" />
          <Text className="text-base sm:text-base text-muted-foreground">
            Revendedores
          </Text>
        </HStack>

        <HStack className="items-center justify-between mt-4">
          <Heading size="2xl">{dashboardData?.totalDealers}</Heading>

          <Badge
            variant="solid"
            action="info"
            size="lg"
            className="rounded-full"
          >
            <BadgeText>24 ativos</BadgeText>
          </Badge>
        </HStack>
      </Card>
      <Card size="lg" variant="elevated">
        <HStack space="md" className="items-center">
          <Icon as={DollarSign} size="lg" />
          <Text className="text-base sm:text-base text-muted-foreground">
            Consignações
          </Text>
        </HStack>

        <HStack className="items-center justify-between mt-4">
          <Heading size="2xl">{dashboardData?.totalConsignments}</Heading>

          <Badge
            variant="solid"
            action="error"
            size="lg"
            className="rounded-full"
          >
            <BadgeText> 5 críticos</BadgeText>
          </Badge>
        </HStack>
      </Card>
    </VStack>
  )
}
