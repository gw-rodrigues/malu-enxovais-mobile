import Logo from '@/assets/images/icon-dark.svg'
import { Bell, Menu } from 'lucide-react-native'
import { HStack } from '../hstack'
import { Icon } from '../icon'
import { Pressable } from '../pressable'

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
