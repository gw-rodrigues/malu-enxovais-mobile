import { Badge, BadgeText } from '@/components/ui/badge'
import { Button, ButtonIcon } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { HStack } from '@/components/ui/hstack'
import { Icon } from '@/components/ui/icon'
import { ScrollView } from '@/components/ui/scroll-view'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { mockProducts } from '@/features/driver/products/mock'
import { Edit, TextSearch } from 'lucide-react-native'

export default function ProductsInStock() {
  if (mockProducts.length <= 0)
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
        {mockProducts.map((item) => {
          const stockAction: {
            title: string
            action: 'error' | 'warning' | 'success' | 'info'
          } =
            item.current_stock <= 0
              ? { title: 'Sem estoque', action: 'error' }
              : item.current_stock < item.minimum_stock
              ? { title: 'Baixo estoque', action: 'warning' }
              : { title: 'Em estoque', action: 'success' }

          return (
            <Card key={item.id} variant="elevated">
              <HStack className="justify-between">
                <VStack>
                  <Text className="text-lg font-bold">{item.name}</Text>
                  <Text>
                    {item.categories?.name} -{item.sku}
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
                <Text>Preço:</Text>
                <Text className="font-bold">
                  R$ {item.price.toLocaleString()}
                </Text>
              </HStack>
              <HStack className="justify-between">
                <Text>Estoque atual:</Text>
                <Text className="font-bold">{item.current_stock}</Text>
              </HStack>
              <HStack className="justify-between">
                <Text>Estoque mínimo:</Text>
                <Text className="font-bold">{item.minimum_stock}</Text>
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
