const url = 'http://localhost:3000';

const id="6679743b85792048634944a7"

const toUpdate = {
  name:"doe bro alt",
  email:"doe_alt@gmail.com",
  city:"jaipur",
}

const res = await fetch(`${url}/worko/user/${id}`,{
  method:'PATCH',
  headers:{'Content-type':'application/json'},
  body:JSON.stringify(toUpdate)
})
const response = await res.text();
console.log(JSON.parse(response));
