const url = 'http://localhost:3000';

const id="6679718cf588184b9edcaa56"

const toUpdate = {
  name:"doe bro",
  email:"doe@gmail.com",
  city:"jaipur",
  sex:"male"
}

const res = await fetch(`${url}/worko/user/${id}`,{
  method:'PUT',
  headers:{'Content-type':'application/json'},
  body:JSON.stringify(toUpdate)
})
const response = await res.text();
console.log(response);
