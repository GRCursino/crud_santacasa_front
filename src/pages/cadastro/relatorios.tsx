import { Flex, Heading, Divider} from '@chakra-ui/react'

export default function Relatorios() {
  return (
    <Flex 
      w="100vw"
      h="100vh"
      mt="4"
      ml="4"
      justify="left"
    >

      <Flex
        as="form"
        width="100%"
        maxWidth={720}
        p="8"
        borderRadius={8}
        borderColor="black"
        flexDirection="column"
      >

        <Heading size="md" fontWeight="normal">Relatórios</Heading>

        <Divider my="6" borderColor="gray.700" />

      </Flex>
    </Flex>
  )
}