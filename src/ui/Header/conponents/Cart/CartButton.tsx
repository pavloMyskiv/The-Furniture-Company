/** @format */
import { Badge, IconButton, Tooltip } from '@mui/material';

import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

interface CartButtonProps {
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartButton: React.FC<CartButtonProps> = ({ setOpenCart }) => {
  return (
    <Tooltip sx={{ ml: 2 }} title="Cart">
      <IconButton size='large' onClick={() => setOpenCart(true)}>
        <Badge badgeContent={1} color="error">
          <ShoppingCartRoundedIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
export default CartButton;
