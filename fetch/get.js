const url = "http://localhost:3000"

const res = await fetch(`${url}/worko/users`, {
  method:'GET'
})
const response = await res.text();
console.log(JSON.parse(response))

const id = "66797063395962b75ab10432";
const resid = await fetch(`${url}/worko/user/${id}`,{
  method:'GET'
})
const response2 = await resid.text();
console.log(JSON.parse(response2))
