import { Flex, Input, Button, VStack, Heading, Divider, Box} from '@chakra-ui/react'
import { FormEvent, useState } from 'react'

import Link from 'next/link'
import { api } from '../../services/api'

export default function Local() {
  const [especialidade, setEspecialidade] = useState('')
  const [medico, setMedico] = useState('')
  const [local, setLocal] = useState('')
  const [procedimento, setProcedimento] = useState('')
  const [data, setData] = useState('')

  const newLocal = {
    especialidade: especialidade,
    medico: medico,
    local: local,
    procedimento: procedimento,
    data: data,
  }

  const handleCreateLocal = (event:FormEvent) => {
    event.preventDefault();

    api.post('/local', newLocal)
      .then(response => {console.log(response.data), alert("Local de Atendimento Cadastrado com Sucesso")})
      .catch(error => console.log(error))

    setMedico('');  
    setEspecialidade('');  
    setLocal('');  
    setProcedimento('');  
    setData('');  
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
        onSubmit={handleCreateLocal}
      >

        <Heading size="md" fontWeight="normal">Local de atendimento</Heading>
        
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
            name="medico" 
            type="text" 
            placeholder="Médico" 
            focusBorderColor="blue.500"
            value={medico}
            onChange={ event => setMedico(event.target.value) }
          />
          <Input 
            name="local" 
            type="text" 
            placeholder="Endereço" 
            focusBorderColor="blue.500"
            value={local}
            onChange={ event => setLocal(event.target.value) }
          />
          <Input 
            name="procedimento" 
            type="text" 
            placeholder="Procedimento" 
            focusBorderColor="blue.500" 
            value={procedimento}
            onChange={ event => setProcedimento(event.target.value) }
          />
          <Input 
            name="data" 
            type="date" 
            placeholder="Data" 
            focusBorderColor="blue.500"
            value={data}
            onChange={ event => setData(event.target.value) } 
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