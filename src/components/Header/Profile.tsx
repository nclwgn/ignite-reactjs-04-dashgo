import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      { showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Nicholas Wagner</Text>
          <Text color='gray.300' fontSize='small'>
            nclwgn@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size='md' name='Nicholas Wagner' src='https://github.com/nclwgn.png' />
    </Flex>
  );
}