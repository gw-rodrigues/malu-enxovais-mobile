import 'react-native-url-polyfill/auto'

import TabLayout from '../layout/index'
import Header from './header'
import QuickInfo from './quick-info'

function Analytics() {
  // const { session, isAuthenticated } = useAuthStore()

  return (
    <>
      <Header />
      <QuickInfo />
    </>
  )
}

export const AnalyticsScreen = () => {
  return (
    <TabLayout>
      <Analytics />
    </TabLayout>
  )
}
