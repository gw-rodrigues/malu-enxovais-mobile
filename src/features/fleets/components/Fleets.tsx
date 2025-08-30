import { Badge, BadgeText } from '@/components/ui/badge'
import { Button, ButtonIcon } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { HStack } from '@/components/ui/hstack'
import { Icon } from '@/components/ui/icon'
import { ScrollView } from '@/components/ui/scroll-view'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { mockVehicles } from '@/features/fleets/mock'
import { Edit, TextSearch } from 'lucide-react-native'

export default function FleetsList() {
  if (mockVehicles.length <= 0)
    return (
      <ScrollView className="py-4">
        <Card className="py-4" variant="elevated">
          <HStack space="md" className="items-center">
            <Icon as={TextSearch} />
            <Text>Nenhuma informação registrada.</Text>
          </HStack>
        </Card>
      </ScrollView>
    )
  return (
    <ScrollView className="py-4">
      <VStack space="sm">
        {mockVehicles.map((item) => {
          const stockAction: {
            title: string
            action: 'error' | 'warning' | 'success' | 'info'
          } = item.is_active
            ? { title: 'Disponível', action: 'success' }
            : { title: 'Indisponível', action: 'error' }

          return (
            <Card key={item.id} variant="elevated">
              <HStack className="justify-between">
                <VStack>
                  <Text className="text-lg font-bold">
                    {item.license_plate}
                  </Text>
                  <Text>
                    {item.brand} - {item.model}
                  </Text>
                </VStack>
                <Badge
                  variant="solid"
                  action={stockAction.action}
                  size="sm"
                  className="h-8 px-3 rounded-xl"
                >
                  <BadgeText>{stockAction.title}</BadgeText>
                </Badge>
              </HStack>

              <HStack className="justify-between mt-2">
                <Text>Tipo</Text>
                <Text className="font-bold">{item.vehicle_type}</Text>
              </HStack>
              <HStack className="justify-between">
                <Text>Capacidade:</Text>
                <Text className="font-bold">{item.max_weight_kg}</Text>
              </HStack>
              <HStack className="justify-between">
                <Text>Combustível:</Text>
                <Text className="font-bold">{item.fuel_type}</Text>
              </HStack>
              <HStack className="justify-between">
                <Text>QR code:</Text>
                <Text className="font-bold">{item.qr_code}</Text>
              </HStack>
              <HStack className="justify-end mt-2">
                <Button variant="outline" action="primary" size="sm">
                  <ButtonIcon as={Edit} />
                </Button>
              </HStack>
            </Card>
          )
        })}
      </VStack>
    </ScrollView>
  )
}
