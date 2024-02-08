/** @format */

import Banner from './components/Banner';
import StaticData from './utils/StaticData';
import CardsCollection from './components/CardsCollection';
import Services from './components/Services';
import DiscountedProducts from './components/DiscontedProducts';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';

const HomePage: React.FC = () => {
  return (
    <>
      <Banner {...StaticData.banner} />
      <CardsCollection {...StaticData.collectionCards} />
      <Services services={StaticData.services} />
      <DiscountedProducts {...StaticData.discontedProducts} />
      <Reviews
        reviews={StaticData.reviews.reviews}
        title={StaticData.reviews.title}
      />
      <Contacts {...StaticData.contacts}/>
    </>
  );
};

export default HomePage;
