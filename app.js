const expensesArray = [];
const form = document.querySelector('.expense');
const name = document.querySelector('.expense-box .name');
const date = document.querySelector('.expense-box .date');
const amount = document.querySelector('.expense-box .amount');
const listItems = document.querySelector('.list-items');
const infoBox = document.querySelector('.info-box');
const container = document.getElementById('container');
const itemHolder = document.querySelector('#item-holder');

form.addEventListener('submit', addItem);


function addItem(e){
  e.preventDefault();
  const nameValue = name.value;
  const dateValue = date.value;
  const amountValue = amount.value;
  const item = {
    id : new Date().getTime().toString(),
    name: nameValue || '-',
    date: dateValue || '-',
    amount: amountValue || '-'
  };
  expensesArray.push(item);
  renderItems()
  container.classList.add('show-list')
}

function deleteItem(e) {
  const parent = e.target.parentElement.parentElement.parentElement;
  const id = parent.getAttribute('data-id');
  const elementToDelete = expensesArray.find(item => {
    return item.id === id;
  });
  const indexOfElement = expensesArray.indexOf(elementToDelete);
  expensesArray.splice(indexOfElement, 1);
  renderItems()
}

function renderItems() {
  itemHolder.innerHTML = '';
  expensesArray.forEach(item => {
    const element = document.createElement('div');
    element.setAttribute('data-id', item.id);
    element.classList.add('list-items');
    element.innerHTML = `<p>${item.name}</p>
    <p>${item.date}</p>
    <p>
      ${item.amount}
      <button type="button" class= "delete-btn">
        <i class="fas fa-times-circle fa-2x"></i>
      </button>`
      const deleteBtn = element.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', deleteItem);
      itemHolder.appendChild(element);
      setBackToDefault()
  })
}

function setBackToDefault(){
  name.value = '';
  date.value = '';
  amount.value = '';
}
