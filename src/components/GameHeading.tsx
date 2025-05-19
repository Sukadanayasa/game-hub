import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${[gameQuery.platform?.name, gameQuery.genre?.name]
    .filter(Boolean)
    .join(" ")} Games`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
