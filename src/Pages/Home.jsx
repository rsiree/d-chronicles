import { Box, Flex, Text, VStack } from "@chakra-ui/react"
// import { CategoryDiv } from "../Components/CategoryDiv"
import { MainStories } from "../Components/MainStories"
import { MostPopular } from "../Components/MostPopular"
import { Slidder } from "../Components/Slidder"
// import Navbar2 from "../Components/Navbar2"
// import './home.module.css'


export const Home = () => {
    return (
        <Box>
            <Flex
                h={['950px','1760px']}
                gap='3%'
                p='0% 1% 1% 1%'
                flexDirection={['column','row']}
                overflowY={'hidden'}
            >
                <Flex flexDirection={'column'} w='75%'>
                    <Text
                        textAlign={'left'}
                        borderBottom='3px solid red'
                        w='fit-content'
                        fontWeight={'bold'}
                    >TOP STORIES</Text>
                    <MainStories />
                </Flex>
                
                <Box  w='23%' display={['none','block']}>
                    {/* <Flex flexDirection={'column'}  p='1%'> */}
                    <Flex flexDirection={'column'} >
                    <Text
                        textAlign={'left'}
                        borderBottom='3px solid red'
                        w='fit-content'
                        fontWeight={'bold'}
                    >
                        MOST POPULAR
                    </Text>
                            
                     <MostPopular/>       
                </Flex>
                <Flex flexDirection={'column'} 
                >
                    <Text
                        textAlign={'left'}
                        borderBottom='3px solid red'
                        w='fit-content'
                        fontWeight={'bold'}
                    >
                        COLUMNS
                    </Text>
                            
                     <MostPopular/>       
                </Flex>
                    {/* </Flex> */}
                </Box>
            </Flex>

            {/* <Box border='1px solid purple'>
               cartoons hi
            </Box> */}
            {/* <Box border='1px solid green'>
               {/* <CategoryDiv/> */}
            {/* </Box> */} 

            <Box border='1px solid salmon'>
                <Slidder/>
            </Box>

            {/* <Box border='1px solid green'>
               south repeat boxes
            </Box>

            <Box border='1px solid'>
                card
            </Box>

            <Box border='1px solid green'>
               south repeat boxes
            </Box> */}

        </Box>
    )
}

// navbar
// flex -> top srtories & flex-->most popular and columns
// div1/box --> cartoon
// box2
// slider
// boxs-->4no
//card
// boxs-->5