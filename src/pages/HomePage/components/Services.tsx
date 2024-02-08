/** @format */
import {
  HistoryEduOutlined,
  LocalShippingOutlined,
  HandymanOutlined,
  SupportAgentOutlined,
  VerifiedUserOutlined,
} from '@mui/icons-material';
import { Box, Container, Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const servceIcons = new Map([
  ['experience', <HistoryEduOutlined fontSize="inherit" />],
  ['delivery', <LocalShippingOutlined fontSize="inherit" />],
  ['installation', <HandymanOutlined fontSize="inherit" />],
  ['support', <SupportAgentOutlined fontSize="inherit" />],
  ['warranty', <VerifiedUserOutlined fontSize="inherit" />],
]);
type serviceT = {
  name: string;
  title: string;
};
type ServicesT = {
  services: serviceT[];
};

const Services: React.FC<ServicesT> = ({ services }) => {
  return (
    <Container component="section">
      <Box
        marginTop={2}
        justifyContent="space-around"
        sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
      >
        {services.map((service) => {
          return (
            <Paper
              key={service.name}
              sx={{
                py: '.5em',
                width: '19%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: '4em',
              }}
            >
              {servceIcons.get(service.name)}
              <Typography
                variant="subtitle1"
                fontSize="large"
                textAlign="center"
                marginTop=".5em"
              >
                {service.title}
              </Typography>
            </Paper>
          );
        })}
      </Box>

      <Carousel
        sx={{
          maxWidth: '600px',
          mx: 'auto',
          mt: 2,
          p: 1,
          display: { xs: 'none', sm: 'block', md: 'none' },
        }}
        duration={1000}
        cycleNavigation
      >
        {services.map((service, index) => {
          let prevIndex = index === 0 ? services.length - 1 : index - 1;
          let nextIndex = index === services.length - 1 ? 0 : index + 1;
          let visibleServices = [
            services[prevIndex],
            services[index],
            services[nextIndex],
          ];

          return (
            <Box
              key={service.name}
              display="flex"
              justifyContent="space-around"
            >
              {visibleServices.map((service) => {
                return (
                  <Paper
                    key={service.name}
                    sx={{
                      p: '.5em .2em',
                      width: '30%',
                      height: '200px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      fontSize: '5em',
                    }}
                  >
                    {servceIcons.get(service.name)}
                    <Typography
                      variant="subtitle1"
                      fontSize="large"
                      textAlign="center"
                      marginTop=".5em"
                      lineHeight="1.2em"
                    >
                      {service.title}
                    </Typography>
                  </Paper>
                );
              })}
            </Box>
          );
        })}
      </Carousel>
      <Carousel
        sx={{
          maxWidth: '150px',
          mx: 'auto',
          mt: 2,
          p: 1,
          display: { xs: 'block', sm: 'none', md: 'none' },
        }}
        duration={1000}
        cycleNavigation
      >
        {services.map((service) => {
          return (
            <Paper
              key={service.name}
              sx={{
                p: '.5em .2em',
                width: '100%',
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: '5em',
              }}
            >
              {servceIcons.get(service.name)}
              <Typography
                variant="subtitle1"
                fontSize="large"
                textAlign="center"
                marginTop=".5em"
                lineHeight="1.2em"
              >
                {service.title}
              </Typography>
            </Paper>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Services;
