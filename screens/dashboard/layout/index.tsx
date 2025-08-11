import { SafeAreaView } from '@/components/ui/safe-area-view'
import { ScrollView } from '@/components/ui/scroll-view'
import { VStack } from '@/components/ui/vstack'
import { useColorScheme } from '@/hooks/useColorScheme'
import useAuthStore from '@/store/auth.store'
import { Redirect } from 'expo-router'

type AuthLayoutProps = {
  children: React.ReactNode
}

export default function TabLayout(props: AuthLayoutProps) {
  const colorScheme = useColorScheme()

  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    return <Redirect href="/splash-screen" />
  }

  return (
    <SafeAreaView className="w-full h-full">
      <ScrollView
        className="w-full h-full"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <VStack space="3xl" className="p-4 mb-20">
          {props.children}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  )
}
