import { Flex, Image, Text, HStack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { getCatData } from "../Redux/action";
import { getMainStData } from "../Redux/action";
// import BlogPostWithImage from './ImgText'
import { Link as RoutLink } from "react-router-dom";
export const MainStories = () => {
  // const [data, setData] = useState([]);
  const data = useSelector((state) => state.mData.mData);
  console.log(data, "data");
  const [id, setId] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMainStData());
  }, [dispatch]);

  return (
    <>
      <Flex p="1%" gap="3%" overflow={"hidden"}>
        <Flex w="55%" flexDirection={"column"}>
          {data?.map((e) => (
            <RoutLink to={`/id/${e._id}`}>
              <Flex
                flexDirection={"column"}
                key={e._id}
                p="2%"
                marginBottom="2%"
                boxShadow="rgba(240, 243, 245, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
              >
                <Image src={e.images} alt={e.subtitle} />
                <Text fontSize="20px" fontWeight="bold">
                  {e.title}
                </Text>
                <Text fontSize="18px">{e.subtitle}</Text>
              </Flex>
            </RoutLink>
          ))}
        </Flex>
        <Flex w="40%" flexDirection="column" alignItems="flex-start">
          {data?.map((e) => (
            <RoutLink to={`/id/${e._id}`}>
              <HStack
                key={e._id}
                borderBottom="1px solid gray"
                paddingBottom="2%"
                overflow={"hidden"}
              >
                <Image src={e.images} alt={e.subtitle} w="50%" />
                <Text fontSize={["12px", "18px"]}>{e.title}</Text>
              </HStack>
            </RoutLink>
          ))}
        </Flex>
      </Flex>
    </>
  );
};
