import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Crissy',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Sally Sue',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Free People Dress',
      slug: 'FP-dress',
      category: 'Dresses',
      image: '/images/p1.jpg', // 679px × 829px
      price: 95,
      countInStock: 10,
      brand: 'Free People',
      rating: 4.5,
      numReviews: 10,
      description: 'Sun Dress with sheer back, perfect for summer days.',
    },
    {
      // _id: '2',
      name: 'Free People Shirt',
      slug: 'FP-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 55,
      countInStock: 0,
      brand: 'Free People',
      rating: 4.0,
      numReviews: 10,
      description:
        'Stylish and soft, this Free People shirt is a perfect match for your favorite jeans.',
    },
    {
      // _id: '3',
      name: 'Free People Skirt',
      slug: 'FP-skirt',
      category: 'Skirt',
      image: '/images/p3.jpg',
      price: 75,
      countInStock: 15,
      brand: 'Free People',
      rating: 4.5,
      numReviews: 14,
      description: 'A-line skirt with a high waist and a button down front.',
    },
  ],
};
export default data;
