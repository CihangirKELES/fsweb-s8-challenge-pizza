import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GlobalStyle = styled.div`
    margin: 0;
    padding: 0;


  @media (max-width: 768px) {
    body {
      font-size: 14px; /* Genel font boyutu */
    }

    h1 {
      font-size: 30px; /* Başlık boyutu küçüldü */
    }

    p {
      font-size: 3rem; /* Açıklama metni boyutu küçüldü */
      line-height: 70px; /* Satır aralığı ayarlandı */
      margin: 50px; /* Üst ve alt boşluklar */
    }

    a {
      padding: 1rem 2.5rem; /* Buton boyutu küçüldü */
    }
  }
`;


const HeaderSection = styled.header`
  background-image: url('/Assets/Iteration-1-assets/home-banner.png');
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Banner = styled.div`
  text-align: center;
  margin-bottom: 450px;
`;

const Title = styled.h1`
  font-family: "Roboto Condensed", sans-serif;  
  font-size: 50px;
  font-weight: 400;
  text-align: center; 
  color: white;
  margin-bottom: 75px;
  
  
`;



const Description = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 250;
  font-size: 6rem;
  line-height: 100px; /* Ara boşluklar kapatıldı */
  color: white;
  margin: 75px; /* Üst ve alt boşluklar */
`;

const Button = styled.a`
  font-family: "Barlow", sans-serif;
  font-weight: bold;
  background-color: #ffd400;
  padding: 1rem 4.5rem;
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #cecece; /* Hover rengi */
  }
`;

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/order-form'); // Sipariş formuna yönlendirme
    };

    return (
        <GlobalStyle>
            <HeaderSection>
                <Banner>
                    <Title>Teknolojik Yemekler</Title>
                    <Description>KOD ACIKTIRIR<br />PIZZA, DOYURUR</Description>
                    <Button onClick={handleClick}>ACIKTIM</Button>
                </Banner>
            </HeaderSection>
        </GlobalStyle>
    );
};

export default Home;