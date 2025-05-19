import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Skeleton boxSize="32px" borderRadius={8} />
        <SkeletonText noOfLines={1} width="80px" skeletonHeight={6} />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
