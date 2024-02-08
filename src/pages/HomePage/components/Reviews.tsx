/** @format */

import { AccountCircleRounded } from '@mui/icons-material';
import { Box, Container, Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

type ReviewProp = {
  name: string;
  review: string;
  color: string;
};

type ReviewsProp = {
  title: string;
  reviews: ReviewProp[];
};

const Review: React.FC<ReviewProp> = ({ color, name, review }) => {
  return (
    <Paper
      sx={{
        m: 2,
        p: 1,
        height: { lg: '270px', md: '270px', sm: '200px', xs: '270px' },
        display: 'flex',
        flexDirection: {
          lg: 'column-reverse',
          md: 'column-reverse',
          sm: 'row',
          xs: 'column-reverse',
        },
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box display="flex" alignItems="center" mr={2}>
        <AccountCircleRounded sx={{ fontSize: '4em', color: `${color}` }} />
        <Typography
          variant="body1"
          fontWeight={600}
          sx={{ textWrap: 'nowrap' }}
        >
          {name}
        </Typography>
      </Box>

      <Typography
        fontStyle="italic"
        variant="subtitle1"
        textAlign="center"
        sx={{ textWrap: 'pretty', flex: '1 1 auto' }}
      >
        {review}
      </Typography>
    </Paper>
  );
};

const Reviews: React.FC<ReviewsProp> = ({ reviews, title }) => {
  return (
    <Container>
      <Typography component="h2" variant="h3" textAlign="center" my={1}>
        {title}
      </Typography>
      <Carousel
        sx={{
          mx: 'auto',
          display: { lg: 'none', md: 'none', sm: 'none', xs: 'block' },
        }}
        duration={1000}
        cycleNavigation
      >
        {reviews.map((review) => {
          return <Review {...review} key={review.name}/>;
        })}
      </Carousel>
      <Box
        display={{ lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' }}
        justifyContent="space-between"
        flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}
      >
        {reviews.map((review) => {
          return (
            <Box
              key={review.name}
              mx="auto"
              width={{ lg: '33%', md: '33%', sm: '80%', xs: '33%' }}
            >
              <Review {...review} />
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default Reviews;
