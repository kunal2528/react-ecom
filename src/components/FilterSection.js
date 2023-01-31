/* eslint-disable no-unused-vars */
import React from 'react'
import { useFilterContext } from '../context/filter_context';
import styled from 'styled-components';
import {FaCheck} from 'react-icons/fa';
import FormatPrice from '../helpers/FormatPrice';
import {Button} from '../styles/Button';

const FilterSection = () => {
  const { filters: {text, category, company, color, price, maxPrice, minPrice}, updateFilterValue, all_products, clearFilters } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    })
    
    if(property === "colors") {
      //return (newVal = ["all", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }
    
    return (newVal = ["all", ...new Set(newVal)]);
  }

  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsOnlyData = getUniqueData(all_products, "colors");

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text"
            name="text"
            value={text}
            placeholder='Search'
            onChange={updateFilterValue}
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {
            categoryOnlyData.map((curElem, index) => {
              return (
                <button
                  key={index}
                  type="buton"
                  name='category'
                  value={curElem}
                  onClick={updateFilterValue}
                >
                  {curElem}
                </button>
              )
            })
          }
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <form action='#'>
          <label htmlFor='company'></label>
          <select
            id="company"
            name='company'
            className='filter-company--select'
            onClick={updateFilterValue}
          >
            {companyOnlyData.map((curElem, index) => {
              return (<option key={index} value={curElem} name="company" className='option'>{curElem}</option>);
            })}
          </select> 
        </form>
      </div>
      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
            {
              colorsOnlyData.map((curColor, index) => {
                if(curColor === "all"){
                  return (
                    <button 
                      type="button"
                      key={index}
                      value={curColor}
                      name="color"
                      className='color-all--style'
                      onClick={updateFilterValue}
                    >
                      All
                    </button>
                  )
                }else {
                  return (
                    <button 
                      type="button"
                      key={index}
                      value={curColor}
                      name="color"
                      className={color === curColor ? 'btnStyle active': 'btnStyle'}
                      style={{backgroundColor: curColor}}
                      onClick={updateFilterValue}
                    >
                      {color === curColor ? <FaCheck className="checkStyle" /> : null}
                    </button>
                  )
                }
              })
            }
        </div>
      </div>
      <div className="filter_price">
        <h3>Price</h3>
        <p>{<FormatPrice price={price} />}</p>
        <input 
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>
      <div className="filter-clear">
        <Button onClick={clearFilters}>Clear Filters</Button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.bg};
      opacity: 0.8;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      background-color: ${({ theme }) => theme.colors.bg};
      button {
        border: none;
        font-family: Arial, Helvetica, sans-serif;
        padding: 0.2rem 2rem;
        background-color: ${({ theme }) => theme.colors.bg};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: rgb(158, 73, 66);
        }
      }
      .active {
        border-bottom: 1px solid #000;
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
    background-color: ${({ theme }) => theme.colors.bg};
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 5px;
    .option{
      font-family: Arial, Helvetica, sans-serif;
    }
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.bg};
    padding: 1rem;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: rgb(158, 73, 66);
    color: #fff;
  }
`;

export default FilterSection;