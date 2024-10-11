import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  `;

const Title = styled.h1`
  width: 100%;
  background-color: #e63946;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  `;

const Form = styled.form`
  width: 80%;
  background-color: white;
  padding: 20px;
 
  `;

const Section = styled.div`
  margin-bottom: 20px;
  `;

const SectionTitle = styled.h2`
  
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  label {
    input {
      display: none;
    }
    input:checked + span {
      background-color: #ffd400;
    }
    span {
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: lightgray;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
`;

const DoughSelect = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #ddd;
  background-color: #f9f9f9;
  width: 100%;
  font-size: 1rem;
  color: #555;
`;

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  label {
    background-color: #f9f9f9;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      margin-right: 10px;
    }
  }
`;

const Note = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 60px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const QuantityButton = styled.button`
  padding: 10px;
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  background-color: #ffd400;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: #f0a500;
  }
`;

const OrderSummary = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin-top: 20px;
`;

const Price = styled.div`
  font-size: 2rem;
  color: #e63946;
  margin-bottom: 10px;
`;

const OrderButton = styled.button`
  background-color: #ffd400;
  padding: 15px;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  color: #333;

  &:hover {
    background-color: #f0a500;
  }
`;

const PizzaImage = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const SiparisPizza = () => {
    const navigate = useNavigate();
    const [size, setSize] = useState('');
    const [dough, setDough] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [note, setNote] = useState('');
    const [totalPrice, setTotalPrice] = useState(85.5);

const handleIngredientChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
    setIngredients([...ingredients, value]);
    } else {
    setIngredients(ingredients.filter((ingredient) => ingredient !== value));
    }
        updateTotalPrice(quantity);
    };

    const handleQuantityChange = (o) => {
        let newQuantity = quantity;
        if (o === 'increase') {
            newQuantity += 1;
        } else if (o === 'decrease' && quantity > 1) {
            newQuantity -= 1;
        }

        setQuantity(newQuantity);
        updateTotalPrice(newQuantity);
    };

    const updateTotalPrice = (newQuantity) => {
        const basePrice = 85.50; // Birim fiyat
        const ingredientPrice = 5; // Ek malzeme fiyatı
        const total = basePrice + (ingredients.length * ingredientPrice);
        setTotalPrice(total * newQuantity);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/siparis-onayi'); 
    };

    return (
        <Container>
            <Title>Teknolojik Yemekler</Title>
                <PizzaImage src="/Assets/Iteration-2-aseets/pictures/form-banner.png" alt="Pizza" />
                    <Form onSubmit={handleSubmit}>
    <Section>
        <SectionTitle>Position Absolute Acı Pizza</SectionTitle>
            <div>85.50₺ 4.9 (200)</div>
    </Section>

    <Section>
        <SectionTitle>Boyut Seç <span style={{ color: 'red' }}>*</span></SectionTitle>
<RadioGroup>
    <label>
      <input 
      type="radio"
      value="S"
      checked={size === 'S'}
      onChange={() => setSize('S')}/>
      <span>S</span>
    </label>
    <label>
      <input
      type="radio"
      value="M"
      checked={size === 'M'}
      onChange={() => setSize('M')}/>
       <span>M</span>
    </label>
    <label>
      <input
       type="radio"
       value="L"
       checked={size === 'L'}
       onChange={() => setSize('L')}/>
       <span>L</span>
    </label>
</RadioGroup>
    </Section>
                
<Section>
  <SectionTitle>Hamur Seç <span style={{ color: 'red' }}>*</span></SectionTitle>
    <DoughSelect value={dough} onChange={(e) => setDough(e.target.value)}>
      <option value="">--Hamur Kalınlığı Seç--</option>
      <option value="İnce">İnce</option>
      <option value="Kalın">Kalın</option>
      <option value="Hamur Kalınlığı">Hamur Kalınlığı</option>
    </DoughSelect>
</Section>

<Section>
  <SectionTitle>Ek Malzemeler</SectionTitle>
    <div style={{ maxWidth: '300px', margin: '0', color: 'gray' }}>En Fazla 10 malzeme seçebilirsiniz. 5₺</div>
        <CheckboxGroup>
            <label><input type="checkbox" value="Pepperoni" onChange={handleIngredientChange} /> Pepperoni</label>
            <label><input type="checkbox" value="Sosis" onChange={handleIngredientChange} /> Sosis </label>
            <label><input type="checkbox" value="Kanada Jambonu" onChange={handleIngredientChange} /> Kanada Jambonu </label>
            <label><input type="checkbox" value="Tavuk Izgara" onChange={handleIngredientChange} /> Tavuk Izgara </label>
            <label><input type="checkbox" value="Soğan" onChange={handleIngredientChange} /> Soğan </label>
            <label><input type="checkbox" value="Sarımsak" onChange={handleIngredientChange} /> Sarımsak </label>
            <label><input type="checkbox" value="Sucuk" onChange={handleIngredientChange} /> Sucuk </label>
            <label><input type="checkbox" value="Biber" onChange={handleIngredientChange} /> Biber</label>
            <label><input type="checkbox" value="Jalepeno" onChange={handleIngredientChange}/> Jalepeno</label>
            <label><input type="checkbox" value="Ananas" onChange={handleIngredientChange} /> Ananas</label>
            <label><input type="checkbox" value="Mısır" onChange={handleIngredientChange} /> Mısır </label>
            <label><input type="checkbox" value="Domates" onChange={handleIngredientChange} /> Domates </label>
        </CheckboxGroup>
</Section>

<Section>
    <SectionTitle>Sipariş Notu</SectionTitle>
        <Note
        placeholder="Siparişe eklemek istediğiniz bir not var mı?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        />
</Section>

    <QuantityContainer>
        <QuantityButton type="button" onClick={() => handleQuantityChange('decrease')}>-</QuantityButton>
            <span>{quantity}</span>
        <QuantityButton type="button" onClick={() => handleQuantityChange('increase')}>+</QuantityButton>
    </QuantityContainer>

    <OrderSummary>
        <SectionTitle>Sipariş Toplamı</SectionTitle>
            <div>Seçimler: {(ingredients.length * 5).toFixed(2)}₺</div>
                <Price>Toplam: {totalPrice.toFixed(2)}₺</Price>
    </OrderSummary>

    <OrderButton type="button" onClick={handleSubmit}>SİPARİŞ VER</OrderButton>
    </Form>
</Container>
    );
};

export default SiparisPizza;