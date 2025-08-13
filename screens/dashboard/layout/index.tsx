import { HStack } from '@/components/ui/hstack'
// import { ScrollView } from '@/components/ui/scroll-view'
import { VStack } from '@/components/ui/vstack'

import { ScrollView } from 'react-native'

import useAuthStore from '@/store/auth.store'
import { Redirect } from 'expo-router'

type AuthLayoutProps = {
  children: React.ReactNode
}

export default function TabLayout(props: AuthLayoutProps) {
  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    return <Redirect href="/splash-screen" />
  }

  return (
    <ScrollView
      className="w-full h-full"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <HStack className="justify-center flex-grow w-full h-full">
        <VStack className="flex-1 w-full h-full gap-10 px-4 pt-4 pb-28">
          {props.children}
        </VStack>
      </HStack>
    </ScrollView>
  )
}
