import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useState from 'react'

export default function Page() {
    const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => { 
    setPage(value);
  };
  return (
    <Stack spacing={2}>
        <div>{page}</div>
      <Pagination count={10} page={page} onChange={handleChange} variant="outlined" shape="rounded" />
    </Stack>
  );
}