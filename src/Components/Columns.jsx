import { Flex, Image, Text, HStack } from "@chakra-ui/react";
import { useEffect } from "react";
// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getMainStData } from "../Redux/action";
// import BlogPostWithImage from './ImgText'

export const MostPopular = () => {
  // const [data, setData] = useState([]);
  const data = useSelector((state) => state.mData.mData);
  console.log(data, "data");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMainStData());
  }, [dispatch]);

  return (
    <>
      <Flex
        h="720px"
        overflow="hidden"
        border="1px solid green"
        p="1%"
        gap="3%"
      >
        <Flex
          flexDirection="column-reverse"
          border="1px solid blue"
          alignItems="flex-start"
        >
          {data?.map((e) => (
            <HStack
              key={e._id}
              borderBottom="1px solid gray"
              paddingBottom="2%"
            >
              <Text fontSize={["12px", "18px"]}>{e.title}</Text>
              <Image src={e.images} alt={e.subtitle} w="50%" />
            </HStack>
          ))}
        </Flex>
      </Flex>
    </>
  );
};
