import React from "react";
import { FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

function Login() {
  return (
    <>
      <VStack spacing={"5px"}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Enter Your Name"></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel> Email </FormLabel>
          <Input type="email" placeholder="Enter Your Email"></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel> Password</FormLabel>
          <Input type="password" placeholder="Enter Your Password"></Input>
        </FormControl>
      </VStack>
    </>
  );
}

export default Login;
