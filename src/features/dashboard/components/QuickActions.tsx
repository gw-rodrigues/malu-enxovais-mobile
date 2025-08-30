import { Button } from '@/components/ui/button'
import { Grid, GridItem } from '@/components/ui/grid'
import { Heading } from '@/components/ui/heading'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { BarChart3, FileText, Plus, QrCode } from 'lucide-react-native'

export default function QuickActions() {
  return (
    <VStack space="md">
      <Heading size="xl">Ações Rápidas</Heading>

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
              <Text className="text-xs text-gray-100">Produtos ou Viagens</Text>
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
                Nova Viagem
              </Text>
              <Text className="opacity-80 group-hover:text-white group-active:text-white">
                Planejar rota
              </Text>
            </VStack>
          </Button>
        </GridItem>
      </Grid>
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
            className="w-auto h-auto p-4 bg-white rounded-xl group"
          >
            <VStack className="items-center justify-center text-center text-white">
              <Icon
                as={FileText}
                className="text-gray-600 group-hover:text-white group-active:text-white"
              />
              <Text className="mt-2 group-hover:text-white group-active:text-white">
                Consignações
              </Text>
              <Text className="opacity-80 group-hover:text-white group-active:text-white">
                Gerenciar
              </Text>
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
            className="w-auto h-auto p-4 bg-white rounded-xl group"
          >
            <VStack className="items-center justify-center text-center text-white">
              <Icon
                as={BarChart3}
                className="text-gray-600 group-hover:text-white group-active:text-white"
              />
              <Text className="mt-2 group-hover:text-white group-active:text-white">
                Relatórios
              </Text>
              <Text className="opacity-80 group-hover:text-white group-active:text-white">
                Análises
              </Text>
            </VStack>
          </Button>
        </GridItem>
      </Grid>
    </VStack>
  )
}
