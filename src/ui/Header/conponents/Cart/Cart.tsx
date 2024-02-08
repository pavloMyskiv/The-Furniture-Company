/** @format */

import { useState } from 'react';
import CartBody from './CartBody';
import CartButton from './CartButton';
const Cart: React.FC = () => {
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <CartButton setOpenCart={setOpenCart} />
      <CartBody openCart={openCart} setOpenCart={setOpenCart} />
    </>
  );
};

export default Cart;
