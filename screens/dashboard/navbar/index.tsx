import { HStack } from '@/components/ui/hstack'
import { Icon } from '@/components/ui/icon'
import useAuthStore from '@/store/auth.store'
import { Redirect } from 'expo-router'
import { Bell, Menu } from 'lucide-react-native'

import Logo from '@/assets/images/icon-dark.svg'

export default function NavBar() {
  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    return <Redirect href="/splash-screen" />
  }

  return (
    <HStack className="items-center justify-between p-4 ">
      <Icon size="xl" as={Menu} />
      <Logo width={90} height={24} />
      <Icon size="xl" as={Bell} />
    </HStack>
  )
}
