import { Flex, Input, Button, HStack, Heading, Divider, Box} from '@chakra-ui/react'
import { FormEvent, useState } from 'react'

import Head from 'next/head';
import Link from 'next/link'

import { api } from '../../services/api';


export default function Medico() {
  
  const [medico, setMedico] = useState('');
  const [crm, setCrm] = useState('');
  const [nascimento, setNascimento] = useState('');

  const newMedico = {
    nome: medico,
    data_nasc: nascimento,
    crm: crm,
  }

  const handleCreateMedico = (event:FormEvent) => {
    event.preventDefault();

    api.post('/medico', newMedico)
      .then(response => {console.log(response.data), alert("Médico Cadastrado com Sucesso")})
      .catch(error => console.log(error))

    setMedico('');  
    setNascimento('');  
    setCrm('');  
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
        <title>Cadastro | Médico</title>
      </Head>

      <Box
        as="form"
        width="100%"
        maxWidth={800}
        p="8"
        borderRadius={8}
        borderColor="black"
        flexDirection="column"
        onSubmit={handleCreateMedico}
      >

        <Heading size="md" fontWeight="normal">Criar médico</Heading>
        
        <HStack mt="2">  
          <Input 
            name="medico" 
            type="text" 
            placeholder="Nome" 
            value={medico}
            onChange={ event => setMedico(event.target.value) }
            autoFocus
          />
          <Input 
            name="crm" 
            type="text" 
            placeholder="CRM"
            value={crm}
            onChange={ event => setCrm(event.target.value) } 
          />
          <Input 
            name="cbos" 
            type="date"  
            placeholder="Nascimento"
            value={nascimento}
            onChange={ event => setNascimento(event.target.value) }
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