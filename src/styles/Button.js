import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: rgb(158, 73, 66);
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  border: none;
  border-radius: 10px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
    background-color: #fff;
    color: rgb(158, 73, 66);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;
