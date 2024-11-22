import React from 'react';
import ProductCard from '../components/ProductCard';
import { DATA } from '../data/data';

const Products = () => {
  return (
    <div>
      {DATA.map((item) => {
        return (
          <ProductCard
            id={item.id}
            img={item.img}
            title={item.title}
            author={item.author}
          />
        );
      })}
    </div>
  );
};

export default Products;
