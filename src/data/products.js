import pancakes from '../assets/pancakes.png';
import milk from '../assets/milk.png';
import sausage1 from '../assets/sausage_1.png';
import sausage2 from '../assets/sausage_2.png';
import sausage3 from '../assets/sausage_3.png';
import sausage4 from '../assets/sausage_4.png';

export const promotions = [
  {
    id: 1,
    name: 'Г/Ц Блинчики с мясом вес.',
    img: pancakes,
    price: 44.50,
    oldPrice: 50.50,
    rating: 4,
    isPromo: 50,
  },
  {
    id: 2,
    name: 'Молоко ПРОСТОКВАШИНО паст...',
    img: milk,
    price: 44.50,
    oldPrice: 50.50,
    rating: 3,
    isPromo: 50,
  },
  {
    id: 3,
    name: 'Колбаса сыркопоченная МЯСНАЯ ИСТОРИЯ Сальчикон и Тоскан...',
    img: sausage1,
    price: 44.50,
    oldPrice: 50.50,
    rating: 5,
    isPromo: 50,
  },
  {
    id: 4,
    name: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
    img: sausage2,
    price: 44.50,
    oldPrice: 50.50,
    rating: 4,
    isPromo: 50,
  },
];

export const newProducts = [
  {
    id: 5,
    name: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
    img: sausage3,
    price: 599.99,
    rating: 3,
    isPromo: false,
  },
  {
    id: 6,
    name: 'Колбаса сыркопоченная МЯСНАЯ ИСТОРИЯ Сальчикон и Тоскан...',
    img: sausage1,
    price: 44.50,
    rating: 5,
    isPromo: true,
  },
  {
    id: 7,
    name: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
    img: sausage2,
    price: 159.99,
    rating: 2,
    isPromo: false,
  },
  {
    id: 8,
    name: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
    img: milk,
    price: 49.39,
    rating: 4,
    isPromo: false,
  },
];

export const boughtBefore = [
  {
    id: 9,
    name: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
    img: sausage4,
    price: 77.99,
    rating: 3,
  },
  {
    id: 10,
    name: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
    img: sausage2,
    price: 159.99,
    rating: 4,
  },
  {
    id: 11,
    name: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
    img: sausage3,
    price: 599.99,
    rating: 5,
  },
  {
    id: 12,
    name: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
    img: milk,
    price: 49.39,
    rating: 3,
  },
];
