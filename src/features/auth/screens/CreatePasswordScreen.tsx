import { Button, ButtonText } from '@/components/ui/button'
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control'
import { Heading } from '@/components/ui/heading'
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, Icon } from '@/components/ui/icon'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import { Pressable } from '@/components/ui/pressable'
import { Text } from '@/components/ui/text'
import { Toast, ToastTitle, useToast } from '@/components/ui/toast'
import { VStack } from '@/components/ui/vstack'
import { zodResolver } from '@hookform/resolvers/zod'
import { router } from 'expo-router'
import { AlertTriangle } from 'lucide-react-native'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Keyboard } from 'react-native'
import { z } from 'zod'
import { AuthLayout } from '../../../components/layout/AuthLayout'

const createPasswordSchema = z.object({
  password: z
    .string()
    .min(6, 'Deve ter pelo menos 8 caracteres de comprimento')
    .regex(new RegExp('.*[A-Z].*'), 'Um caractere maiúsculo')
    .regex(new RegExp('.*[a-z].*'), 'Um caractere minúsculo')
    .regex(new RegExp('.*\\d.*'), 'Um número')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'Um caractere especial',
    ),
  confirmpassword: z
    .string()
    .min(6, 'Deve ter pelo menos 8 caracteres de comprimento')
    .regex(new RegExp('.*[A-Z].*'), 'Um caractere maiúsculo')
    .regex(new RegExp('.*[a-z].*'), 'Um caractere minúsculo')
    .regex(new RegExp('.*\\d.*'), 'Um número')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'Um caractere especial',
    ),
})

type CreatePasswordSchemaType = z.infer<typeof createPasswordSchema>

const CreatePasswordWithLeftBackground = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePasswordSchemaType>({
    resolver: zodResolver(createPasswordSchema),
  })
  const toast = useToast()

  const onSubmit = (data: CreatePasswordSchemaType) => {
    if (data.password === data.confirmpassword) {
      toast.show({
        placement: 'bottom right',
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="solid" action="success">
              <ToastTitle>Success</ToastTitle>
            </Toast>
          )
        },
      })
      reset()
    } else {
      toast.show({
        placement: 'bottom right',
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="solid" action="error">
              <ToastTitle>As senhas não correspondem</ToastTitle>
            </Toast>
          )
        },
      })
    }
  }
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }
  const handleConfirmPwState = () => {
    setShowConfirmPassword((showState) => {
      return !showState
    })
  }
  const handleKeyPress = () => {
    Keyboard.dismiss()
    handleSubmit(onSubmit)()
  }

  return (
    <VStack className="max-w-[440px] w-full" space="md">
      <VStack className="md:items-center" space="md">
        <Pressable
          onPress={() => {
            router.back()
          }}
        >
          <Icon
            as={ArrowLeftIcon}
            className="md:hidden stroke-background-800"
            size="xl"
          />
        </Pressable>
        <VStack>
          <Heading className="md:text-center" size="3xl">
            Create new password
          </Heading>
          <Text className="md:text-center">
            Sua nova senha deve ser diferente das senhas usadas anteriormente{' '}
          </Text>
        </VStack>
      </VStack>
      <VStack className="w-full">
        <VStack space="xl" className="w-full">
          <FormControl isInvalid={!!errors.password}>
            <FormControlLabel>
              <FormControlLabelText>Senha</FormControlLabelText>
            </FormControlLabel>
            <Controller
              defaultValue=""
              name="password"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await createPasswordSchema.parseAsync({
                      password: value,
                    })
                    return true
                  } catch (error: any) {
                    return error.message
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    className="text-sm"
                    placeholder="Senha"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                    type={showPassword ? 'text' : 'password'}
                  />
                  <InputSlot onPress={handleState} className="pr-3">
                    <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                  </InputSlot>
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon size="sm" as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.password?.message}
              </FormControlErrorText>
            </FormControlError>
            <FormControlLabel>
              <FormControlLabelText className="text-typography-500">
                Deve ter pelo menos 8 caracteres
              </FormControlLabelText>
            </FormControlLabel>
          </FormControl>
          <FormControl isInvalid={!!errors.confirmpassword}>
            <FormControlLabel>
              <FormControlLabelText>Confirme sua senha</FormControlLabelText>
            </FormControlLabel>
            <Controller
              defaultValue=""
              name="confirmpassword"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await createPasswordSchema.parseAsync({
                      password: value,
                    })
                    return true
                  } catch (error: any) {
                    return error.message
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    placeholder="Confirme sua senha"
                    className="text-sm"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                    type={showConfirmPassword ? 'text' : 'password'}
                  />

                  <InputSlot onPress={handleConfirmPwState} className="pr-3">
                    <InputIcon
                      as={showConfirmPassword ? EyeIcon : EyeOffIcon}
                    />
                  </InputSlot>
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon size="sm" as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.confirmpassword?.message}
              </FormControlErrorText>
            </FormControlError>
            <FormControlLabel>
              <FormControlLabelText className="text-typography-500">
                Ambas as senhas devem ser iguais
              </FormControlLabelText>
            </FormControlLabel>
          </FormControl>
        </VStack>

        <VStack className="w-full mt-7">
          <Button className="w-full" onPress={handleSubmit(onSubmit)}>
            <ButtonText className="font-medium">Atualizar senha</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </VStack>
  )
}

export const CreatePassword = () => {
  return (
    <AuthLayout>
      <CreatePasswordWithLeftBackground />
    </AuthLayout>
  )
}
