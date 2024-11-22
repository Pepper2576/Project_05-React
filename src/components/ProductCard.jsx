import React from 'react';

const ProductCard = (props) => {
  return (
    <div key={props.id}>
      <img src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <h3>{props.author}</h3>
    </div>
  );
};

export default ProductCard;
