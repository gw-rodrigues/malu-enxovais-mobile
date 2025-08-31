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
import { Segment } from '@/components/ui/segment'
import { VStack } from '@/components/ui/vstack'
import { SearchIcon, Settings2 } from 'lucide-react-native'
import { useState } from 'react'

import useProductsStore from '../hooks/useProductsStore'
import ProductsFiltersModal from './ProductsFiltersModal'
import ProductsInDelivery from './ProductsInDelivery'
import ProductsInStock from './ProductsInStock'

export default function ProductsContainer() {
  const { setShowProductsFiltersModal, setSearchProductQuery } =
    useProductsStore()

  const [isInvalid, setIsInvalid] = useState(false)

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
              onChangeText={(input) => setSearchProductQuery(input)}
            />
          </Input>

          <Button
            className="w-fit"
            size="md"
            onPress={() => {
              setShowProductsFiltersModal(true)
            }}
          >
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

      <Segment
        defaultKey="stock"
        items={[
          { key: 'stock', title: 'Em armazém', component: ProductsInStock },
          {
            key: 'delivery',
            title: 'Em movimento',
            component: ProductsInDelivery,
          },
        ]}
      />
      <ProductsFiltersModal />
    </VStack>
  )
}
