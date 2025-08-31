import { Button } from '@/components/ui/button'
import { Grid, GridItem } from '@/components/ui/grid'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Icon } from '@/components/ui/icon'
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from '@/components/ui/select'
import { Text } from '@/components/ui/text'
import { View } from '@/components/ui/view'
import { VStack } from '@/components/ui/vstack'

import { ChevronDownIcon, Download } from 'lucide-react-native'

export default function Header() {
  return (
    <VStack space="lg">
      <View>
        <Heading>Análises de performance</Heading>
        <Text className="text-base sm:text-base text-muted-foreground">
          Insights detalhados do seu negócio com dados em tempo real.
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
          <Select
            className="flex-1"
            defaultValue={'30'}
            initialLabel="Últimos 30 dias"
          >
            <SelectTrigger
              variant="outline"
              size="md"
              className="justify-between flex-1 h-auto rounded-xl"
            >
              <SelectInput placeholder="Últimos 30 dias" />
              <SelectIcon as={ChevronDownIcon} className="mr-2" />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Últimos 30 dias" value="30" />
                <SelectItem label="Últimos 15 dias" value="15" />
                <SelectItem label="Últimos 7 dias" value="7" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </GridItem>
        <GridItem
          _extra={{
            className: 'col-span-1',
          }}
        >
          <Button
            variant="solid"
            action="primary"
            className="flex-1 w-auto h-auto p-4 rounded-xl"
          >
            <HStack
              space="md"
              className="items-center justify-center text-white"
            >
              <Icon as={Download} color="white" />
              <Text className="text-sm font-medium text-white">Exportar</Text>
            </HStack>
          </Button>
        </GridItem>
      </Grid>
    </VStack>
  )
}
