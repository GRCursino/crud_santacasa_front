import { Flex, Button, Heading, Divider, HStack} from '@chakra-ui/react'
import Head from 'next/head'

import Link from 'next/link'

export default function Home() {
  return (
    <Flex 
      w="100vw"
      h="100vh"
      mt="4"
      ml="4"
      align="start"
      justify="center"
    >

      <Head> 
        <title>Cadastros | Santa Casa</title>
      </Head>
      
      <Flex
        width="100%"
        maxWidth={720}
        p="8"
        flexDirection="column"
      >

      <Heading size="md" fontWeight="normal">Cadastros</Heading>
      
      <Divider my="6" borderColor="gray.700" />

      <HStack spacing="2">
        <Link href={'/cadastro/beneficiario'}>
          <Button as="a" size="md" fontSize="sm" colorScheme="blue">Beneficiário</Button>
        </Link>

        <Link href={'/cadastro/medico'}> 
          <Button as="a" size="md" fontSize="sm" colorScheme="blue">Médico</Button>
        </Link>

        <Link href={'/cadastro/especialidade'}>  
          <Button as="a" size="md" fontSize="sm" colorScheme="blue">Especialidade</Button>
        </Link>

        <Link href={'/cadastro/procedimento'}>  
          <Button as="a" size="md" fontSize="sm" colorScheme="blue">Procedimento</Button>
        </Link>

        <Link href={'/cadastro/local'}>  
          <Button as="a" size="md" fontSize="sm" colorScheme="blue">Local</Button>  
        </Link>

        <Link href={'/cadastro/atendimento'}>
          <Button as="a" size="md" fontSize="sm" colorScheme="blue">Atendimento</Button>
        </Link>

         
      </HStack>

      </Flex>
    </Flex>
  )
}
