import { useState } from 'react';
import CartSVG from './CartSVG';

const ProductDescription = () => {
  const [addToCartNum, setAddToCartNum] = useState<number>(0);

  const handleClickMinus = () => {
    if (addToCartNum > 0) setAddToCartNum(prev => prev - 1)
  }

  const handleClickPlus = () => {
    setAddToCartNum(prev => prev + 1)
  }

  return (
    <div className="productDescriptionContainer">
      <div className="productDescriptionContainerInner">
        <div className="sneakerCompany">SNEAKER COMPANY</div>
        <div className="fallLimited">Fall Limited Edition Sneakers</div>
        <div>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable outer sole, they'll withstand everything the
          weather can offer.
        </div>
        <div>$125.00</div>
        <div>$250.00</div>
        <div className="buttonContainer">
          <div className="addToCartNumContainer">
            <button className="minus" onClick={handleClickMinus}>-</button>
            <div className="addToCartNum">{addToCartNum}</div>
            <button className="plus" onClick={handleClickPlus}>+</button>
          </div>
          <div className='addToCartContainer'>
            <CartSVG />
            <button className='addToCart'>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
