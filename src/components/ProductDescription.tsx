import { useState } from 'react';
import CartSVG from './CartSVG';
import MinusSVG from './MinusSVG';
import PlusSVG from './PlusSVG';

const ProductDescription = () => {
  const [addToCartNum, setAddToCartNum] = useState<number>(0);

  const handleClickMinus = () => {
    if (addToCartNum > 0) setAddToCartNum((prev) => prev - 1);
  };

  const handleClickPlus = () => {
    setAddToCartNum((prev) => prev + 1);
  };

  return (
    <div className="productDescriptionContainer">
      <div className="productDescriptionContainerInner">
        <div className="sneakerCompany">SNEAKER COMPANY</div>
        <div className="fallLimited">Fall Limited Edition Sneakers</div>
        <div className='description'>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable outer sole, they'll withstand everything the
          weather can offer.
        </div>
        <div className='price'>
          $125.00
          <div className='fiftyPercent'>50%</div>
          </div>
        <div className='priceOrig'><s>$250.00</s></div>
        <div className="buttonContainer">
          <div className="addToCartNumContainer">
            <button className="minus" onClick={handleClickMinus}>
              <MinusSVG />
            </button>
            <div className="addToCartNum">{addToCartNum}</div>
            <button className="plus" onClick={handleClickPlus}>
              <PlusSVG />
            </button>
          </div>
          <div className="addToCartContainer">
            <button className="addToCart">
              <CartSVG />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
