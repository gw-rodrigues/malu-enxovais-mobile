import 'react-native-url-polyfill/auto'

import TabLayout from '../layout/index'
import FleetsContainer from './fleets-container'
import Header from './header'

function Products() {
  // const { session, isAuthenticated } = useAuthStore()

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
