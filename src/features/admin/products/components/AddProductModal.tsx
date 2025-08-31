import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Icon } from '@/components/ui/icon'
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@/components/ui/modal'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { AlertTriangle, BoxIcon } from 'lucide-react-native'
import useProductsStore from '../hooks/useProductsStore'

import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control'
import { Input, InputField } from '@/components/ui/input'
import { Toast, ToastTitle, useToast } from '@/components/ui/toast'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Keyboard } from 'react-native'
import { z } from 'zod'

const schema = z.object({
  sku: z.string('SKU inválido').min(4, 'SKU é obrigatória'),
  name: z.string('Nome inválido').min(4, 'Nome é obrigatória'),
  categoria: z.string('Categoria inválido').min(4, 'Categoria é obrigatória'),
  price: z.coerce
    .number('Preço inválido')
    .nonnegative('Preço deve ser positivo')
    .min(1, 'Preço deve ser maior que zero'),
  description: z.string('Descrição inválido').optional(),
  image_url: z.string('Imagem inválida').optional(),
  cost: z.number('Custo inválido').optional(),
  weight_kg: z.number('Peso inválido').optional(),
  minimum_stock: z.number('Estoque mínimo inválido').optional(),
  dimensions_cm: z
    .object({
      height: z.number('Altura inválida'),
      width: z.number('Largura inválida'),
      length: z.number('Comprimento inválido'),
    })
    .optional(),
  is_active: z.boolean('Status inválido'),
})

type SchemaType = z.infer<typeof schema>

export default function AddProductModal() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema) as any,
    defaultValues: {
      sku: '',
      name: '',
      categoria: '',
      price: 10,
    },
  })

  const toast = useToast()

  const { showAddProductModal, setShowAddProductModal } = useProductsStore()

  const onSubmit = async (data: SchemaType) => {
    if (data)
      toast.show({
        placement: 'bottom right',
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="solid" action="success">
              <ToastTitle>Produto adicionado!</ToastTitle>
            </Toast>
          )
        },
      })
  }

  const handleKeyPress = () => {
    Keyboard.dismiss()
    handleSubmit(onSubmit)()
  }

  return (
    <Modal
      isOpen={showAddProductModal}
      onClose={() => {
        setShowAddProductModal(false)
      }}
      size="lg"
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <VStack className="items-center justify-center flex-1">
            <Box className="w-[56px] h-[56px] rounded-full bg-background-info items-center justify-center">
              <Icon as={BoxIcon} className="stroke-info-500" size="xl" />
            </Box>
            <Heading size="md" className="mb-2 text-center text-typography-950">
              Adicionar Produto
            </Heading>
            <Text size="sm" className="text-center text-typography-500">
              cadastre um novo produto ao seu catálogo
            </Text>
          </VStack>
        </ModalHeader>
        <ModalBody className="mt-0 mb-4">
          <VStack space="xl" className="w-full">
            <FormControl isInvalid={!!errors?.name} className="w-full">
              <FormControlLabel>
                <FormControlLabelText>Email</FormControlLabelText>
              </FormControlLabel>
              <Controller
                defaultValue=""
                name="name"
                control={control}
                rules={{
                  validate: async (value) => {
                    try {
                      await schema.parseAsync({ name: value })
                      return true
                    } catch (error: any) {
                      return error.message
                    }
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input>
                    <InputField
                      placeholder="Nome produto"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      onSubmitEditing={handleKeyPress}
                      returnKeyType="done"
                    />
                  </Input>
                )}
              />
              {errors?.name && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertTriangle} />
                  <FormControlErrorText>
                    {errors?.name?.message}
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            <FormControl isInvalid={!!errors?.name} className="w-full">
              <FormControlLabel>
                <FormControlLabelText>Email</FormControlLabelText>
              </FormControlLabel>
              <Controller
                defaultValue=""
                name="name"
                control={control}
                rules={{
                  validate: async (value) => {
                    try {
                      await schema.parseAsync({ name: value })
                      return true
                    } catch (error: any) {
                      return error.message
                    }
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input>
                    <InputField
                      placeholder="Nome produto"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      onSubmitEditing={handleKeyPress}
                      returnKeyType="done"
                    />
                  </Input>
                )}
              />
              {errors?.name && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertTriangle} />
                  <FormControlErrorText>
                    {errors?.name?.message}
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            <FormControl isInvalid={!!errors?.price} className="w-full">
              <FormControlLabel>
                <FormControlLabelText>Preço</FormControlLabelText>
              </FormControlLabel>
              <Controller
                name="price"
                control={control}
                rules={{
                  validate: async (value) => {
                    try {
                      await schema.parseAsync({ price: value })
                      return true
                    } catch (error: any) {
                      return error.message
                    }
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input>
                    <InputField
                      keyboardType="numeric"
                      placeholder="Preço"
                      value={String(value)}
                      onChangeText={(text) => {
                        onChange(Number(text.replace(/[^0-9.-]/g, '')))
                      }}
                      onBlur={onBlur}
                      onSubmitEditing={handleKeyPress}
                      returnKeyType="done"
                    />
                  </Input>
                )}
              />
              {errors?.price && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertTriangle} />
                  <FormControlErrorText>
                    {errors?.price?.message}
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter className="w-full">
          <Button
            variant="outline"
            action="secondary"
            size="sm"
            onPress={() => {
              setShowAddProductModal(false)
            }}
            className="flex-grow"
          >
            <ButtonText>Cancelar</ButtonText>
          </Button>
          <Button
            onPress={() => {
              setShowAddProductModal(false)
            }}
            size="sm"
            className="flex-grow"
          >
            <ButtonText>Adicionar</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
