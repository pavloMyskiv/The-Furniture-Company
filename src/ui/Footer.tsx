/** @format */

import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Container sx={{ backgroundColor: 'grey', mt: 5, height: '7em' }}>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ sm: 'row', xs: 'column' }}
        pt={2}
      >
        <Typography variant="body2" component="p">
          Copyright © 2024 Furniture Store
        </Typography>
        <Typography variant="body2" component="p">
          Powered by Furniture Store
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
