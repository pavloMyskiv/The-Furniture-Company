/** @format */

import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AppRoutes from '../../../utils/routes';

type BanerT = {
  title: string;
  btn_text: string;
  bg_image: string;
};

const Banner: React.FC<BanerT> = ({ title, btn_text, bg_image }) => {
  return (
    <Box
      component="section"
      sx={{        
        display: 'flex',
        alignItems: 'center',
        minHeight: '60dvh',
        maxWidth: '100%',
        background: `center  / cover no-repeat url("${bg_image}")`,
      }}
    >
      <Container>
        <Typography
          component="h2"
          variant="h3"
          sx={{ maxWidth: { sx: '100%', sm: '50%' }, textWrap: 'pretty' }}
          color={'white'}
          fontWeight={600}
        >
          {title}
        </Typography>
        <Link to={`${AppRoutes.get('products')}`}>
          <Button
            variant="outlined"
            sx={{ fontWeight: 600 }}
            color="primary"
          >
            {btn_text}
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default Banner;
