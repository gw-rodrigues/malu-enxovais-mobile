import 'react-native-url-polyfill/auto'

import TabLayout from '../layout/index'
import Header from './header'
import ProductsContainer from './products-container'

function Products() {
  // const { session, isAuthenticated } = useAuthStore()

  return (
    <>
      <Header />
      <ProductsContainer />
    </>
  )
}

export const ProductsScreen = () => {
  return (
    <TabLayout>
      <Products />
    </TabLayout>
  )
}
