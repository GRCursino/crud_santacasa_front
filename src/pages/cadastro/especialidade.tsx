import { Flex, Input, Button, VStack, Heading, Box, Divider} from '@chakra-ui/react'
import { FormEvent, useState } from 'react'

import Link from 'next/link'
import { api } from '../../services/api';

export default function Especialidade() {
  const [especialidade, setEspecialidade] = useState('');
  const [cbos, setCbos] = useState('');

  const newEspecialidade = {
    Especialidade: especialidade,
    CBOS: cbos
  }

  const handleCreateEspecialidade = (event:FormEvent) => {
    event.preventDefault();

    api.post('/especialidade', newEspecialidade)
      .then(response => {console.log(response.data), alert("Especialidade Cadastrada com Sucesso")})
      .catch(error => console.log(error))

    setEspecialidade('');  
    setCbos('');    
  }

  return (
    <Flex 
      w="100vw"
      h="100vh"
      mt="4"
      ml="4"
      justify="left"
    >

      <Box
        as="form"
        width="100%"
        maxWidth={720}
        p="8"
        borderRadius={8}
        borderColor="black"
        flexDirection="column"
        onSubmit={handleCreateEspecialidade}
      >

        <Heading size="md" fontWeight="normal">Atendimento</Heading>
        
        <VStack mt="2">  
          <Input 
            name="especialidade" 
            type="text" 
            placeholder="Especialidade" 
            focusBorderColor="blue.500"
            value={especialidade}
            onChange={ event => setEspecialidade(event.target.value) } 
            autoFocus
          />
          <Input 
            name="cbos" 
            type="text"  
            placeholder="CBOS" 
            focusBorderColor="blue.500"
            value={cbos}
            onChange={ event => setCbos(event.target.value) }
          />

          <Button type="submit" mt="6" colorScheme="green" size="lg">
            Enviar
          </Button>

          <Link href={'/'}>
            <Button as="a" size="lg" fontSize="lg" colorScheme="blue">Voltar</Button>
          </Link>
        </VStack>

        <Divider my="6" borderColor="gray.700" />

      </Box>
    </Flex>
  )
}