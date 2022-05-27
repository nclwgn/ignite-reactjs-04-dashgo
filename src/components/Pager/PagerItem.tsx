import { Button } from "@chakra-ui/react";

interface PagerItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export function PagerItem({
  isCurrent = false,
  number,
  onPageChange
}: PagerItemProps) {
  if (isCurrent) {
    return (
      <Button
        size='sm'
        fontSize='xs'
        width='4'
        colorScheme='pink'
        disabled
        _disabled={{
          bg: 'pink:500',
          cursor: 'default'
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size='sm'
      fontSize='xs'
      width='4'
      bg='gray.700'
      _hover={{
        bg: 'gray.500'
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
}