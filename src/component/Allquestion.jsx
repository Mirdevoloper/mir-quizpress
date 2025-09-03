import { Box, Portal, Select, Flex, Input, Text, Checkbox, Heading, Button, } from '@chakra-ui/react'
import { Field, NativeSelect } from "@chakra-ui/react"
import { FiPlus } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";

import React from 'react'

const Allquestion = () => {
    return (


        <div>



            <Box w='796px' h='auto' m='20px' shadow={'md'}   >

                <Flex gap='8' ml='30px' mr='30px'>

                    <Field.Root pr='4px' mt='30px'>
                        <Input placeholder="Search Questions" />
                    </Field.Root>

                    <Field.Root mt='30px'>
                        <NativeSelect.Root >
                            <NativeSelect.Field fontWeight={'400'} fontSize={'12px'}>
                                <option >All Categories</option>
                            </NativeSelect.Field>
                            <NativeSelect.Indicator />
                        </NativeSelect.Root>
                    </Field.Root>

                    <Field.Root mt='30px'>
                        <NativeSelect.Root >
                            <NativeSelect.Field fontWeight={'400'} fontSize={'12px'}>
                                <option >All Quiz</option>

                            </NativeSelect.Field>
                            <NativeSelect.Indicator />
                        </NativeSelect.Root>
                    </Field.Root>

                    <Field.Root mt='30px' >
                        <NativeSelect.Root >
                            <NativeSelect.Field fontWeight={'400'} fontSize={'12px'}>
                                <option value="1">All Questions Type</option>

                            </NativeSelect.Field>
                            <NativeSelect.Indicator />
                        </NativeSelect.Root>
                    </Field.Root>

                </Flex>

                <Box ml='30px' mt='20px'>

                    <Checkbox.Root>
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        <Checkbox.Label fontWeight={'500'} fontsize='14px'>Select All Question</Checkbox.Label>
                    </Checkbox.Root>
                </Box>

                <Box display='flex' justifyContent={'space-between'} w='632px' h='76px' shadow={'md'} ml='30px' mt='20px' >
                    <Flex >
                        <Box mt='30px' ml='20px'>
                            <Checkbox.Root >
                                <Checkbox.HiddenInput />
                                <Checkbox.Control />
                            </Checkbox.Root>
                        </Box>

                        <Box m='20px' fontWeight={500} fontSize={'14px'} >
                            <Text>What's your favorite color?</Text>
                            <Text fontWeight={400} fontSize={'12px'}>Quiz name: Developer</Text>
                        </Box>
                    </Flex>

                    <Box mt='20px' mr='20px' >
                        <Button gap='4' bg='#FFFFFF'>
                            <FiPlus color='#141A24' />
                            <Text color='#141A24'>Add</Text>
                        </Button>
                    </Box>
                </Box>

                <Box display='flex' justifyContent={'space-between'} w='632px' h='76px' shadow={'md'} ml='30px' mt='20px' >

                    <Flex >
                        <Box mt='30px' ml='20px'>
                            <Checkbox.Root >
                                <Checkbox.HiddenInput />
                                <Checkbox.Control />
                            </Checkbox.Root>
                        </Box>

                        <Box m='20px' fontWeight={500} fontSize={'14px'} >
                            <Text>What's your favorite color?</Text>
                            <Text fontWeight={400} fontSize={'12px'}>Quiz name: Developer</Text>
                        </Box>
                    </Flex>

                    <Box mt='20px' mr='20px' >
                        <Button gap='4' bg='#FFFFFF'>
                            <FiPlus color='#141A24' />
                            <Text color='#141A24'>Add</Text>
                        </Button>
                    </Box>

                </Box>
                <Box display='flex' justifyContent={'space-between'} w='632px' h='76px' shadow={'md'} ml='30px' mt='20px' >

                    <Flex >
                        <Box mt='30px' ml='20px'>
                            <Checkbox.Root >
                                <Checkbox.HiddenInput />
                                <Checkbox.Control />
                            </Checkbox.Root>
                        </Box>

                        <Box m='20px' fontWeight={500} fontSize={'14px'} >
                            <Text>What's your favorite color?</Text>
                            <Text fontWeight={400} fontSize={'12px'}>Quiz name: Developer</Text>
                        </Box>
                    </Flex>

                    <Box mt='20px' mr='20px' >
                        <Button gap='4' bg='#FFFFFF'>
                            <FiPlus color='#141A24' />
                            <Text color='#141A24'>Add</Text>
                        </Button>
                    </Box>

                </Box>
                <Box display='flex' justifyContent={'space-between'} w='632px' h='76px' shadow={'md'} ml='30px' mt='20px' >

                    <Flex >
                        <Box mt='30px' ml='20px'>
                            <Checkbox.Root >
                                <Checkbox.HiddenInput />
                                <Checkbox.Control />
                            </Checkbox.Root>
                        </Box>

                        <Box m='20px' fontWeight={500} fontSize={'14px'} >
                            <Text>What's your favorite color?</Text>
                            <Text fontWeight={400} fontSize={'12px'}>Quiz name: Developer</Text>
                        </Box>
                    </Flex>

                    <Box mt='20px' mr='20px' >
                        <Button gap='4' bg='#FFFFFF'>
                            <FiPlus color='#141A24' />
                            <Text color='#141A24'>Add</Text>
                        </Button>
                    </Box>
                </Box>

                <Box display='flex' justifyContent={'space-between'} w='632px' h='76px' shadow={'md'} ml='30px' mt='20px' >

                    <Flex >
                        <Box mt='30px' ml='20px'>
                            <Checkbox.Root >
                                <Checkbox.HiddenInput />
                                <Checkbox.Control />
                            </Checkbox.Root>
                        </Box>

                        <Box m='20px' fontWeight={500} fontSize={'14px'} >
                            <Text>What's your favorite color?</Text>
                            <Text fontWeight={400} fontSize={'12px'}>Quiz name: Developer</Text>
                        </Box>
                    </Flex>

                    <Box mt='20px' mr='20px'  >
                        <Button gap='4' bg='#FFFFFF'>
                            <FiPlus color='#141A24' />
                            <Text color='#141A24'>Add</Text>
                        </Button>
                    </Box>
                </Box>

                <Flex justifyContent={'space-between'} m='30px'>
                    <Button shadow={'md'} bg='#FFFFFF'>
                       <RiDeleteBin6Fill  color='#141A24'/>
                        <Text color='#141A24'>Delete</Text>
                    </Button>
                    <Button bg='#006BFF'>
                        <FiPlus />
                        <Text>Add Questions</Text>
                    </Button>
                </Flex>

            </Box>





        </div>
    )
}

export default Allquestion