import { Flex, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link as RoutLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMainStData } from "../Redux/action";
// import BlogPostWithImage from './ImgText'

export const Slidder = () => {
  // const [data, setData] = useState([]);
  const data = useSelector((state) => state.mData.mData);
  console.log(data, "data");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMainStData());
  }, [dispatch]);

  return (
    <>
      <Grid h="250px" border="1px solid gray" gap="2%" p="1%">
        <Flex overflow="scroll" w="75%">
          {data?.map((e) => (
            <RoutLink to={`/id/${e._id}`}>
              <VStack
                key={e._id}
                borderBottom="1px solid gray"
                paddingBottom="2%"
              >
                <Text fontSize={["12px", "18px"]}>{e.title}</Text>
                <Image src={e.images} alt={e.subtitle} w="50%" />
              </VStack>
            </RoutLink>
          ))}
        </Flex>
      </Grid>
    </>
  );
};
