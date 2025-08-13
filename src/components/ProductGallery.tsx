import { useState } from 'react';

const ProductGallery = () => {
  type ImageCount = 1 | 2 | 3 | 4;
  const [selection, setSelection] = useState<ImageCount>(1);
  const images = [
    {
      id: 1,
      thumbnail: 'images/image-product-1-thumbnail.jpg',
      image: 'images/image-product-1.jpg',
    },
    {
      id: 2,
      thumbnail: 'images/image-product-2-thumbnail.jpg',
      image: 'images/image-product-2.jpg',
    },
    {
      id: 3,
      thumbnail: 'images/image-product-3-thumbnail.jpg',
      image: 'images/image-product-3.jpg',
    },
    {
      id: 4,
      thumbnail: 'images/image-product-4-thumbnail.jpg',
      image: 'images/image-product-4.jpg',
    },
  ];

  const selectedImage = images.filter((image) => image.id === selection)[0]
    .image;

  return (
    <div className="productGalleryContainer">
      <img className="imageMain" src={selectedImage}></img>
      <div className="thumbnailContainer">
        <div>
          <img className="thumbnail" src={images[0].thumbnail}></img>
        </div>
        <div>
          <img className="thumbnail" src={images[1].thumbnail}></img>
        </div>
        <div>
          <img className="thumbnail" src={images[2].thumbnail}></img>
        </div>
        <div>
          <img className="thumbnail" src={images[3].thumbnail}></img>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
