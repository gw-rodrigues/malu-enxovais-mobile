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
import useAuthStore from '@/store/auth.store'
import { useEffect } from 'react'
import './global.css'

export default function RootLayout() {
  const { isLoading, fetchAuthenticatedUser, initAuthListenerWithCleanup } =
    useAuthStore()
  const colorScheme = useColorScheme()
  const [fontLoaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (error) throw error
    if (fontLoaded) SplashScreen.hideAsync()
  }, [fontLoaded, error])

  useEffect(() => {
    const unsubscribe = initAuthListenerWithCleanup()
    fetchAuthenticatedUser()
    return unsubscribe
  }, [])

  if (!fontLoaded || isLoading) {
    return null
  }

  return (
    <GluestackUIProvider mode={(colorScheme ?? 'light') as 'light' | 'dark'}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GluestackUIProvider>
  )
}
