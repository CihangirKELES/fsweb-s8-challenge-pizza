import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const HeaderSection = styled.header`
  background-image: url('./Assets/Iteration-1-assets/home-banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw; 
  height: 100vh; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.div`
  
  h1 {
  font-family: "Londrina Solid", sans-serif;
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  color:white; 
  }

  h2 {
  font-family: "Satisfy", cursive;
  font-weight: 400;
  text-align: center;
  margin: 55px 0 0;
  font-size: 35px;
  color: #FDC913; 
  }

  p {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 3rem;
  text-align: center;
  color: white;
  line-height:100px; 
  }`;

const NavSection = styled.nav`
  background-color: white;
  position:relative;
  top: 20px;
  
  ul {
  display: flex; 
  justify-content: center; 
  list-style: none; 
  padding: 0; 
  margin: 0; 
  }

  li {
  margin: 0 55px; 
  }

  a {
  color: black;
  font-size: 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
    

  img {
  margin-right: 8px;
  width: 35px; 
  height: auto; 
  }}`;

/* BÖLÜM 2 */

const SpecialSection = styled.section`
  background-color: #FAF7F2;
  color: black;
  width: 1920px;
  height: 1080px;
`;

const SpecialItem = styled.div`
  background-image: url("./Assets/Iteration-2-aseets/cta/kart-1.png");
  text-align: center;
  background-size: contain; 
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
  width: 531px;
  height: 448.75px;
  position: relative;
  left: 420px;
  top: 16.5px;
`;

const SpecialTitle = styled.h2`
  font-family: "Quattrocento", serif;
  font-weight: 600;
  font-style: normal;
  font-size: 55px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column; 
  text-align: left; 
  position: relative;
  left: 30px;
  top: 30px;
`;
/* position abs. */
const SpecialDescription = styled.p`
  font-family: "Barlow", sans-serif;
  font-weight: 100;
  font-style: normal;
  color: white;
  display: flex;
  font-size: 1rem;
  position: relative;
  left: 33px;
  bottom: 7px;
`;

const Button = styled.a`
  font-family: "Barlow", sans-serif;
  background-color: #FAF7F2;
  font-weight: bold;
  width: 138px;
  height: 48px;
  border-radius: 25px;
  padding: 1rem 1rem;
  font-size: 12px;
  color: #CE2829;
  text-decoration: none;
  position:relative;
  top: 62px;
  right: 180px;
`;

const MenuCard = styled.div`
  background-image: url("./Assets/Iteration-2-aseets/cta/kart-2.png");
  text-align: center;
  background-size: contain; 
  background-position: center;
  border-radius: 12px;
  width: 530px;
  height: 220px;
  position: relative;
  left: 960px;
  bottom: 457px;
`;

const MenuCardTitle = styled.h3`
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 26px;
  line-height: 34.27px;
  text-align: left;
  flex-direction: column;
  color: white;
  display: flex;
  position: relative;
  left: 32px;
  top: 30px;
`;

const SpecialMenu2 = styled.div`
  background-image: url("./Assets/Iteration-2-aseets/cta/kart-3.png");
  text-align: center;
  background-size: contain; 
  background-repeat: no-repeat;
  border-radius: 12px;
  width: 540px;
  height: 220px;
  position: relative;
  left: 960px;
  bottom: 474px;
  color: white;
`;

const MenuCard2Title = styled.h3`
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 26px;
  line-height: 10.27px;
  color: black;
  display: flex;
  position: relative;
  left: 30px;
  top: 50px;
`;
/* hızlı npm gibi kurye */
const SpecialColor = styled.span`
  color: red;
`;

const Spacing = styled.span`
  padding-left: 10px;
`;

/*bölüm 3 */
const StyledDiv = styled.div`
  position:relative;
  bottom: 525px;
  text-align: center;
  
  h1 {
  color: red;
  position: relative;
  top: 50px;
  font-size: 30px;
  }
  h2 {
  color: black;
  font-size: 55px;
  }
`;
const StyledNavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  position:relative;
  bottom:555px;

  li {
  margin: 0 10px;
  }

  a {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 30px; 
  background-color: white; 
  color: black; 
  text-decoration: none;
  font-weight: bold;

  &:hover {
  background-color: white;
  }

  &.black {
  background-color: black;
  color: white;
  }

  img {
  margin-right: 10px; 
  }}`;

