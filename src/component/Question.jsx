import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BiGridVertical } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";



const Question = () => {
    return (
        <div>
            <Box w='1600px' h='1696' borderColor={'red'} bg='' >

            <Box display={'flex'} justifyContent='space-between' maxW={'1600px'} h='88px' bg='#FFFFFF' shadow={'md'} overflowX='hidden' m='30px'>
                <Box p='30px' display='flex' alignItems={'center'} alignContent={'center'}>
                    <BiGridVertical />
                    <Text>Page 1</Text>
                </Box>


                <Box display={'flex'} alignItems={'center'} gap='4'>
                    <Image  w='21' h='21' src='public/Vector.png' />

                    
                    <Button bg='#006BFF' borderRadius={'5px'}> <Image  src='public/Vectore.png' /> Import Previous</Button>

                   
                    <Button bg='#006BFF' borderRadius={'5px'} > <BsPlus />Add Question</Button>
                </Box>

            </Box>

            <Box w=''>

            </Box>

            </Box>


        </div>
    )
}

export default Question