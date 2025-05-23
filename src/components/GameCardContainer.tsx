import { Box, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      borderRadius={10}
      boxShadow="lg"
      bg={colorMode === "dark" ? "#202020" : undefined}
    >
      <Box borderRadius={10} overflow="hidden">
        {children}
      </Box>
    </Box>
  );
};

export default GameCardContainer;
