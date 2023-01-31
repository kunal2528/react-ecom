import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from '../helpers/FormatPrice';
import {Button} from '../styles/Button';

const ListView = ({products}) => {

  return (
    <Wrapper className="section">
      <div className="container grid">
        {
          products.map((curElem) => {
            const {id, name, image, price, description} = curElem;
            return (
              <div className="card grid grid-two-column">
                <figure>
                  <img src={image} alt={name} />
                </figure>
                <div className="card-data">
                  <h3>{name}</h3>
                  <p className='card-data--price'>
                    <FormatPrice price={price} />
                  </p>
                  <p>{description.slice(0, 90)}...</p>
                  <NavLink to={`/singleproduct/${id}`}>
                    <Button className='btn'>
                      Read More
                    </Button>
                  </NavLink>
                </div>
              </div>
            )
          })
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 6rem 0;
  .container {
    max-width: 100rem;
  }
  .grid {
    gap: 3.2rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.0rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  .card {
    border-bottom: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0.8rem 2rem;
    }
    .card-data--price {
      font-weight: 200;
      margin-bottom: 5px;
      font-family: 'Times New Roman', Times, serif;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
      font-family: sans-serif;
    }
    p{
      font-family: sans-serif;
    }
    .btn {
      margin: 1rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(158, 73, 66);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(158, 73, 66);
      &:hover {
        background-color: rgb(158, 73, 66);
        color: #fff
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(158, 73, 66);
        font-size: 1.4rem;
      }
    }
    .btn-main .btn:hover {
      color: #fff;
    }
  }
`;

export default ListView;