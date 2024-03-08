/** @format */

import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import { ProductType } from '../types/ProductType';
import { DocumentData } from 'firebase/firestore';
import { useAppDispatch } from '../hooks/storeHooks';
import { addItem } from '../store/slices/cartSlice';

type ProductCardProp = {
  product: ProductType | DocumentData;
};

const ProductCard: React.FC<ProductCardProp> = ({ product }) => {
  const dispatch = useAppDispatch()
  const addProduct = ()=>{
    dispatch(addItem({...product}))
  }
  return (
    <Container  sx={{maxWidth:{xs:'300px', sm:'400px'}, my:1}}>
      <Badge badgeContent={`-${product.sale}%`} color="error">
        <Card
          sx={{
            width: {lg:'250px', md:'350px', sm:'400px', xs:'250px'},
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            sx={{
              height: '200px',
              '&:hover': { transform: 'scale(1.2)' },
              transition: 'all .5s',
            }}
          ></CardMedia>
          <CardContent
            sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}
          >
            <Typography
              component="p"
              variant="body2"
              textAlign="center"
              fontStyle='italic'
            >
              {product.category}
            </Typography>
            <Typography component="h4" variant="h6" textAlign="center">
              {product.name}
            </Typography>
            <Typography component="p" variant="body1">
              <Typography component="span" fontWeight="bold">
                Price:{' '}
              </Typography>
              {product.sale !== 0 && (
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ textDecoration: 'line-through red'}}
                >
                  ${product.price}{' '}
                </Typography>
              )}
              {`$${(product.price * (100 - product.sale)) / 100}`}
            </Typography>
            <Typography component="p" variant="body1">
              <Typography component="span" fontWeight="bold">
                Stock:{' '}
              </Typography>
              {product.stock}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={addProduct} variant="contained" color="success">
              Add to cart
            </Button>
          </CardActions>
        </Card>
      </Badge>
    </Container>
  );
};

export default ProductCard;
