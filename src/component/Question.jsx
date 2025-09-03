import { Box, Button, Checkbox, Field, FieldRoot, Flex, Heading, Icon, Image, Input, InputGroup, NativeSelect, Span, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BiGridVertical } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { GrCheckbox } from "react-icons/gr";
import { CiMenuKebab } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { VscClose } from "react-icons/vsc";
import { CiCirclePlus } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";




const Question = () => {
    return (
        <div>

            <Box display={'flex'} justifyContent='space-between' W={'1600px'} bg='#FFFFFF' shadow={'md'} overflowX='hidden' m='20px' p='12px'>
                <Box p='12px' display='flex' alignItems={'center'} alignContent={'center'}>
                    <BiGridVertical />
                    <Text>Page 1</Text>
                </Box>
                <Box display={'flex'} alignItems={'center'} gap='4'>
                    <Image w='21' h='21' src='public/Vector.png' />
                    <Button bg='#006BFF' borderRadius={'5px'}> <Image src='public/Vectore.png' /> Import Previous</Button>
                    <Button bg='#006BFF' borderRadius={'5px'} > <BsPlus />Add Question</Button>
                </Box>
            </Box>



            <Box p='12px'>
                <Checkbox.Root>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>Select All </Checkbox.Label>
                </Checkbox.Root>
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
                                <Text fontSize={'16px'} fontWeight={'600'} color={'#006BFF'}>Do you like flower ?</Text>
                                <Text fontSize={'14px'} fontWeight={'400'} >Category: Would Cup Quiz </Text>
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
                                <Text fontSize={'16px'} fontWeight={'600'} color={'#006BFF'}>General Knowledge Quiz! ?</Text>
                                <Text fontSize={'14px'} fontWeight={'400'} >Category: Would Cup Quiz </Text>
                            </Box>
                        </Box>
                        <Box p='12px' pt='24px' h='18px' >
                            <CiMenuKebab />
                        </Box>
                    </Flex>
                </Box>
            </Box>


            <Box alignItems={'center'} p='12px' >
                <Box w='1456px' h='auto' bg='#FFFFFF' shadow={'md'} m='12px' ml='25px'>
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                        <Box display={'flex'} alignItems={'center'} alignContent={'center'} pt='20px' >
                            <Box p='12px' > <BiGridVertical /> </Box>
                            <Box >
                                <Text fontSize={'16px'} fontWeight={'600'} color={'#006BFF'}>What is your favorite food? ?</Text>
                                <Text fontSize={'14px'} fontWeight={'400'} >Category: Would Cup Quiz </Text>
                            </Box>
                        </Box>
                        <Box p='12px' pt='24px' h='18px' >
                            <CiMenuKebab />
                        </Box>
                    </Flex>

                    {/*  */}

                    <Text ml='16px' mt='40px' fontWeight={500} fontSize={'16px'} >Titel</Text>
                    <Box display={'flex'}>
                        <Box>
                            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} w='820px' h='24px' bg='' ml='20px' mt='20px' mb='8px'>
                                <Text fontWeight={'400'} fontSize={'16px'}>What is your favorite food?</Text>
                                <Box><GoChevronDown /></Box>
                            </Box>

                            <Box display={'flex'} alignItems={'center'} ml='16px' gap='2' >
                                <GoPlus />
                                <Text color={'#006BFF'} fontWeight={'500'} fontSize={'12px'} >Add Description </Text>
                            </Box>
                            <Box display={'flex'}>
                                <Box display={'flex'} w='64px' h='24px' mt='30px' ml='20px' mr='12px' gap='4' >
                                    <Box  > <VscClose color='#E2483D' />  </Box>
                                    <Box> <CiCirclePlus color='#22A06B' /> </Box>
                                </Box>
                                <Box display={'flex'} alignItems={'center'} mt='20px' textAlign={'center'} gap='4' >
                                    <Box maxW='460px' h='44px'  ><Input placeholder=" Your Answer" /></Box>
                                    <Box w='120px' h='44px'><Input placeholder=" point" /> </Box>
                                    <Checkbox.Root>
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Label>Correct </Checkbox.Label>
                                        <Checkbox.Control />
                                    </Checkbox.Root>
                                </Box>


                            </Box>
                            <Box display={'flex'}>
                                <Box display={'flex'} w='64px' h='24px' mt='30px' ml='20px' mr='12px' gap='4' >
                                    <Box  > <VscClose color='#E2483D' />  </Box>
                                    <Box> <CiCirclePlus color='#22A06B' /> </Box>
                                </Box>

                                <Box display={'flex'} alignItems={'center'} mt='20px' textAlign={'center'} gap='4' >
                                    <Box > <Input placeholder=" Your Answer" /></Box>
                                    <Box w='120px' h='44px' ><Input placeholder=" 20" /> </Box>

                                    <Checkbox.Root>
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Label>Correct </Checkbox.Label>
                                        <Checkbox.Control />
                                    </Checkbox.Root>
                                </Box>

                            </Box>

                            <Box display={'flex'}>
                                <Box display={'flex'} w='64px' h='24px' mt='30px' ml='20px' mr='12px' gap='4' >
                                    <Box  > <VscClose color='#E2483D' />  </Box>
                                    <Box> <CiCirclePlus color='#22A06B' /> </Box>
                                </Box>

                                <Box display={'flex'} alignItems={'center'} mt='20px' textAlign={'center'} gap='4' >
                                    <Box > <Input placeholder=" Your Answer" />  </Box>
                                    <Box w='120px' h='44px'><Input placeholder=" -10" />  </Box>
                                    <Checkbox.Root>
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Label>Correct </Checkbox.Label>
                                        <Checkbox.Control />
                                    </Checkbox.Root>
                                </Box>

                            </Box>
                            <Box display={'flex'}>
                                <Box display={'flex'} w='64px' h='24px' mt='30px' ml='20px' mr='12px' gap='4' >
                                    <Box  > <VscClose color='#E2483D' />  </Box>
                                    <Box> <CiCirclePlus color='#22A06B' /> </Box>
                                </Box>

                                <Box display={'flex'} alignItems={'center'} mt='20px' textAlign={'center'} gap='4' >
                                    <Box > <Input placeholder=" Your Answer" /> </Box>
                                    <Box w='120px' h='44px'> <Input placeholder="2" /> </Box>
                                    <Box>
                                        <Checkbox.Root>
                                            <Checkbox.HiddenInput />
                                            <Checkbox.Label>Correct </Checkbox.Label>
                                            <Checkbox.Control />
                                        </Checkbox.Root>
                                    </Box>


                                </Box>
                            </Box>

                        </Box>


                        <Box maxw='auto' h='434px' ml='40px' >

                            <Field.Root>
                                <Field.Label>Question Type</Field.Label>
                                <NativeSelect.Root>
                                    <NativeSelect.Field>
                                        <option value="1">Multiple Response</option>
                                    </NativeSelect.Field>
                                    <NativeSelect.Indicator />
                                </NativeSelect.Root>
                            </Field.Root>

                            <Box mt='30px'>
                                <Field.Root>
                                    <Field.Label>Answer Type</Field.Label>
                                    <NativeSelect.Root>
                                        <NativeSelect.Field>
                                            <option value="1">Text Answer</option>
                                        </NativeSelect.Field>
                                        <NativeSelect.Indicator />
                                    </NativeSelect.Root>
                                </Field.Root>
                            </Box>

                            <Box mt='30px'>
                                <InputGroup startElement={<CiSearch />}>
                                    <Input placeholder="Username" />
                                </InputGroup>
                            </Box>

                            <Box mt='12px' gap={2}>
                                <Checkbox.Root>
                                    <Checkbox.HiddenInput />
                                    <Checkbox.Control />
                                    <Checkbox.Label>Donation </Checkbox.Label>
                                </Checkbox.Root>
                            </Box>

                            < Box mt='12px' gap={4}>
                                <Checkbox.Root>
                                    <Checkbox.HiddenInput />
                                    <Checkbox.Control />
                                    <Checkbox.Label>Annual exam </Checkbox.Label>
                                </Checkbox.Root>
                            </Box>

                            <Box mt='12px' gap={4}>
                                <Checkbox.Root>
                                    <Checkbox.HiddenInput />
                                    <Checkbox.Control />
                                    <Checkbox.Label>Design Syatem </Checkbox.Label>
                                </Checkbox.Root>
                            </Box>

                            <Box display={'flex'} alignItems={'center'} gap='2' mt='12px' >
                                <GoPlus />
                                <Text color={'#006BFF'} fontWeight={'500'} fontSize={'12px'} >Add New Category </Text>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box>

        </div>
    )
}

export default Question