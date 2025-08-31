import 'react-native-url-polyfill/auto'

import TabLayout from '@/components/layout/TabLayout'
import Header from '../components/Header'
import QuickInfo from '../components/QuickInfo'
import TopProducts from '../components/TopProducts'

function Analytics() {
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
