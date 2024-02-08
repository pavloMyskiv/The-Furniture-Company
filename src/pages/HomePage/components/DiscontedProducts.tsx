/** @format */

import { Container, Grid, Typography } from '@mui/material';
import { ProductType } from '../../../types/ProductType';
import {
  DocumentData,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../../../utils/firebase';
import ProductCard from '../../../ui/ProductCard';

type DiscontedProductsProps = {
  title: string;
};

const limitProducts = 4;

const DiscountedProducts: React.FC<DiscontedProductsProps> = ({ title }) => {
  const [discountedProducts, setDiscountedProducts] = useState<
    ProductType[] | DocumentData[]
  >([]);

  const getDiscountedProducts = async () => {
    let products: DocumentData[] = [];
    const productsQuery = query(
      collection(firestore, 'products'),
      where('sale', '>', 0),
      orderBy('sale', 'desc'),
      limit(limitProducts)
    );
    const productsQuerySnap = await getDocs(productsQuery);
    productsQuerySnap.forEach((doc) => {
      const product = doc.data();
      products.push(product);
    });
    setDiscountedProducts(products);
  };
  useEffect(() => {
    getDiscountedProducts();
  }, []);

  return (
    <Container component="section">
      <Typography
        component="h2"
        variant="h3"
        color="error"
        textAlign="center"
        my={1}
      >
        {title}
      </Typography>
      <Grid container>
        {discountedProducts.map((product) => {
          return (
            <Grid item lg={3} md={6} sm={12} xs={12} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default DiscountedProducts;
