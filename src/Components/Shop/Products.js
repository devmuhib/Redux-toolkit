import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Pizza',
    price: 6,
    description: 'This is an amazing pizza',
  },

  {
    id: 'p2',
    title: 'Pasta',
    price: 16,
    description: 'This is an amazing Pasta',
  },

  {
    id: 'p3',
    title: 'Burger',
    price: 9,
    description: 'This is an amazing Burger',
  },

  {
    id: 'p4',
    title: 'Noodles',
    price: 26,
    description: 'This is an amazing Noodles',
  },
];

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
