/** @format */

import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import Cart from './conponents/Cart';
import NavMenu from './conponents/NavMenu';

const pages = ['home', 'products', 'about'];

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" sx={{ margin: 0 }}>
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            component="span"
            fontStyle="italic"
            fontWeight={500}
            sx={{
              flex: { xs: '1 1 auto', md: '' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            The Furniture company
          </Typography>
          <NavMenu pages={pages} />
          <Cart />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
