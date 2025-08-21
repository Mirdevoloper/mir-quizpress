import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Head = () => {
  return (
    <>
      <Box pl='60px' pr='60px' m='12px' display='flex' justifyContent='space-between' alignItems='center' maxW='1760px' h='88px' border='1px' bg='#FFFFFF' shadow='md' overflowX ='hidden' >
        <Flex display='flex' alignItems='center'>
          <Image w='36px' h='36px' src='/public/blue.png' />
          <Text pl='10px'>QuizPress</Text>
        </Flex>

        <Box display='flex' gap='10'>
          <Flex alignItems='center' gap='2'>
            <Image src='public/step1.png' />

            <Text w='38' h='20px' fontWeight='500' fontSize={'12px'} >   Name  </Text>

          </Flex>

          <Flex alignItems='center' gap='2'>
            <Image src='public/steps2.png' />
            <Text>Questions
            </Text>
          </Flex>
          <Flex alignItems='center' gap='2'>
            <Image src='public/steps3.png' />
            <Text>Settings
            </Text>
          </Flex>

        </Box>

        <Box display='flex' gap='4.5'>
          <Flex gap='2' alignItems={'center'}>
            <Image src='public/scan-eye.png'/>
            <Text>View</Text>
          </Flex>

          <Flex alignItems={'center'}>
            <Box  bg='#006BFF' p='1.5' borderRadius={'5px'}>
            <Text color='#FFFFFF'>
              publish
            </Text>
            </Box>
          </Flex>


        </Box>

      </Box>

    </>
  )
}

export default Head
