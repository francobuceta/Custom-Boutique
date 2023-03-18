import bagItemImage from '../assets/images/bag-item.png';
import bagItemDesktopImage from '../assets/images/bag-item-desktop.png';
import cardItemImage from '../assets/images/card-item.png';
import cardItemDesktopImage from '../assets/images/card-item-desktop.png';
import listItemImage from '../assets/images/list-item.png';
import listItemDesktopImage from '../assets/images/list-item-desktop.png';

const promotionsItems = [
  {
    id: 1,
    description: 'En tu primera compra en el local te regalamos la tarjeta',
    boldText: 'CUSTOM BOUTIQUE!',
    image: {
      mobile: cardItemImage,
      tablet: cardItemDesktopImage,
    },
    imageOrder: 'order-2',
  },
  {
    id: 2,
    description: 'Cada vez que realices una compra en local, lo registramos en la tarjeta.',
    boldText: '',
    image: {
      mobile: listItemImage,
      tablet: listItemDesktopImage,
    },
    imageOrder: 'order-1',
  },
  {
    id: 3,
    description: 'Con la compra de 6 prendas',
    boldText: '¡te hacemos un regalo!',
    image: {
      mobile: bagItemImage,
      tablet: bagItemDesktopImage,
    },
    imageOrder: 'order-1',
  },
];

export default promotionsItems;
