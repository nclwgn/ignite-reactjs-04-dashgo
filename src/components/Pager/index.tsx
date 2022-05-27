import { Box, Stack, Text } from "@chakra-ui/react";
import { PagerItem } from "./PagerItem";

interface PagerProps {
  totalRegisterCount: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    });
}

export function Pager({
  totalRegisterCount,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PagerProps) {
  const lastPage = Math.floor(totalRegisterCount / registersPerPage);

  const previousPages = currentPage > 1
    ? generatePagesArray(Math.max(0, currentPage - 1 - siblingsCount), currentPage - 1)
    : [];

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [];

  return (
    <Stack
      direction={['column', 'row']}
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
        {currentPage > (1 + siblingsCount) && (
          <>
            <PagerItem number={1} />
            { currentPage > (2 + siblingsCount) &&
              <Text color='gray.300' textAlign='center' width='8'>...</Text> }
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => (
          <PagerItem key={page} number={page} />
        ))}

        <PagerItem number={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => (
          <PagerItem key={page} number={page} />
        ))}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            { (currentPage + 1 + siblingsCount) < lastPage &&
              <Text color='gray.300' textAlign='center' width='8'>...</Text> }
            <PagerItem number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}