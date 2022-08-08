import advice from './advice.js';
const API = 'https://api.adviceslip.com/advice';

const id = document.getElementById('advice-id');
const text = document.getElementById('advice-text');
const newAdvice = document.getElementById('advice-request');

const setData = async (urlApi) => {
  const data = await advice.get(urlApi);
  id.innerText = data.id;
  text.innerText = data.text;
} 

setData(API);
newAdvice.addEventListener('click', () => setData(API));
