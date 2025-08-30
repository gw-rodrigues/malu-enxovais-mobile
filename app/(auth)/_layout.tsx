import { SafeAreaView } from '@/components/ui/safe-area-view'
import { Slot } from 'expo-router'

export default function TabLayout() {
  return (
    <SafeAreaView className="flex-1 w-full h-full">
      <Slot />
    </SafeAreaView>
  )
}
