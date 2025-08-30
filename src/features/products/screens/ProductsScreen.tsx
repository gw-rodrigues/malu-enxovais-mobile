import 'react-native-url-polyfill/auto'

import TabLayout from '../../../components/layout/TabLayout'
import ProductsContainer from '../components/Container'
import Header from '../components/Header'

function Products() {
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
