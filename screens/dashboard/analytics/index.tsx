import 'react-native-url-polyfill/auto'

import TabLayout from '../layout/index'
import Header from './header'
import QuickInfo from './quick-info'
import TopProducts from './top-products'

function Analytics() {
  // const { session, isAuthenticated } = useAuthStore()

  return (
    <>
      <Header />
      <QuickInfo />
      <TopProducts />
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
