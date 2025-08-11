import { HapticTab } from '@/components/HapticTab'

import { IconSymbol } from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { TopNavbar } from '@/components/ui/top-nav-bar'
import { useColorScheme } from '@/hooks/useColorScheme'
import useAuthStore from '@/store/auth.store'

import { SafeAreaView } from '@/components/ui/safe-area-view'
import { Redirect, Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    return <Redirect href="/splash-screen" />
  }

  return (
    <SafeAreaView className="w-full h-full">
      <TopNavbar />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colorScheme === 'dark' ? 'white' : 'black',
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="products"
          options={{
            title: 'Produtos',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="cube.box.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="fleets"
          options={{
            title: 'Frota',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="truck.box.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="analytics"
          options={{
            title: 'Analises',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="chart.bar.fill" color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}
