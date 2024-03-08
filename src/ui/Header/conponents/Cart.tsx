/** @format */

import { useState } from 'react';
import CartBody from './CartBody';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Badge, IconButton, Tooltip } from '@mui/material';
import { useAppSelector } from '../../../hooks/storeHooks';
const Cart: React.FC = () => {
  const [openCart, setOpenCart] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.items);
  return (
    <>
      <Tooltip sx={{ ml: 2 }} title="Cart">
        <IconButton size="large" onClick={() => setOpenCart(true)}>
          <Badge badgeContent={cartItems.length} color="error">
            <ShoppingCartRoundedIcon color='secondary'/>
          </Badge>
        </IconButton>
      </Tooltip>
      <CartBody
        items={cartItems}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
    </>
  );
};

export default Cart;
