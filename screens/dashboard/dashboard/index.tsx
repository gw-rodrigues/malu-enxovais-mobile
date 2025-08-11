import 'react-native-url-polyfill/auto'

import TabLayout from '../layout/index'
import ActiveTravels from './active-travels'
import QuickActions from './quick-actions'
import QuickInfo from './quick-info'
import RecentActivity from './recent-activity'

function Dashboard() {
  // const { session, isAuthenticated } = useAuthStore()

  return (
    <>
      <QuickInfo />
      <QuickActions />
      <ActiveTravels />
      <RecentActivity />
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
