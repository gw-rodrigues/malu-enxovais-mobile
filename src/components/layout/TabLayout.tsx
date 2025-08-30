import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import { ScrollView } from 'react-native'

type AuthLayoutProps = {
  children: React.ReactNode
}

export default function TabLayout(props: AuthLayoutProps) {
  return (
    <ScrollView
      className="w-full h-full"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <HStack className="justify-center flex-grow w-full h-full">
        <VStack className="flex-1 w-full h-full gap-10 px-4 pt-4 pb-28">
          {props.children}
        </VStack>
      </HStack>
    </ScrollView>
  )
}