const MenuItems = styled.div`
  position:relative;
  bottom:575px;
  left: 525px;
  display: flex;
  justify-content: flex-start; 
  flex-wrap: wrap;
`;

const MenuItem = styled.div`
  background-color: white;
  margin: 35px 10px;
  border-radius: 10px;
  width: 275px;
   
  img {
  width: 100%;
  height: auto;
  border-radius: 10px; 
  }

  h3 {
  margin: 7px 5px;
  font-size: 18px;
  font-weight: bold;
  }`;

const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span {
  font-size: 16px;
  margin-left: 10px;
  }

  number {
  position:relative;
  right: 120px;
  color: gray;
  }`;


const Price = styled.div`
  text-align: right;
  font-size: 20px;
  font-weight: bold;
  position:relative;
  bottom: 20px;
  margin-right: 10px;
`;

/* bölüm 4*/   
const FooterSection = styled.footer`
  background-color: #292929;
  color: white;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;


  h3 {
  font-weight: bold;
  }

  .footer-info {
  position:relative;
  left: 300px; 
  }


  .footer-menu {
  position:relative;
  left: 500px; 
  }

  .footer-instagram {
  position:relative;
  left: 777px; 
  }

  ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  }

  li {
  margin: 8px 0;
  display: flex;
  align-items: center;
  }

  a {
  color: #b3b3b3;
  text-decoration: none;
  display: flex;
  align-items: center;
  }

  img {
  margin-right: 10px;
  }

  p {
  color: gray;
  margin-top: 380px;
  width: 100%;
  }

  .footer-instagram ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  }

  .footer-instagram ul li {
  width: calc(33.33% - 10px);
  }
