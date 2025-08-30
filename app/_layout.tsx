import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

import { useColorScheme } from '@/hooks/useColorScheme'

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import useAuthStore, { AuthUserRole } from '@/features/auth/hooks/useAuthStore'
import '@/styles/global.css'
import { useEffect } from 'react'

export default function RootLayout() {
  const { isLoading, initAuthListener, user } = useAuthStore()
  const colorScheme = useColorScheme()
  const [fontLoaded, error] = useFonts({
    SpaceMono: require('../src/assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (error) throw error
    if (fontLoaded && !isLoading) SplashScreen.hideAsync()
  }, [fontLoaded, error, isLoading])

  useEffect(() => {
    const unsubscribe = initAuthListener()
    return unsubscribe
  }, [])

  if (!fontLoaded || isLoading) {
    return null
  }

  console.log('user', user)

  return (
    <GluestackUIProvider mode={(colorScheme ?? 'light') as 'light' | 'dark'}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator />
        <StatusBar style="auto" />
      </ThemeProvider>
    </GluestackUIProvider>
  )
}

function RootNavigator() {
  const { isAuthenticated, hasRole } = useAuthStore()

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={hasRole(AuthUserRole.ADMIN)}>
        <Stack.Screen name="(admin)" />
      </Stack.Protected>

      <Stack.Protected guard={hasRole(AuthUserRole.DRIVER)}>
        <Stack.Screen name="(driver)" />
      </Stack.Protected>

      <Stack.Protected guard={!isAuthenticated()}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>

      <Stack.Screen name="+not-found" />
    </Stack>
  )
}
