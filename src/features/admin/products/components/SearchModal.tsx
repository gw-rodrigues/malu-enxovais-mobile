import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Icon } from '@/components/ui/icon'
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@/components/ui/modal'
import { Text } from '@/components/ui/text'
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from '@/src/components/ui/input'
import { VStack } from '@/src/components/ui/vstack'
import { QrCode, SearchIcon } from 'lucide-react-native'
import useProductsStore from '../hooks/useProductsStore'

export default function SearchModal() {
  const { showSearchModal, setShowSearchModal, setSearchProductQuery } =
    useProductsStore()

  return (
    <Modal
      isOpen={showSearchModal}
      onClose={() => {
        setShowSearchModal(false)
      }}
      size="lg"
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <VStack className="items-center justify-center flex-1">
            <Box className="w-[56px] h-[56px] rounded-full bg-background-info items-center justify-center">
              <Icon as={QrCode} className="stroke-info-500" size="xl" />
            </Box>
            <Heading size="md" className="mb-2 text-center text-typography-950">
              Pesquisar QRcode
            </Heading>
            <Text size="sm" className="text-center text-typography-500">
              Escaneie ou digite o QRcode do produto para encontrá-lo
              rapidamente
            </Text>
          </VStack>
        </ModalHeader>
        <ModalBody className="my-8">
          <VStack space="md">
            <Input size="lg" className="flex-1 bg-white rounded-xl">
              <InputSlot className="pl-3">
                <InputIcon as={SearchIcon} />
              </InputSlot>
              <InputField
                placeholder="PRODUCT_JC001"
                onChangeText={(input) => setSearchProductQuery(input)}
              />
            </Input>
          </VStack>
        </ModalBody>
        <ModalFooter className="w-full">
          <Button
            variant="outline"
            action="secondary"
            size="sm"
            onPress={() => {
              setShowSearchModal(false)
            }}
            className="flex-grow"
          >
            <ButtonText>Cancelar</ButtonText>
          </Button>
          <Button
            onPress={() => {
              setShowSearchModal(false)
            }}
            size="sm"
            className="flex-grow"
          >
            <ButtonText>Adicionar</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
