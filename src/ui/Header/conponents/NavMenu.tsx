/** @format */

import { Menu } from '@mui/icons-material';
import { Box, Button, Divider, Drawer, IconButton } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from '../../../utils/routes';

type NavMenuT = {
  pages: string[];
};

const NavMenu: React.FC<NavMenuT> = ({ pages }) => {
  const [openNavMenu, setOpenNavMenu] = useState<boolean>(false);

  const handleOpenNavMenu = () => {
    setOpenNavMenu(true);
  };

  const handleCloseNavMenu = () => {
    setOpenNavMenu(false);
  };
  return (
    <>
      <Box sx={{ order: -1 }}>
        <IconButton
          size="large"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <Menu />
        </IconButton>
      </Box>
      <Drawer PaperProps={{variant:'outlined', sx:{background:'gray'}, elevation:0}} anchor="left" open={openNavMenu} onClose={handleCloseNavMenu}>
        {pages.map((page) => {
          return (
            <Box key={page} >
              <Link to={`${AppRoutes.get(page)}`}>
                <Button
                  variant="text"
                  onClick={handleCloseNavMenu}
                  sx={{ ml: 2 }}
                  color={'secondary'}
                >
                  {`${page}`}
                </Button>
              </Link>
              <Divider />
            </Box>
          );
        })}
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'end',
          ml: 1,
        }}
      >
        {pages.map((page) => {
          return (
            <Link key={page} to={`${AppRoutes.get(page)}`}>
              <Button variant="text" sx={{ ml: 2 }} color={'secondary'}>
                {`${page}`}
              </Button>
            </Link>
          );
        })}
      </Box>
    </>
  );
};

export default NavMenu;
