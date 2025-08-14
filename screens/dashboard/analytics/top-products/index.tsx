import { Badge, BadgeIcon, BadgeText } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { mockAnalyticsData } from '@/constants/mockup/analytics'
import { ArrowUp } from 'lucide-react-native'

export default function TopProducts() {
  return (
    <VStack space="lg">
      <Heading size="xl">Produtos mais vendidos</Heading>

      {mockAnalyticsData.topProducts.map((item, index) => (
        <Card size="lg" variant="elevated" key={index}>
          <HStack space="md" className="items-center">
            <Badge
              variant="solid"
              action="info"
              size="xl"
              className="px-3 rounded-full"
            >
              <BadgeText>{index + 1}</BadgeText>
            </Badge>
            <VStack space="xs" className="flex-1">
              <HStack space="md" className="items-center justify-between">
                <Text className="font-bold text-gray-900">{item.name}</Text>
                <Badge
                  variant="solid"
                  action="success"
                  size="lg"
                  className="px-3 rounded-full"
                >
                  <BadgeIcon as={ArrowUp} />
                  <BadgeText className="ml-1">
                    {item.growth.toLocaleString()}%
                  </BadgeText>
                </Badge>
              </HStack>
              <HStack space="md" className="items-center justify-between">
                <Text size="sm">{item.sales.toLocaleString()} vendas</Text>
                <Text size="sm" bold className="pr-1">
                  R$ {item.revenue.toLocaleString()}
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </Card>
      ))}
    </VStack>
  )
}
