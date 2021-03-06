import React, { Fragment } from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { formatPrice } from '../Utils/Utils';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';
import { pizzaRed } from '../Styles/colors';

const MenuStyled = styled.div`
  /* height: 1000px; */
  margin: 0 auto;
  width: 80%;
  padding-bottom: 80px;
`;

const FoodPrice = styled.div`
  font-size: 14px;
  color: ${pizzaRed};
  margin-top: 5px;
`;

const FoodHeader = styled.h1`
  font-size: 38px;
  margin-bottom: 5px;
`;

export function Menu({ setOpenFood }) {
  return (
    <MenuStyled>
      {/* in our map, destructure out our key (section name) and the value (food array)  */}
      {Object.entries(foods).map(([sectionName, foods], index) => (
        <Fragment key={index}>
          <FoodHeader>{sectionName}</FoodHeader>
          <FoodGrid>
            {foods.map((food, index) => (
              <Food
                key={index}
                img={food.img}
                onClick={() => {
                  setOpenFood(food);
                }}
              >
                <FoodLabel>
                  <div>{food.name}</div>
                  <FoodPrice>{formatPrice(food.price)}</FoodPrice>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </Fragment>
      ))}
    </MenuStyled>
  );
}
