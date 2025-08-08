import { HStack } from '@/components/ui/hstack'
import { SafeAreaView } from '@/components/ui/safe-area-view'
import { ScrollView } from '@/components/ui/scroll-view'
import { VStack } from '@/components/ui/vstack'

type AuthLayoutProps = {
  children: React.ReactNode
}

export const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <SafeAreaView className="w-full h-full">
      <ScrollView
        className="w-full h-full"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <HStack className="justify-center flex-grow w-full h-full ">
          <VStack
            className="relative items-center justify-center flex-1 hidden w-full h-full md:flex"
            space="md"
          >
            {/* <Image
              style={{ width: '100%', height: '100%' }}
              source={require('@/assets/auth/radialGradient.png')}
              className="object-cover w-full h-full"
              alt="Radial Gradient"
            /> */}
          </VStack>
          <VStack className="flex-1 w-full h-full gap-16 md:items-center md:justify-center p-9 md:gap-10 md:m-auto md:w-1/2">
            {props.children}
          </VStack>
        </HStack>
      </ScrollView>
    </SafeAreaView>
  )
}