`;




const Anasayfa = () => {

  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/siparis-pizza'); 
  };
  
    return (
        <>
<HeaderSection>
  <Banner>
    <h1>TEKNOLOJİK YEMEKLER</h1>
    <h2>fırsatı kaçırma</h2>
    <p>KOD ACIKTIRIR PIZZA, DOYURUR</p>
    <button onClick={handleClick} 
    style={{ 
    backgroundColor: "#ffd400",
    padding: "1rem 4.5rem",
    fontSize: "1rem",
    color: "#333", 
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "50px",
    position: "relative",
    left: "275px", 
    top: "40px",
    border: "none",
    cursor: "pointer",}}>ACIKTIM</button>
  </Banner>
</HeaderSection>

<NavSection>
  <ul className="nav-items">
    <li><a href="/"><img src="./Assets/Iteration-2-aseets/icons/1.svg"></img>YENİ! Kore</a></li>
    <li><a href="/"><img src="./Assets/Iteration-2-aseets/icons/2.svg"></img>Pizza</a></li>
    <li><a href="/"><img src="./Assets/Iteration-2-aseets/icons/3.svg"></img>Burger</a></li>
    <li><a href="/"><img src="./Assets/Iteration-2-aseets/icons/4.svg"></img>Kızartmalar</a></li>
    <li><a href="/"><img src="./Assets/Iteration-2-aseets/icons/5.svg"></img>Fast Food</a></li>
    <li><a href="/"><img src="./Assets/Iteration-2-aseets/icons/6.svg"></img>Gazlı İçecek</a></li>
  </ul>
</NavSection>

<SpecialSection>
  <SpecialItem>
    <SpecialTitle><span>Özel</span> <span>Lezzetus</span></SpecialTitle>
        <SpecialDescription>Position: Absolute Acı Burger</SpecialDescription>
          <Button href="#" className="iki-button">SİPARİŞ VER</Button>
  </SpecialItem>

            <div className="special-menu">  
              <MenuCard>
                 <MenuCardTitle>Hackathon <br /> Burger Menü</MenuCardTitle>
                 <Button href="#" className="uc-button">SİPARİŞ VER</Button>
              </MenuCard>
            </div>

  <SpecialMenu2> 
                 <MenuCard2Title><SpecialColor>Çoooook</SpecialColor> <Spacing>hızlı</Spacing></MenuCard2Title>
                 <MenuCard2Title>npm gibi kurye</MenuCard2Title>
                 <Button href="#" className="drt-button">SİPARİŞ VER</Button>
  </SpecialMenu2> 


<StyledDiv>
  <h1>en çok paketlenen menuler</h1>
  <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
</StyledDiv>
          

<StyledNavList>
  <li><a href="/"><img src="./Assets/Iteration-2-aseets/icons/1.svg" alt="Yeni Kore" />Ramen</a></li>
  <li><a href="/"className="black"><img src="./Assets/Iteration-2-aseets/icons/2.svg" alt="Pizza" />Pizza</a></li>
  <li><a href="/"><img src="./Assets/Iteration-2-aseets/icons/3.svg" alt="Burger" />Burger</a></li>
  <li><a href="/"><img src="./Assets/Iteration-2-aseets/icons/4.svg" alt="Kızartmalar" />French fries</a></li>
  <li><a href="/"><img src="./Assets/Iteration-2-aseets/icons/5.svg" alt="Fast Food" />Fast food</a></li>
  <li><a href="/"><img src="./Assets/Iteration-2-aseets/icons/6.svg" alt="Gazlı İçecek" />Soft drinks</a></li>
</StyledNavList>

<MenuItems>
        <MenuItem>
            <img src="./Assets/Iteration-2-aseets/pictures/food-1.png" alt="Terminal Pizza" />
            <h3>Terminal Pizza</h3>
            <Rating>
                <span>4.9</span> <number>(200)</number>
            </Rating>
            <Price>60₺</Price>
        </MenuItem>

        <MenuItem>
            <img src="./Assets/Iteration-2-aseets/pictures/food-2.png" alt="Position Absolute Acı Pizza" />
            <h3>Position Absolute Acı Pizza</h3>
            <Rating>
            <span>4.9</span> <number>(928)</number>
            </Rating>
            <Price>85₺</Price>
        </MenuItem>

        <MenuItem>
            <img src="./Assets/Iteration-2-aseets/pictures/food-3.png" alt="useEffect Tavuklu Burger" />
            <h3>useEffect Tavuklu Burger</h3>
            <Rating>
            <span>4.9</span> <number>(462)</number>
            </Rating>
            <Price>75₺</Price>
        </MenuItem>
    </MenuItems>
</SpecialSection>
       


<FooterSection className="footer-section">
  <div className="footer-info">
    <h3>Teknolojik <br></br> Yemekler</h3>
      <ul>
        <li><a href="#"><img src="./Assets/Iteration-2-aseets/footer/icons/icon-1.png" alt="Adres" />341 Londonderry Road, Istanbul Türkiye</a></li>
        <li><a href="#"><img src="./Assets/Iteration-2-aseets/footer/icons/icon-2.png" alt="Mail" />aciktim@teknolojikyemekler.com</a></li>
        <li><a href="#"><img src="./Assets/Iteration-2-aseets/footer/icons/icon-3.png" alt="İletişim" />+90 216 123 45 67</a></li>
      </ul>      
  </div>

<div className="footer-menu">
  <h3>Sıccacık Menuler</h3>
    <ul>
      <li><a href="#">Terminal Pizza</a></li>
      <li><a href="#">5 Kişilik Hackathon Burger Menü</a></li>
      <li><a href="#">useEffect Tavuklu Pizza</a></li>
      <li><a href="#">Beyaz Console Frosty</a></li>
      <li><a href="#">Testler Geçti Mutlu Burger</a></li>
      <li><a href="#">Position Absolute Acı Burger</a></li>
    </ul>
</div>

<div className="footer-instagram">
  <h3>Instagram</h3>
    <ul>
      <li><img src="./Assets/Iteration-2-aseets/footer/insta/li-0.png" alt="Yemek" /></li>
      <li><img src="./Assets/Iteration-2-aseets/footer/insta/li-1.png" alt="Yemek" /></li>
      <li><img src="./Assets/Iteration-2-aseets/footer/insta/li-2.png" alt="Yemek" /></li>
      <li><img src="./Assets/Iteration-2-aseets/footer/insta/li-3.png" alt="Yemek" /></li>
      <li><img src="./Assets/Iteration-2-aseets/footer/insta/li-4.png" alt="Yemek" /></li>
      <li><img src="./Assets/Iteration-2-aseets/footer/insta/li-5.png" alt="Yemek" /></li>
    </ul>
</div>
    <p>©2023 Teknolojik Yemekler.</p>  
</FooterSection>
        </>
    );
};

export default Anasayfa;
