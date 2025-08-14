import { Badge, BadgeIcon, BadgeText } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { mockAnalyticsData } from '@/constants/mockup/analytics'
import {
  DollarSign,
  Percent,
  ShoppingCart,
  Target,
  TrendingDown,
  TrendingUp,
} from 'lucide-react-native'

export default function QuickInfo() {
  return (
    <VStack space="lg">
      <Card size="lg" variant="elevated">
        <HStack space="md" className="items-center">
          <Icon as={DollarSign} size="lg" />
          <Text className="text-base sm:text-base text-muted-foreground">
            Receita total
          </Text>
        </HStack>

        <HStack className="items-center justify-between mt-4">
          <Heading size="xl">
            R$ {mockAnalyticsData.summary.totalRevenue.toLocaleString()}
          </Heading>

          <Badge
            variant="solid"
            action="success"
            size="lg"
            className="rounded-full"
          >
            <BadgeIcon as={TrendingUp} />
            <BadgeText className="ml-2">
              {mockAnalyticsData.summary.revenueGrowth > 0 && '+'}
              {mockAnalyticsData.summary.revenueGrowth.toLocaleString()}%
            </BadgeText>
            <BadgeText className="ml-2">vs anterior</BadgeText>
          </Badge>
        </HStack>
      </Card>
      <Card size="lg" variant="elevated">
        <HStack space="md" className="items-center">
          <Icon as={ShoppingCart} size="lg" />
          <Text className="text-base sm:text-base text-muted-foreground">
            Total de pedidos
          </Text>
        </HStack>

        <HStack className="items-center justify-between mt-4">
          <Heading size="xl">
            {mockAnalyticsData.summary.totalOrders.toLocaleString()}
          </Heading>

          <Badge
            variant="solid"
            action="success"
            size="lg"
            className="rounded-full"
          >
            <BadgeIcon as={TrendingUp} />
            <BadgeText className="ml-2">
              {mockAnalyticsData.summary.ordersGrowth > 0 && '+'}
              {mockAnalyticsData.summary.ordersGrowth.toLocaleString()}%
            </BadgeText>
            <BadgeText className="ml-2">vs anterior</BadgeText>
          </Badge>
        </HStack>
      </Card>
      <Card size="lg" variant="elevated">
        <HStack space="md" className="items-center">
          <Icon as={Target} size="lg" />
          <Text className="text-base sm:text-base text-muted-foreground">
            Ticket médio
          </Text>
        </HStack>

        <HStack className="items-center justify-between mt-4">
          <Heading size="xl">
            R$ {mockAnalyticsData.summary.avgOrderValue.toLocaleString()}
          </Heading>

          <Badge
            variant="solid"
            action="success"
            size="lg"
            className="rounded-full"
          >
            <BadgeIcon as={TrendingUp} />
            <BadgeText className="ml-2">
              {mockAnalyticsData.summary.avgOrderGrowth > 0 && '+'}
              {mockAnalyticsData.summary.avgOrderGrowth.toLocaleString()}%
            </BadgeText>
            <BadgeText className="ml-2">vs anterior</BadgeText>
          </Badge>
        </HStack>
      </Card>
      <Card size="lg" variant="elevated">
        <HStack space="md" className="items-center">
          <Icon as={Percent} size="lg" />
          <Text className="text-base sm:text-base text-muted-foreground">
            Taxa de conversão
          </Text>
        </HStack>

        <HStack className="items-center justify-between mt-4">
          <Heading size="xl">
            {mockAnalyticsData.summary.conversionRate.toLocaleString()}%
          </Heading>

          <Badge
            variant="solid"
            action="error"
            size="lg"
            className="rounded-full"
          >
            <BadgeIcon as={TrendingDown} />
            <BadgeText className="ml-2">
              {mockAnalyticsData.summary.conversionGrowth > 0 && '+'}
              {mockAnalyticsData.summary.conversionGrowth.toLocaleString()}%
            </BadgeText>
            <BadgeText className="ml-2">vs anterior</BadgeText>
          </Badge>
        </HStack>
      </Card>
    </VStack>
  )
}
