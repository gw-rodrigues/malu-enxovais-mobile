import { Button } from '@/components/ui/button'
import { Grid, GridItem } from '@/components/ui/grid'
import { Heading } from '@/components/ui/heading'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { View } from '@/components/ui/view'
import { VStack } from '@/components/ui/vstack'
import { DashboardMockupData } from '@/constants/mockup/dashboard'
import { Plus, QrCode } from 'lucide-react-native'

export default function Header() {
  const dashboardData = DashboardMockupData()

  return (
    <VStack space="lg">
      <View>
        <Heading>Gestão de Produtos</Heading>
        <Text className="text-base sm:text-base text-muted-foreground">
          Gerencie seu catálogo completo e controle de estoque.
        </Text>
      </View>

      <Grid
        gap={16}
        _extra={{
          className: 'grid-cols-2 w-full',
        }}
      >
        <GridItem
          _extra={{
            className: 'col-span-1',
          }}
        >
          <Button
            variant="solid"
            action="primary"
            className="flex-1 w-auto h-auto p-4 rounded-xl "
          >
            <VStack className="items-center justify-center text-center text-white">
              <Icon as={QrCode} color="white" />
              <Text className="mt-2 text-sm font-medium text-white">
                Escanear QR
              </Text>
              <Text className="text-xs text-gray-100">Produto</Text>
            </VStack>
          </Button>
        </GridItem>
        <GridItem
          _extra={{
            className: 'col-span-1',
          }}
        >
          <Button
            variant="solid"
            action="primary"
            className="flex-1 w-auto h-auto p-4 bg-white rounded-xl group"
          >
            <VStack className="items-center justify-center text-center text-white">
              <Icon
                as={Plus}
                className="text-gray-600 group-hover:text-white group-active:text-white"
              />
              <Text className="mt-2 group-hover:text-white group-active:text-white">
                Adicionar
              </Text>
              <Text className="opacity-80 group-hover:text-white group-active:text-white">
                Novo produto
              </Text>
            </VStack>
          </Button>
        </GridItem>
      </Grid>
    </VStack>
  )
}
