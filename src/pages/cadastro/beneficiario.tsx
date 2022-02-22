import { Flex, Input, Button, HStack, Heading, Divider, Box} from '@chakra-ui/react'
import Head from 'next/head';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

export default function Beneficiario() {
  
  const [ beneficiario, setBeneficiario ] = useState('');
  const [ nascimento, setNascimento ] = useState('');
  const [ sexo, setSexo ] = useState('');

  const newBeneficiario = {
    nome: beneficiario,
    data_nasc: nascimento,
    sexo: sexo,
  }

  const handleCreateBeneficiario = (event:FormEvent) => {
    event.preventDefault();

    api.post('/beneficiario', newBeneficiario)
      .then(response => {console.log(response.data), alert("Beneficiário Cadastrado com Sucesso")})
      .catch(error => console.log(error))

    setBeneficiario('');  
    setNascimento('');  
    setSexo('');  
  }

  return (
    <Flex 
      w="100vw"
      h="100vh"
      mt="4"
      ml="4"
      align="start"
      justify="left"
    >

      <Head> 
        <title>Cadastro | Beneficiário</title>
      </Head>

      <Box
        as="form"
        width="100%"
        maxWidth={720}
        p="8"
        borderRadius={8}
        borderColor="black"
        flexDirection="column"
        onSubmit={handleCreateBeneficiario}
      >

        <Heading size="md" fontWeight="normal">Criar beneficiário</Heading>
        
        <HStack mt="2">  
          <Input 
            name="beneficiario" 
            type="text" 
            placeholder="Beneficiário" 
            focusBorderColor="blue.500" 
            value={beneficiario}
            onChange={ event => setBeneficiario(event.target.value) }
            autoFocus
          />

          <Input 
            name="nascimento" 
            type="date" 
            focusBorderColor="blue.500"
            value={nascimento}
            onChange={ event => setNascimento(event.target.value) }
          />

          <Input 
            name="sexo" 
            type="text"  
            placeholder="Sexo" 
            focusBorderColor="blue.500"
            width="100"
            value={sexo}
            onChange={ event => setSexo(event.target.value)}
            />

          <Button type="submit" mt="6" colorScheme="green" size="lg">
            Enviar
          </Button>

          <Link href={'/'}>
            <Button as="a" size="lg" fontSize="lg" colorScheme="blue">Voltar</Button>
          </Link>
        </HStack>

        <Divider my="6" borderColor="gray.700" />

      </Box>
    </Flex>
  )
}