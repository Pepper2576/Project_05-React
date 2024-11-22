import React from 'react';
import ProductCard from '../components/ProductCard';
import { DATA } from '../data/data';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <h1 className='tw-text-3xl tw-font-bold tw-underline tw-text-blue-500'>
        Hello world!
      </h1>
      <button type='button' class='btn btn-dark '>
        Primary
      </button>
    </div>
  );
};

export default Products;
