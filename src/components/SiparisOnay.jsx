

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 50px 20px;
  text-align: center;
  background-color: #d91d1d;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  position: absolute;
  top: 50px;
`;

const Tagline = styled.h2`
  font-size: 1.5rem;
  color: #ffc107;
  margin: 10px 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 20px 0;
`;

const Summary = styled.div`
  margin-top: 30px;
  padding: 30px 40px;
  border: 2px solid white;
  border-radius: 10px;
  max-width: 400px;
  width: 90%;
  text-align: left;
`;

const SummaryItem = styled.p`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 15px;
`;

const Total = styled.p`
  font-size: 1.6rem;
  color: #ffc107;
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 12px 25px;
  background-color: white;
  color: #d32f2f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 15px;
  position: relative;
  left: 100px;

  &:hover {
  background-color: #f0a500;
  }
`;

const SiparisOnayi = () => {
  const location = useLocation();
  const { order } = location.state || {}; 

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); 
  };

  if (!order) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <Container>
      <Logo>Teknolojik Yemekler</Logo>
      <Tagline>lezzetin yolda</Tagline>
      <Title>SİPARİŞ ALINDI</Title>


      <Summary>
        <SummaryItem>Pizza Boyutu: {order.pizza.size}</SummaryItem>
        <SummaryItem>Hamur: {order.pizza.dough}</SummaryItem>
        <SummaryItem>Malzemeler: {order.pizza.ingredients.join(', ')}</SummaryItem>
        <SummaryItem>Miktar: {order.pizza.quantity}</SummaryItem>
        <SummaryItem>Sipariş Notu: {order.pizza.note}</SummaryItem>
        <SummaryItem>Sipariş Toplamı: {order.pizza.totalPrice}</SummaryItem>
        <Total>Toplam: {order.pizza.totalPrice}₺</Total>
        <Button onClick={handleHomeClick}>Anasayfaya Dön</Button>
      </Summary>


    </Container>
  );
};

export default SiparisOnayi;

      
     