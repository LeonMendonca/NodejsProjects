const url = "http://localhost:3000"

const id = "667acf190053ec15dd7012a5";

const toUpdate = {
  name:"leon mendonca",
  email:"lm@gmail.com",
  city:"mumbai",
  age:25,
  zipcode:400093
}

const res = await fetch(`${url}/worko/user/${id}`,{
  method:'PUT',
  headers:{'Content-type':'application/json'},
  body:JSON.stringify(toUpdate)
})
const response = await res.text();
console.log(JSON.parse(response));
