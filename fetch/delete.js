const url = "http://localhost:3000"

const id = "6679718cf588184b9edcaa54";


const res = await fetch(`${url}/worko/user/${id}`,{
  method:'DELETE',
})
const respose = await res.text();
console.log(response);
