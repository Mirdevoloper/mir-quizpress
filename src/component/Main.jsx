
import { Heading, Box, Field, Textarea, Text, Flex, NativeSelect, Button, Image } from '@chakra-ui/react'
import React from 'react'
import { GoPlus } from "react-icons/go";
import Head from './Head';
import Question from './Question';


const main = () => {
    return (
        <div >
             

 
             
            <Box  w='820px' h='418px' margin='0 auto' mt='25px' p='25px' display='flex' bg='#FFFFFF' shadow={'md'} >
               <Box >

                    <Field.Root>
                        <Heading fontWeight={'500'} fontSize={'20px'} >Add name  </Heading>
                        <Field.Label fontWeight={'600'} fontSize={'14px'} m='4' ml='2'>Name</Field.Label>
                        <Textarea placeholder="Enter name" />
                        <Flex alignItems={'center'} mt='16px' gap='2'>
                          <GoPlus />  
                            <Text>Add Description </Text>
                            
                        </Flex>
                    </Field.Root>


                    <Field.Root>
                        <Text mt='16px'>What Would You Like to Create Today?</Text>

                        <NativeSelect.Root>
                            <NativeSelect.Field>
                                <option value="1">Quiz</option>
                                <option value="1">Survey</option>
                                <option value="1">Poll</option>
                                <option value="1">Exams</option>
                                <option value="1">Personal Assessment</option>

                            </NativeSelect.Field>
                            <NativeSelect.Indicator />
                        </NativeSelect.Root>
                    </Field.Root>

                    
                   
                    
                </Box>
            </Box>
             <Box  display='flex'  justifyContent={'end'} ml='30px' mr='64' gap='4'>
                        <Image src ='public/Button.png'/>
                        <Button>Save & Continue</Button>
                    </Box>





        </div>
    )
}

export default main