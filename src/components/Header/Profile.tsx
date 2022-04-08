import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Nicholas Wagner</Text>
        <Text color='gray.300' fontSize='small'>
          nclwgn@gmail.com
        </Text>
      </Box>

      <Avatar size='md' name='Nicholas Wagner' src='https://github.com/nclwgn.png' />
    </Flex>
  );
}