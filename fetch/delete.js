const url = "http://localhost:3000"

const id = "667ace5bdf7f182942065457";

const res = await fetch(`${url}/worko/user/${id}`,{
  method:'DELETE',
})
const response = await res.text();
console.log(JSON.parse(response));
