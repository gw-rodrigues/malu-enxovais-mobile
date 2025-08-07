import Auth from '@/components/Auth'
import { SafeAreaView } from '@/components/ui/safe-area-view'
import useAuthStore from '@/store/auth.store'
import { Text } from 'react-native'
import 'react-native-url-polyfill/auto'

export default function Index() {
  const { session, isAuthenticated } = useAuthStore()

  console.log('se', session, 'ïs', isAuthenticated)
  return (
    <SafeAreaView>
      <Auth />
      <Text>Dashboard</Text>
    </SafeAreaView>
  )
}
