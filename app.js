const form = document.querySelector('.expense');
const name = document.querySelector('.expense-box .name');
const date = document.querySelector('.expense-box .date');
const amount = document.querySelector('.expense-box .amount');
const listItems = document.querySelector('.list-items');
const infoBox = document.querySelector('.info-box');
const container = document.getElementById('container');



form.addEventListener('submit', addItem);

function addItem(e){
  e.preventDefault();
  const nameValue = name.value;
  const dateValue = date.value;
  const amountValue = amount.value;
  if(nameValue){
    createItems(nameValue);
    container.classList.add('show-items')
  }
}
function createItems(nameValue){
  const element = document.createElement('div');
  element.classList.add('list-items');
  element.innerHTML = `<p>${nameValue}</p>
  <p>2020-09-18</p>
  <p>
    $12
    <button type="button" class= "delete-btn">
      <i class="fas fa-times-circle fa-2x"></i>
    </button>`
    infoBox.appendChild(element);
}

