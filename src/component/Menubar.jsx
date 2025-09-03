import { Box } from '@chakra-ui/react'
import React from 'react'

import { Link } from 'react-router'



const Menubar = () => {
    return (
        <>

            <Box display='flex' justifyContent={'center'} gap='4'>

                <Link to={'/head'}> Head </Link>
                <Link to={'/main'}> Main </Link>
                <Link to={'/selectquestion'}>Selectquestion </Link>
                <Link to={'/allquestion'}> Allquestion </Link>
                <Link to={'/question'}> Question </Link>

            </Box>




        </>

    )
}

export default Menubar