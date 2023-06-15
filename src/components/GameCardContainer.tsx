import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="200px" borderRadius="10px" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
