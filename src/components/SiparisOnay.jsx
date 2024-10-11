import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  padding: 50px 20px;
  text-align: center;
  background-color: #D32F2F;
  color: white;
  min-height: 100vh;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  bottom: 15px;
`;

const Tagline = styled.h2`
  font-size: 1.2rem;
  color: #FFD700;
  position: relative;
  top:80px;
`;
const HorizontalLine = styled.hr` //çizgi
  border: none;
  border-top: 1px solid white;
  width: 30%;
  margin: 20px auto;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  position: relative;
  top:70px;
`;

const OrderDetails = styled.div`
  margin-top: 110px;
`;

const OrderTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 60px;
`;

const OrderInfo = styled.p`
  font-size: 1.1rem;
  margin-top: 40px;
  text-align: left;
  padding-left: 44%;

  `;

const Summary = styled.div`
  margin-top: 30px;
  margin-left: 290px;
  padding: 25px 80px;
  border: 1px solid white;
  display: inline-block;
  text-align: left;
`;

const SummaryItem = styled.p`
  font-size: 20px;
`;

const Total = styled.p`
  font-size: 1.4rem;
  position:relative;
  bottom: 20px;
`;


const SiparisOnay = () => {

const navigate = useNavigate(); 

const handleHome = () => {
    navigate('/'); 
  };

  return (
    <Container>
      <Logo>Teknolojik Yemekler</Logo>
      <Tagline>lezzetin yolda</Tagline>
      <Title>SİPARİŞ ALINDI</Title>

      <OrderDetails>
      <HorizontalLine />
        <OrderTitle>Position Absolute Acı Pizza</OrderTitle>
        <OrderInfo>Boyut: <strong>L</strong></OrderInfo>
        <OrderInfo>Hamur: <strong>Süpper İnce</strong></OrderInfo>
        <OrderInfo>Ek Malzemeler: <strong>Pepperoni,<br></br>Sosis, Mısır, Ananas, <br></br>Jalepeno</strong></OrderInfo>
        
      </OrderDetails>

      <Summary>
        <Total>Sipariş Toplamı</Total>
        <SummaryItem>Seçimler: 25.00₺</SummaryItem>
        <SummaryItem>Toplam: 110.50₺</SummaryItem>
      </Summary>
      
      <button style={{ 
    backgroundColor: "#ffd400",
    padding: "1rem 4.5rem",
    fontSize: "1rem",
    color: "#333", 
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "50px",
    position: "relative", 
    top: "150px",
    right: "295px",
    border: "none",
    cursor: "pointer",}} 
    onClick={handleHome}>ANASAYFAYA DÖN</button>
   
</Container>
);};

export default SiparisOnay;