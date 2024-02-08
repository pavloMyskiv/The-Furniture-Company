/** @format */

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import AppRoutes from '../../../utils/routes';

type CardCollectionT = {
  name: string;
  title: string;
  image: string;
  btn_text: string;
};

type CardsCollectionT = {
  bg_image: string;
  cards: CardCollectionT[];
};

const CardsCollection: React.FC<CardsCollectionT> = ({ bg_image, cards }) => {
  return (
    <Container component="section">
      <Box>
        {cards.map((card) => {
          return (
            <Card
              key={card.name}
              sx={{
                mt: 2,
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'row',
                },
                gap: 1,
                '&:nth-of-type(odd)': {
                  flexDirection: {
                    xs: 'column',
                    sm: 'row-reverse',
                  },
                },
              }}
            >
              <CardContent
                sx={{
                  background: `center  / cover no-repeat url("${bg_image}")`,
                  flex: '1 1 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: { xs: '100%', sm: '50%' },
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  <Typography component="h2" variant="h4">
                    {card.title}
                  </Typography>
                  <Link to={`${AppRoutes.get('products')}`}>
                    <Button variant="outlined" size="small">
                      {card.btn_text}
                    </Button>
                  </Link>
                </Box>
              </CardContent>
              <CardMedia
                component="img"
                image={card.image}
                alt={card.name}
                sx={{
                  maxWidth: { xs: '100%', sm: '39.1%' },
                  height: { xs: '', sm: '200px', md: '250px', lg: '300px' },
                }}
              />
            </Card>
          );
        })}
      </Box>
    </Container>
  );
};

export default CardsCollection;
