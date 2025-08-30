import { useColorScheme } from 'nativewind'

import LogoDark from '@/assets/images/icon-dark.svg'
import Logo from '@/assets/images/icon.svg'
import { Icon } from '@/components/ui/icon'
import { VStack } from '@/components/ui/vstack'
import useAuthStore, {
  AuthUserRoleValues,
} from '@/features/auth/hooks/useAuthStore'
import { AuthLayout } from '@/src/components/layout/AuthLayout'
import { Spinner } from '@/src/components/ui/spinner'
import { Redirect } from 'expo-router'

const SplashScreenWithLeftBackground = () => {
  const { colorScheme } = useColorScheme()
  const { isAuthenticated, getUserRole, signOut } = useAuthStore()
  const role = getUserRole()
  const roleRouteMap: Record<
    AuthUserRoleValues,
    '/(admin)' | '/(driver)' | '/(auth)'
  > = {
    admin: '/(admin)',
    driver: '/(driver)',
    manager: '/(auth)',
    producer: '/(auth)',
  }

  const routeName = role ? roleRouteMap[role] : '/(auth)'

  if (!role && isAuthenticated()) {
    signOut()
  }

  return (
    <VStack
      className="w-full max-w-[440px] items-center h-full justify-center"
      space="4xl"
    >
      {colorScheme === 'dark' ? (
        <Icon as={Logo} className="w-[220px] h-52" />
      ) : (
        <Icon as={LogoDark} className="w-[220px] h-52" />
      )}
      <VStack className="w-full" space="lg">
        <Spinner size="large" />
      </VStack>
      <Redirect href={routeName} />
    </VStack>
  )
}
const SplashScreen = () => {
  return (
    <AuthLayout>
      <SplashScreenWithLeftBackground />
    </AuthLayout>
  )
}

export default SplashScreen
