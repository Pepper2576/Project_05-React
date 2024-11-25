import React from 'react';
import ProductCard from '../components/ProductCard';
import { DATA } from '../data/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
            summery={item.summary}
            link={item.url}
            repo={item.repo}
          />
        );
      })}
    </div>
  );
};

export default Products;
