import { Badge, BadgeText } from '@/components/ui/badge'
import { Button, ButtonIcon } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { HStack } from '@/components/ui/hstack'
import { Icon } from '@/components/ui/icon'
import { ScrollView } from '@/components/ui/scroll-view'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { mockMovements } from '@/features/driver/products/mock'
import { Edit, TextSearch } from 'lucide-react-native'

export default function ProductsInDelivery() {
  if (mockMovements.length <= 0)
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
        {mockMovements.map((item) => (
          <Card key={item.id} variant="elevated">
            <HStack className="justify-between">
              <VStack>
                <Text className="text-lg font-bold">Cama de casal</Text>
                <Text>Cama - SKU JC001</Text>
              </VStack>
              <Badge
                variant="solid"
                action="success"
                size="sm"
                className="h-8 px-3 rounded-xl"
              >
                <BadgeText>Em estoque</BadgeText>
              </Badge>
            </HStack>

            <HStack className="justify-between mt-2">
              <Text>Preço:</Text>
              <Text className="font-bold">R$ 89.90</Text>
            </HStack>
            <HStack className="justify-between">
              <Text>Estoque atual:</Text>
              <Text className="font-bold">25</Text>
            </HStack>
            <HStack className="justify-between">
              <Text>Estoque mínimo:</Text>
              <Text className="font-bold">10</Text>
            </HStack>
            <HStack className="justify-between">
              <Text>QR code:</Text>
              <Text className="font-bold">PRODUCT_JC001</Text>
            </HStack>
            <HStack className="justify-end mt-2">
              <Button variant="outline" action="primary" size="sm">
                <ButtonIcon as={Edit} />
              </Button>
            </HStack>
          </Card>
        ))}
      </VStack>
    </ScrollView>
  )
}
