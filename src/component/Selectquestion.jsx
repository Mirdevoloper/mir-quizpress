import { Box, Button, Checkbox, Flex, NumberInput, Switch, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { GoChevronDown } from "react-icons/go";

import { GrCheckbox } from "react-icons/gr";
import { BiGridVertical } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";






const Selectquestion = () => {
  return (
    <>

      <Box w='952px' ml='20px' mt='20px'>

        <Box shadow='xs' display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
          <Text fontWeight={'400'} fontSize={'16px'} p='12px'>Question settings </Text>
          <Box p='12px'><GoChevronDown /></Box>
        </Box>


        <Flex ml='8px' w='50%' mt='12px' alignItems={'center'} justifyContent={'space-between'}>

          <Box>
            <Text fontWeight={'500'} fontSize={'14px'}>
              Answer required
            </Text>
            <Text fontWeight={'400'} fontSize={'12px'}>
              If enable required to answer
            </Text>
          </Box>

          <Box>

            <Switch.Root >
              <Switch.HiddenInput />
              <Switch.Control />
            </Switch.Root>
          </Box>
        </Flex>


        {/* */}

        <Flex ml='8px' w='50%' mt='12px' alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Text fontWeight={'500'} fontSize={'14px'}>
              Random answer
            </Text>
            <Text fontWeight={'400'} fontSize={'12px'}>
              If enable required to answer.
            </Text>
          </Box>

          <Box >
            < Switch.Root >
              <Switch.HiddenInput />
              <Switch.Control />

            </Switch.Root>
          </Box>
        </Flex>

        {/* */}


        <Flex ml='8px' w='50%' mt='12px' alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Text fontWeight={'500'} fontSize={'14px'}>
              Display points
            </Text>
            <Text fontWeight={'400'} fontSize={'12px'}>
              If enable required to answer
            </Text>
          </Box>

          <Box>
            < Switch.Root >
              <Switch.HiddenInput />
              <Switch.Control />
            </Switch.Root>
          </Box>
        </Flex>

        {/* */}


        <Flex alignItems={'center'}>
          <Box mt='12px' ml='8px'>
            <Text fontWeight={'500'} fontSize={'14px'}>
              Negative Marking
            </Text>
            <Text fontWeight={'400'} fontSize={'12px'}>
              Enter a value to deduct points for wrong quiz answers. Use 0 to avoid marking.
            </Text>
          </Box>


          <NumberInput.Root defaultValue="10" ml='30px' mt='16px'>
            <NumberInput.Control />
            <NumberInput.Input />
          </NumberInput.Root>

        </Flex>

        <Flex m='40px' borderRadius={'5px'} justifyContent={'flex-end'}>
          <Button bg='#006BFF'>Save</Button>
        </Flex>


      </Box>

      <Box display={'flex'} alignItems={'center'} p='12px' >
        <Checkbox.Root>
          <Checkbox.HiddenInput />
          <Checkbox.Control />
        </Checkbox.Root>

        <Box w='1456px' h='96px' bg='#FFFFFF' shadow={'md'} m='12px'>

          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} alignContent={'center'} pt='20px' >
              <Box p='12px' >
                <BiGridVertical />
              </Box>
              <Box >
                <Text fontSize={'16px'} fontWeight={'600'} color={'#006BFF'}>General Knowledge Quiz ! </Text>
                <Text fontSize={'14px'} fontWeight={'400'} >Category: Would Cup Quiz  </Text>
              </Box>
            </Box>
            <Box p='12px' pt='24px' h='18px' >
              <CiMenuKebab />
            </Box>
          </Flex>

        </Box>
      </Box>


      <Box display={'flex'} alignItems={'center'} p='12px' >
        <Checkbox.Root>
          <Checkbox.HiddenInput />
          <Checkbox.Control />
        </Checkbox.Root>

        <Box w='1456px' h='96px' bg='#FFFFFF' shadow={'md'} m='12px'>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} alignContent={'center'} pt='20px' >
              <Box p='12px' > <BiGridVertical /> </Box>
              <Box >
                <Text fontSize={'16px'} fontWeight={'600'} color={'#006BFF'}>General Knowledge Quiz ! </Text>
                <Text fontSize={'14px'} fontWeight={'400'} >Category: Would Cup Quiz  </Text>
              </Box>
            </Box>
            <Box p='12px' pt='24px' h='18px' >
              <CiMenuKebab />
            </Box>
          </Flex>
        </Box>

      </Box>



    </>


  )
}

export default Selectquestion