import 'react-native-url-polyfill/auto'

import TabLayout from '../layout/index'
import QuickActions from './quick-actions'
import QuickInfo from './quick-info'

function Dashboard() {
  // const { session, isAuthenticated } = useAuthStore()

  return (
    <>
      <QuickInfo />
      <QuickActions />
    </>
  )
}

export const DashboardScreen = () => {
  return (
    <TabLayout>
      <Dashboard />
    </TabLayout>
  )
}
