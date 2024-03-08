/** @format */

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { useAppDispatch } from '../../../hooks/storeHooks';
import { dicrease, increase, remove } from '../../../store/slices/cartSlice';
import { CartItemType } from '../../../types/ProductType';
import {
  AddCircleRounded,
  Delete,
  RemoveCircleRounded,
} from '@mui/icons-material';

type CardItemProps = {
  item: CartItemType;
};

const CartItem: React.FC<CardItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const increaseCount = () => {
    dispatch(increase(item.id));
  };
  const dicreaseCount = () => {
    dispatch(dicrease(item.id));
  };
  const removeItem = () => {
    dispatch(remove(item.id));
  };
  return (
    <Card sx={{ display: 'flex', width: '300px', m: 1, background:'#cab9a2'} }>
      <CardMedia
        component="img"
        image={item.image}
        alt={item.name}
        sx={{
          m: 1,
          height: '100px',
          width: '100px',
          borderRadius: 3,
        }}
      />
      <CardContent
        sx={{
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 1,
        }}
      >
        <Typography
          component="span"
          variant="body2"
          fontWeight="bold"
          sx={{ flex: '1 1 auto' }}
        >
          {item.name}
        </Typography>
        <Typography component="span" variant="body2">
          Price:{' '}
        </Typography>
        <Typography component="span" variant="body2">
          {item.sale !== 0 && (
            <Typography
              component="span"
              variant="body2"
              sx={{ textDecoration: 'line-through red', color: 'grey' }}
            >
              ${item.price}{' '}
            </Typography>
          )}
          {`$${(item.price * (100 - item.sale)) / 100}`}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 0 }}>
        <Box>
          <IconButton onClick={increaseCount}>
            <AddCircleRounded />
          </IconButton>
          <Typography textAlign="center">{item.count}</Typography>
          <IconButton onClick={dicreaseCount}>
            <RemoveCircleRounded />
          </IconButton>
        </Box>
        <IconButton onClick={removeItem} color="error">
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CartItem;
