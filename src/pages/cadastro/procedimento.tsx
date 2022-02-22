import { Flex, Input, Button, VStack, Heading, Divider, Box} from '@chakra-ui/react'
import { FormEvent, useState } from 'react';

import Link from 'next/link';
import { api } from '../../services/api';

export default function Procedimento() {
  const [procedimento, setProcedimento] = useState('');
  const [tipo, setTipo] = useState('');

  const newProcedimento = {
    desc_proc: procedimento,
    tipo_proc: tipo
  }

  
  const handleCreateProcedimento = (event:FormEvent) => {
    event.preventDefault();

    api.post('/procedimento', newProcedimento)
      .then(response => {console.log(response.data), alert("Procedimento Cadastrado com Sucesso")})
      .catch(error => console.log(error))

    setProcedimento('');  
    setTipo('');    
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
        onSubmit={handleCreateProcedimento}
      >

        <Heading size="md" fontWeight="normal">Procedimento</Heading>
        
        <VStack mt="2">  
          <Input 
            name="descricao" 
            type="text" 
            placeholder="Procedimento" 
            focusBorderColor="blue.500"
            value={procedimento}
            onChange={ event => setProcedimento(event.target.value) } 
            autoFocus
          />
          <Input 
            name="tipo" 
            type="text" 
            placeholder="Tipo procedimento" 
            focusBorderColor="blue.500"
            value={tipo}
            onChange={ event => setTipo(event.target.value) }
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