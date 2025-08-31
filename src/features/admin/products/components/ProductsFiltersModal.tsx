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
import { VStack } from '@/src/components/ui/vstack'
import { Settings2 } from 'lucide-react-native'
import useProductsStore from '../hooks/useProductsStore'

export default function ProductsFiltersModal() {
  const { showProductsFiltersModal, setShowProductsFiltersModal } =
    useProductsStore()
  return (
    <Modal
      isOpen={showProductsFiltersModal}
      onClose={() => {
        setShowProductsFiltersModal(false)
      }}
      size="lg"
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <VStack className="items-center justify-center flex-1">
            <Box className="w-[56px] h-[56px] rounded-full bg-background-info items-center justify-center">
              <Icon as={Settings2} className="stroke-info-500" size="xl" />
            </Box>
            <Heading size="md" className="mb-2 text-center text-typography-950">
              Filtrar Estoque
            </Heading>
            <Text size="sm" className="text-center text-typography-500">
              Os produtos serão filtrados conforme os critérios selecionados.
            </Text>
          </VStack>
        </ModalHeader>
        <ModalBody className="mt-0 mb-4"></ModalBody>
        <ModalFooter className="w-full">
          <Button
            variant="outline"
            action="secondary"
            size="sm"
            onPress={() => {
              setShowProductsFiltersModal(false)
            }}
            className="flex-grow"
          >
            <ButtonText>Cancelar</ButtonText>
          </Button>
          <Button
            onPress={() => {
              setShowProductsFiltersModal(false)
            }}
            size="sm"
            className="flex-grow"
          >
            <ButtonText>Confirmar</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
