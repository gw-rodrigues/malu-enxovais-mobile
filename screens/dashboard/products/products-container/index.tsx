import { Button, ButtonIcon } from '@/components/ui/button'
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
} from '@/components/ui/form-control'
import { HStack } from '@/components/ui/hstack'
import { AlertCircleIcon } from '@/components/ui/icon'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'

import { VStack } from '@/components/ui/vstack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useLinkBuilder, useTheme } from '@react-navigation/native'
import { SearchIcon, Settings2 } from 'lucide-react-native'
import { useState } from 'react'
import { Animated, Platform, TouchableOpacity, View } from 'react-native'
import ProductsInDelivery from '../products-in-delivery'
import ProductsInStock from '../products-in-stock'

const Tab = createMaterialTopTabNavigator()

export default function ProductsContainer() {
  const [isInvalid, setIsInvalid] = useState(false)
  const [filters, setFilters] = useState({ input: '', category: '' })
  const allStockProducts = [{ name: '' }]
  const allDeliveryProducts = [{ name: '' }]

  const filteredStock = allStockProducts.filter((p) =>
    p.name.includes(filters.input),
  )
  const filteredDelivery = allDeliveryProducts.filter((p) =>
    p.name.includes(filters.input),
  )

  return (
    <VStack space="lg" className="flex-grow">
      <FormControl
        isInvalid={isInvalid}
        size="md"
        isDisabled={false}
        isReadOnly={false}
        isRequired={false}
        className="gap-4"
      >
        <HStack space="md" className="items-center justify-center">
          <Input size="lg" className="flex-1 bg-white rounded-xl">
            <InputSlot className="pl-3">
              <InputIcon as={SearchIcon} />
            </InputSlot>
            <InputField
              placeholder="Buscar por nome, categoria ou código QR"
              onChangeText={(input) =>
                setFilters((prev) => ({ ...prev, input }))
              }
            />
          </Input>

          <Button className="w-fit" size="md">
            <ButtonIcon as={Settings2} />
          </Button>
        </HStack>

        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>
            Obrigatório pelo menos 3 caracteres.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>

      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="Produtos" component={() => <ProductsInStock />} />
        <Tab.Screen
          name="Movimentações"
          component={() => <ProductsInDelivery />}
        />
      </Tab.Navigator>
    </VStack>
  )
}

function MyTabBar({ state, descriptors, navigation, position }) {
  const { colors } = useTheme()
  const { buildHref } = useLinkBuilder()

  return (
    <View className="flex-row overflow-hidden bg-white border-b border-gray-300 rounded-xl">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label = options.tabBarLabel ?? options.title ?? route.name
        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityRole={Platform.OS === 'web' ? 'link' : 'button'}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className={`items-center flex-1 py-3 ${
              index > 0 && `border-l border-gray-300`
            } ${isFocused && `bg-primary-500`}`}
          >
            <Animated.Text
              className={isFocused ? 'text-white font-bold' : colors.text}
            >
              {label}
            </Animated.Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
