import React from 'react';
import '../styles/ServiceStyle.css';
import Card from './Card';
import Data from './Data';

const Services = () => {
  return (
    <>
      {Data.map((values) => {
        return (
          <Card
            title1={values.servTitle}
            imgSource={values.imgsrc}
            desc1={values.desc}
            btnservice={values.btnservice}
          />
        );
      })}
    </>
  );
};

export default Services;
