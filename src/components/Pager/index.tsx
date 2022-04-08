import { Box, Stack } from "@chakra-ui/react";
import { PagerItem } from "./PagerItem";

export function Pager() {
  return (
    <Stack
      direction='row'
      mt='8'
      justify='space-between'
      align='center'
      spacing='6'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack
        direction='row'
        spacing='2'
      >
        <PagerItem number={1} isCurrent />
        <PagerItem number={2} />
        <PagerItem number={3} />
        <PagerItem number={4} />
        <PagerItem number={5} />
      </Stack>
    </Stack>
  );
}