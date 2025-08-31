import { Button } from '@/components/ui/button'
import { Grid, GridItem } from '@/components/ui/grid'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { View } from '@/components/ui/view'
import { VStack } from '@/components/ui/vstack'

import { Plus } from 'lucide-react-native'

export default function Header() {
  return (
    <VStack space="lg">
      <View>
        <Heading>Gestão de Frota</Heading>
        <Text className="text-base sm:text-base text-muted-foreground">
          Gerencie caminhões e motorista da empresa.
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
              <Icon as={Plus} color="white" />
              <Text className="mt-2 text-sm font-medium text-white">
                Novo caminhão
              </Text>
              <Text className="text-xs text-gray-100">Adicionar</Text>
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
              <HStack>
                <Icon
                  as={Plus}
                  className="text-gray-600 group-hover:text-white group-active:text-white"
                />
              </HStack>

              <Text className="mt-2 group-hover:text-white group-active:text-white">
                Novo motorista
              </Text>
              <Text className="opacity-80 group-hover:text-white group-active:text-white">
                Adicionar
              </Text>
            </VStack>
          </Button>
        </GridItem>
      </Grid>
    </VStack>
  )
}
