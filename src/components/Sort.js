import React from 'react';
import styled from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../context/filter_context';

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } = useFilterContext();
  return (
    <Wrapper className='sort-section'>
      <div className="sorting-list--grid"> 
        <button
          className={grid_view ? 'active sort-btn' : 'sort-btn'}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={grid_view ? 'sort-btn' : 'active sort-btn'}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-data">
        <p>{filter_products.length} products available</p>
      </div>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor='sort'></label>
          <select name='sort' id='sort' className='sort-selection--style' onClick={sorting}>
            <option value="lowest" className='sort-select--option'>Price(lowest)</option>
            <option value="highest" className='sort-select--option'>Price(highest)</option>
            <option value="a-z" className='sort-select--option'>Price(a-z)</option>
            <option value="z-a" className='sort-select--option'>Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 1px;
    padding: 0.5rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.bg};
    .sort-select--option {
      padding: 1.5rem;
      cursor: pointer;
      height: 2rem;
      font-family: Arial, Helvetica, sans-serif;
      background-color: ${({ theme }) => theme.colors.bg};
    }
  }
`;

export default Sort;