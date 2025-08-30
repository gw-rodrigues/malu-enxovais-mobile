import TabLayout from '@/src/components/layout/TabLayout'
import 'react-native-url-polyfill/auto'
import ActiveTravels from '../components/ActiveTravels'
import QuickActions from '../components/QuickActions'
import QuickInfo from '../components/QuickInfo'
import RecentActivity from '../components/RecentActivity'

function Dashboard() {
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
