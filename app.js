const lib = new Library();

printJoke = (val) => {
  output.innerHTML = `<h3>${val.target.value}</h3>`;
}
getValue = async () => {
  const value = input.value;
  const url = `https://api.icndb.com/jokes/random/${value}`;
  let res = await lib.getData(url);
  res = res;
  let outputText = '';
  res.value.forEach((element, index) => {
    outputText += `<option value='${element.joke}'>${index + 1}</option>`;
  });
  select.innerHTML = outputText;
}

postValue = async () => {
  let userName = name.value;
  let userLastName = lastName.value;
  if (name != '' && lastName != '') {
    const data = {
      name: userName,
      lastName: userLastName
    }
    let url = `https://jsonplaceholder.typicode.com/posts`
    const res = await lib.postData(url, data);
    console.log(res);
  }
}


const send = document.querySelector('#send');
const name = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const input = document.querySelector('#input');
const button = document.querySelector('#btn');
const select = document.querySelector('#select');
const output = document.querySelector('#output');



button.addEventListener('click', getValue);
send.addEventListener('click', postValue);
select.addEventListener('change', printJoke);


// https://jsonplaceholder.typicode.com/posts