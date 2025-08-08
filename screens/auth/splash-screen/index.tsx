import { Button, ButtonText } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { VStack } from '@/components/ui/vstack'
import { useColorScheme } from 'nativewind'
import { GluestackIcon, GluestackIconDark } from './assets/icons/malu-enxovais-icon'

import { router } from 'expo-router'
import { AuthLayout } from '../layout'

const SplashScreenWithLeftBackground = () => {
  const { colorScheme } = useColorScheme()
  return (
    <VStack
      className="w-full max-w-[440px] items-center h-full justify-center"
      space="4xl"
    >
      {colorScheme === 'dark' ? (
        <Icon as={GluestackIconDark} className="w-[220px] h-52" />
      ) : (
        <Icon as={GluestackIcon} className="w-[220px] h-52" />
      )}
      <VStack className="w-full" space="lg">
        <Button
          className="w-full"
          onPress={() => {
            router.push('/(auth)/signin')
          }}
        >
          <ButtonText className="font-medium">Log in</ButtonText>
        </Button>
        {/* <Button
          onPress={() => {
            router.push('/(auth)/signup')
          }}
        >
          <ButtonText className="font-medium">Sign Up</ButtonText>
        </Button> */}
      </VStack>
    </VStack>
  )
}

export const SplashScreen = () => {
  return (
    <AuthLayout>
      <SplashScreenWithLeftBackground />
    </AuthLayout>
  )
}
