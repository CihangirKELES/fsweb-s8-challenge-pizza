import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  position: fixed; 
  top: 0;
  left: 10;
  width: 100vw; 
  height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center; 
`;

const Title = styled.h1`
    
  width: 1920px;
  height: 100px;
  padding: 66.49px 0px 94.72px 0px;
  margin-top: 0px;
  gap: 0px;
  background-color: red; 
  color: white;
  display: flex;
  justify-content: center; 
  align-items: center; 
`;

const Form = styled.form`
  background-color: #fff;
  overflow-y: auto; 

 
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  
  
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /*üç adet eşit genişlikte sütun oluşturur*/
  gap: 10px;
`;

const Note = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 40px;
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
  color: #e53935;
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

const OrderForm = () => {
    

    
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

    const handleQuantityChange = (operation) => {
        let newQuantity = quantity;
        if (operation === 'increase') {
            newQuantity += 1;
        } else if (operation === 'decrease' && quantity > 1) {
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

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/order-confirmation'); 
    };

  return (

    <Container>
      <Title>Teknolojik Yemekler</Title>
      <Form>
      <Section>
          <SectionTitle>Position Absolute Acı Pizza</SectionTitle>
          <div>
            85.50₺ 4.9 (200)
          </div>
          <div style={{ maxWidth: '600px', margin: '0 auto', color: 'gray', marginTop: '10px'}}>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektedir. Küçük bir pizzaya bazen pizzetta denir.
          </div>
        </Section>



        <Section>
          <SectionTitle>Boyut Seç
          <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
          </SectionTitle>
          <RadioGroup>
            <label>
              <input
                type="radio"
                value="Küçük"
                checked={size === 'Küçük'}
                onChange={() => setSize('Küçük')}
              /> Küçük
            </label>
            <label>
              <input
                type="radio"
                value="Orta"
                checked={size === 'Orta'}
                onChange={() => setSize('Orta')}
              /> Orta
            </label>
            <label>
              <input
                type="radio"
                value="Büyük"
                checked={size === 'Büyük'}
                onChange={() => setSize('Büyük')}
              /> Büyük
            </label>
          </RadioGroup>
        </Section>
        
        <Section>
          <SectionTitle>Hamur Seç
          <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
          </SectionTitle>
          <select value={dough} onChange={(e) => setDough(e.target.value)}>
            <option value="İnce">İnce</option>
            <option value="Kalın">Kalın</option>
            <option value="Hamur Kalınlığı">Hamur Kalınlığı</option>
          </select>
        </Section>

        <Section>
          <SectionTitle>Ek Malzemeler</SectionTitle>
          
          <div style={{ maxWidth: '300px', margin: '0 auto',  color: 'gray', position: 'relative', right: '150px', bottom: '12px'
           }}>
          En fazla 10 malzeme seçebilirsiniz. 5₺
          </div>
           
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

export default OrderForm;