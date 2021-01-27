const expensesArray = [];
const form = document.querySelector('.expense');
const name = document.querySelector('.expense-box .name');
const date = document.querySelector('.expense-box .date');
const amount = document.querySelector('.expense-box .amount');
const listItems = document.querySelector('.list-items');
const infoBox = document.querySelector('.info-box');
const container = document.getElementById('container');
const itemHolder = document.querySelector('#item-holder');
const addBtn = document.querySelector('.add-btn')
isEditing = false;
let editElement;
form.addEventListener('submit', chooseAnOption);

function chooseAnOption(e){
  e.preventDefault();
  if(isEditing){
    editedItems(e);
  }else {
    addItem(e)
  }
}


function editedItems(e){
  e.preventDefault();
  editElement.name = name.value;
  editElement.date = date.value;
  editElement.amount = amount.value;
  isEditing = false;
  addBtn.textContent = 'add expense';
  renderItems()
  setBackToDefault()
}

function addItem(e){
  e.preventDefault();
  const idValue = new Date().getTime().toString();
  const nameValue = name.value || '-';
  const dateValue = date.value || '-';
  const amountValue = amount.value || '-';
  const item = {
    id: idValue, 
    name : nameValue,
    date : dateValue,
    amount : amountValue
  }
  expensesArray.push(item)
  renderItems()
  setBackToDefault()
}
function deleteItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  const deleteToElement = expensesArray.find(item =>{
    return item.id === id;
  })
  const indexOfDeletedElement = expensesArray.indexOf(deleteToElement);
  expensesArray.splice(indexOfDeletedElement,1);
  renderItems()
}
function editItems(e){
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
 editElement =  expensesArray.find(item =>{
    return item.id == id;
  });
   name.value = editElement.name;
   date.value = editElement.date;
  amount.value = editElement.amount ;
  isEditing = true;
  addBtn.textContent = 'edit'
  renderItems()
}

function renderItems(){
  itemHolder.innerHTML = ' ';
  expensesArray.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('list-items');
    element.setAttribute('data-id', item.id);
    element.innerHTML = `<p>${item.name}</p>
    <p>${item.date}</p>
    <p>
    ${item.amount}
      <button type="button" class= "delete-btn">
        <i class="fas fa-times-circle fa-2x"></i>
      </button>
      <button type="button" class= "edit-btn">
        <i class="fas fa-edit fa-2x"></i>
      </button>
      </p>`
    itemHolder.appendChild(element);
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItems)
  })
  
}
function setBackToDefault(){
  name.value = '';
  date.value = '';
  amount.value = '';
}

