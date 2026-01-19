import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";

function Homepage() {
  return (
    <Container className="cont" maxW="xl" centerContent>
      <Box
        display={"flex"}
        justifyContent={"center"}
        h={"10vh"}
        bgColor={"white"}
        alignItems={"center"}
        borderRadius={"lg"}
        borderWidth={"1px"}
        width={"100%"}
        margin={"35px 0px 15px 0px"}
        padding={"0px 0px 10px 0px"}
      >
        <Text fontSize={"3rem"} fontWeight={"400"}>
          Zyra
        </Text>
      </Box>
      <Box
        backgroundColor={"white"}
        borderRadius={"lg"}
        padding={"16px"}
        width={"100%"}
      >
        <Tabs variant="enclosed" isFitted>
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Text>
                <Login></Login>
              </Text>
            </TabPanel>
            <TabPanel>
              <Text>
                <Signup></Signup>
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
