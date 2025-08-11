import { HStack } from '@/components/ui/hstack'
import { Icon } from '@/components/ui/icon'
import { Pressable } from '@/components/ui/pressable'
import { Bell, Menu } from 'lucide-react-native'
import { SafeAreaView } from '@/components/ui/safe-area-view'
import Logo from '@/assets/images/icon-dark.svg'

export function TopNavbar() {
  return (
    <HStack className="items-center justify-between px-4 py-3">
      <Pressable onPress={() => {}}>
        <Icon as={Menu} size="lg" />
      </Pressable>
      <Logo width={90} height={24} />
      <Pressable onPress={() => {}}>
        <Icon as={Bell} size="lg" />
      </Pressable>
    </HStack>
  )
}
