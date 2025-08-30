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
import { HStack } from '@/components/ui/hstack'
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, Icon } from '@/components/ui/icon'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import { LinkText } from '@/components/ui/link'
import { Pressable } from '@/components/ui/pressable'
import { Text } from '@/components/ui/text'
import { Toast, ToastTitle, useToast } from '@/components/ui/toast'
import { VStack } from '@/components/ui/vstack'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, router } from 'expo-router'
import { AlertTriangle } from 'lucide-react-native'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Keyboard } from 'react-native'
import { z } from 'zod'
import { AuthLayout } from '../../../components/layout/AuthLayout'
import useAuthStore from '../hooks/useAuthStore'

const loginSchema = z.object({
  email: z.email('Email inválido').min(1, 'E-mail é obrigatório'),
  password: z.string('Senha inválida').min(1, 'Senha é obrigatória'),
  rememberme: z.boolean().optional(),
})

type LoginSchemaType = z.infer<typeof loginSchema>

const LoginWithLeftBackground = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  })
  const toast = useToast()
  const [authError, setAuthError] = useState(false)
  const { signIn } = useAuthStore()

  const onSubmit = async (data: LoginSchemaType) => {
    const user = await signIn(data.email, data.password)

    if (user) {
      toast.show({
        placement: 'bottom right',
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="solid" action="success">
              <ToastTitle>Logged in successfully!</ToastTitle>
            </Toast>
          )
        },
      })
      setAuthError(false)
      reset()
      router.replace('/')
    } else {
      setAuthError(true)
    }
  }
  const [showPassword, setShowPassword] = useState(false)

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }
  const handleKeyPress = () => {
    Keyboard.dismiss()
    handleSubmit(onSubmit)()
  }

  return (
    <VStack className="max-w-[440px] w-full h-full" space="md">
      <VStack className="md:items-center" space="md">
        <Pressable
          onPress={() => {
            router.back()
          }}
        >
          <Icon
            as={ArrowLeftIcon}
            className="md:hidden text-background-800"
            size="xl"
          />
        </Pressable>
        <VStack>
          <Heading className="md:text-center" size="3xl">
            Entrar
          </Heading>
          <Text>Faça login para começar a usar o aplicativo</Text>
        </VStack>
      </VStack>
      <VStack className="w-full">
        <VStack space="xl" className="w-full">
          <FormControl
            isInvalid={!!errors?.email || !!authError}
            className="w-full"
          >
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Controller
              defaultValue=""
              name="email"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await loginSchema.parseAsync({ email: value })
                    return true
                  } catch (error: any) {
                    return error.message
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    placeholder="Digite o email"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                </Input>
              )}
            />
            {!authError ||
              (errors?.email && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertTriangle} />
                  <FormControlErrorText>
                    {errors?.email?.message}
                  </FormControlErrorText>
                </FormControlError>
              ))}
          </FormControl>
          {/* Label Message */}
          <FormControl
            isInvalid={!!errors.password || !!authError}
            className="w-full"
          >
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
                    await loginSchema.parseAsync({ password: value })
                    return true
                  } catch (error: any) {
                    return error.message
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Digite a senha"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                  <InputSlot onPress={handleState} className="pr-3">
                    <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                  </InputSlot>
                </Input>
              )}
            />
            {!authError ||
              (errors?.password && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertTriangle} />
                  <FormControlErrorText>
                    {errors?.password?.message}
                  </FormControlErrorText>
                </FormControlError>
              ))}

            {authError && (
              <FormControlError>
                <FormControlErrorIcon as={AlertTriangle} />
                <FormControlErrorText>
                  Email ou senha incorretos. Tente novamente.
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>
          <HStack className="justify-between w-full ">
            {/* <Controller
              name="rememberme"
              defaultValue={false}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox
                  size="sm"
                  value="Remember me"
                  isChecked={value}
                  onChange={onChange}
                  aria-label="Remember me"
                >
                  <CheckboxIndicator>
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Remember me</CheckboxLabel>
                </Checkbox>
              )}
            /> */}
            <Link href="/(auth)/forgot-password">
              <LinkText className="text-sm font-medium text-primary-700 group-hover/link:text-primary-600">
                Esqueceu sua senha?
              </LinkText>
            </Link>
          </HStack>
        </VStack>
        <VStack className="w-full my-7 " space="lg">
          <Button className="w-full" onPress={handleSubmit(onSubmit)}>
            <ButtonText className="font-medium">Entrar</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </VStack>
  )
}

export const SignIn = () => {
  return (
    <AuthLayout>
      <LoginWithLeftBackground />
    </AuthLayout>
  )
}
