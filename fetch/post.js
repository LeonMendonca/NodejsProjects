const url = 'http://localhost:3000';

const body = {
  name:"alice",
  email:"alice@gmail.com",
  age:24,
  city:'mumbai',
  zipcode:400059
};

const res = await fetch(`${url}/worko/user`,{
  method:'POST',
  headers:{'Content-type':'application/json'},
  body:JSON.stringify(body)
});
const response = await res.text();
console.log(response);

