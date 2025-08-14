import { Badge, BadgeText } from '@/components/ui/badge'
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { HStack } from '@/components/ui/hstack'
import { Icon } from '@/components/ui/icon'
import { ScrollView } from '@/components/ui/scroll-view'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { mockDrivers } from '@/constants/mockup/drivers'
import { Edit, PhoneCall, TextSearch } from 'lucide-react-native'

export default function FleetsList() {
  if (mockDrivers.length <= 0)
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
        {mockDrivers.map((item) => {
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
                  <Text className="text-lg font-bold">{item.full_name}</Text>
                  <Text>{item.email}</Text>
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
                <Text>Telefone:</Text>
                <Text className="font-bold">{item.phone}</Text>
              </HStack>
              <HStack className="justify-between">
                <Text>Função:</Text>
                <Text className="font-bold">{item.role}</Text>
              </HStack>
              <HStack className="justify-between">
                <Text>QR code:</Text>
                <Text className="font-bold">{item.qr_code}</Text>
              </HStack>
              <HStack space="md" className="justify-end mt-2">
                <Button
                  variant="solid"
                  action="primary"
                  size="sm"
                  className="flex-1"
                >
                  <ButtonIcon as={PhoneCall} />
                  <ButtonText>Ligar</ButtonText>
                </Button>
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
