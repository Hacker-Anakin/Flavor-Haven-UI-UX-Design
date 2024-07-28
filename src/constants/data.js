import images from './images';

const drinks = [
  {
    title: 'Chai',
    price: '₹30',
    tags: 'Cutting | No Sugar',
  },
  {
    title: 'Lassi',
    price: '₹40 | ₹80',
    tags: 'Small | Large',
  },
  {
    title: 'Nimbu Pani',
    price: '₹25 | ₹50',
    tags: 'Small | Large',
  },
  {
    title: 'Aam Panna',
    price: '₹40 | ₹60',
    tags: 'Small | Large',
  },
  {
    title: 'Chaas',
    price: '₹35 | ₹70',
    tags: 'Small | Large',
  },
];

const snacks = [
  {
    title: 'Samosas',
    price: '₹50',
    tags: '2 Pieces',
  },
  {
    title: "Vada Pav",
    price: '₹70',
    tags: 'Special Mumbai ka Vada Pav',
  },
  {
    title: 'Masala Dosa',
    price: '₹110',
    tags: 'Breakfast | Lunch | Dinner',
  },
  {
    title: 'Kachori',
    price: '₹50',
    tags: '2 Pieces',
  },
  {
    title: 'Paneer Tikka',
    price: '₹120',
    tags: '4 Pieces Paneer and Vegetables',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Spice Master',
    subtitle: 'Mastery and innovative use of spices.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Blending traditional recipes with modern twists.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Best Coustomer Services.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Promoting and preserving the rich cultural heritage of Indian Food.',
  },
];

export default { drinks, snacks, awards };
