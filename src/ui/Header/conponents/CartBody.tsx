/** @format */

import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from '@mui/material';
import { CartItemType } from '../../../types/ProductType';
import CartItem from './CartItem';
import { useAppDispatch } from '../../../hooks/storeHooks';
import { clean } from '../../../store/slices/cartSlice';
import { Close, Delete } from '@mui/icons-material';

type CartBodyProps = {
  items: CartItemType[];
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartBody: React.FC<CartBodyProps> = ({
  items,
  openCart,
  setOpenCart,
}) => {
  const totalCost = items.reduce((totalValue, item) => {
    return totalValue + ((item.price * (100 - item.sale)) / 100) * item.count;
  }, 0);
  const dispatch = useAppDispatch();
  const makeOrder = () => {
    dispatch(clean());
  };
  return (
    <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
      <Box
        display="flex"
        justifyContent="space-between"
        justifyItems="center"
        width="316px"
      >
        <Typography
          component="span"
          variant="h5"
          fontStyle="italic"
          textAlign="center"
          sx={{ flex: '1 1 auto' }}
        >
          Your cart
        </Typography>
        <IconButton
          color="error"
          onClick={() => {
            setOpenCart(false);
          }}
        >
          <Close />
        </IconButton>
      </Box>
      <Divider />
      <Box
        sx={{
          '&:empty::before': {
            content: '"Cart is empty"',
            fontSize: '2em',
            color: 'grey',
          },
        }}
      >
        {items.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </Box>
      <Divider />
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Typography
          component="span"
          variant="h5"
          fontStyle="italic"
          textAlign="center"
        >
          Total: {`$${totalCost}`}
        </Typography>
        <Button variant="contained" color="success" onClick={makeOrder}>
          Buy
        </Button>
      </Box>
    </Drawer>
  );
};
export default CartBody;
