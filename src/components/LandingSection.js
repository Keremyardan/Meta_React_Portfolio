import React from "react";
import {Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import keremPic from '../images/kerem_pic.jpg';

const greeting = "Hello, I am Kerem!";
const bio1 = "I am a front-end developer";
const bio2 = "I love creating things with React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <VStack spacing={4}>
      <img src={keremPic} alt="Kerem's Picture"  style={{ width: '200px', height: '200px', borderRadius: '10px' }}/>
        <Heading size="md">{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
