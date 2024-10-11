import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  line-height: 300px;
  background-color: red;
  color: white; 
  text-align: center; 
  
`;

const Title = styled.h1`
  font-family: "Roboto Condensed", sans-serif;  
  font-size: 35px;
  color: white;
  margin-bottom: 200px;
  font-weight: bold;
`;

const Description = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 4rem;
  line-height: 75px;
  color: white;
  font-weight: lighter;
  position:relative;
  top: -200px;
  
`;

const HomeButton = styled.a`
  font-family: "Barlow", sans-serif;
  font-weight: bold;
  background-color: #ffd400;
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  border-radius: 20px;
  cursor: pointer; 
  position:relative;
  bottom: 170px;
  
  

  &:hover {
    background-color: #cecece; 
  }
`;


const OrderConfirmation = () => {
    const navigate = useNavigate();

    const handleAnasayfa = () => {
        navigate('/Anasayfa'); 
    };


    return (
        <ConfirmationContainer>
            <Title>TEKNOLOJİK YEMEKLER</Title>
            <Description>TEBRİKLER!<br />SİPARİŞİNİZ ALINDI!</Description>
            <HomeButton onClick={handleAnasayfa}>
                Doymaya kaldığın yerden devam et!</HomeButton>
        </ConfirmationContainer>
    );
};

export default OrderConfirmation;