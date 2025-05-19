import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput, { Props } from "./SearchInput";

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={(keyword) => onSearch(keyword)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
