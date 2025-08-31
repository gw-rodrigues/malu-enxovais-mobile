import 'react-native-url-polyfill/auto'

import TabLayout from '@/components/layout/TabLayout'
import FleetsContainer from '../components/Container'
import Header from '../components/Header'

function Products() {
  return (
    <>
      <Header />
      <FleetsContainer />
    </>
  )
}

export const FleetsScreen = () => {
  return (
    <TabLayout>
      <Products />
    </TabLayout>
  )
}
