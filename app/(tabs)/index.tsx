import { SafeAreaView } from '@/components/ui/safe-area-view'
import useAuthStore from '@/store/auth.store'
import { Text } from 'react-native'
import 'react-native-url-polyfill/auto'

export default function Index() {
  const { session, isAuthenticated } = useAuthStore()

  return (
    <SafeAreaView>
      <Text>Dashboard</Text>
    </SafeAreaView>
  )
}
