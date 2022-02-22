import { Flex, Input, Button, VStack, Heading, Divider} from '@chakra-ui/react'
import Link from 'next/link'

export default function Atendimento() {
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

        <Heading size="md" fontWeight="normal">Atendimento</Heading>
        
        <VStack mt="2">  
          <Input name="beneficiario" type="text" placeholder="Beneficiário" focusBorderColor="blue.500" autoFocus/>
          <Input name="especialidade" type="text" placeholder="Especialidade" focusBorderColor="blue.500"/>
          <Input name="medico" type="text"  placeholder="Médico" focusBorderColor="blue.500"/>
          <Input name="local" type="text"  placeholder="Local" focusBorderColor="blue.500"/>
          <Input name="procedimento" type="text"  placeholder="Procedimento" focusBorderColor="blue.500"/>
          <Input name="data" type="date"  placeholder="Data" focusBorderColor="blue.500"/>

          <Button type="submit" mt="6" colorScheme="green" size="lg">
            Enviar
          </Button>

          <Link href={'/'}>
            <Button as="a" size="lg" fontSize="lg" colorScheme="blue">Voltar</Button>
          </Link>
        </VStack>

        <Divider my="6" borderColor="gray.700" />

      </Flex>
    </Flex>
  )
}