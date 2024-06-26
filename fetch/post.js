const url = 'http://localhost:3000';

const body = {
  name:"leon",
  email:"leon@gmail.com",
  age:20,
  city:"mumbai",
  zipcode:400059
};

const res = await fetch(`${url}/worko/user`,{
  method:'POST',
  headers:{'Content-type':'application/json'},
  body:JSON.stringify(body)
});
const response = await res.text();
console.log(JSON.parse(response));

