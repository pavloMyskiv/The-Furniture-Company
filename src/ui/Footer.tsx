/** @format */

import { Box, Container, Typography } from '@mui/material';

const footerText = {
    copyright:'Copyright © 2024 Furniture Store',
    powered:'Powered by Furniture Store'
}

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
          {footerText.copyright}
        </Typography>
        <Typography variant="body2" component="p">
          {footerText.powered}
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
