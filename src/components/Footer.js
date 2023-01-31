import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper>
      <section className='contact-short'>
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to get started ?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <NavLink to='/contact'>
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>
      <footer>
        <div className='container grid grid-four-column'>
          <div className='footer-about'>
            <h3>E Commerce</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipiscing elit.</p>
          </div>
          <div className='footer-subscribe'>
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" placeholder='your e-mail'/>
              <input type="submit" value="subscribe" />
            </form>
          </div>
          <div className='footer-social'>
            <h3>follow us</h3>
            <div className='footer-social--icons'>
              <div>
                <a href="https://www.discord.com" target="_blank" rel="noreferrer">
                  <FaDiscord className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>
          <div className='footer-contact'>
            <h3>Call Us</h3>
            {/* <a href="tel:9876543210">+91 9876543210</a> */}
            <h3>+91 9876543210</h3>
          </div>
        </div>
        <div className='footer-bottom--section'>
          <hr />
          <div className='container grid grid-two-column'>
            <p>@{new Date().getFullYear()} EStore. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-subscribe{
      input{
        border: none;
        border-radius: 5px;
        text-transform: capitalize;
      }

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        background-color: rgb(158, 73, 66);
        border-radius: 10px;
        border: none;
        text-transform: uppercase;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          color: rgb(158, 73, 66);
          transform: scale(0.96);
        }
      }
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        transition: all 0.3s ease;
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
          &:hover{
            color: rgb(158, 73, 66);
          }
        }
        &:hover{
          background-color: #fff;
          border: 2px solid #fff;
          transform: scale(0.96);
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;