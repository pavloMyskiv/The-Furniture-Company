/** @format */

import { Drawer } from '@mui/material';

interface CartBodyProps {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartBody: React.FC<CartBodyProps> = ({ openCart, setOpenCart }) => {
  return (
    <Drawer
      anchor="right"
      open={openCart}
      onClose={() => setOpenCart(false)}
      sx={{ width: '100px' }}
    ></Drawer>
  );
};
export default CartBody;
