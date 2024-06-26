const url = "http://localhost:3000"

document.addEventListener('DOMContentLoaded',function(event) {
  event.preventDefault();
  document.getElementById('enter').addEventListener('click',function(event) {
    event.preventDefault();
    const arrOfIds = ["email", "name", "city", "age", "zipcode"];
    const body = createFormObject(arrOfIds);
    const method = document.getElementById('select').value
    const id = document.getElementById('id').value;
    console.log(id);
    if(method === 'post') {
      Post(body);
    } else if(method === 'put') {
      Put(id, body);
    } else {
      Patch(id, body);
    }
  }) 
})

function createFormObject(arrOfIds) {
  let formData = new Object();
  let name, value;
  for(let id of arrOfIds) {
    name = document.getElementById(id).name;
    value = document.getElementById(id).value;

    if(value.toString() !== "") {
      if(isNaN(value)) {
        formData[name] = value;
      } else {
        value = parseInt(value);
        formData[name] = value;
      }
      continue;
    }
    formData[name] = undefined;
  }
  return formData;
}

async function Post(body) {
  const res = await fetch(`${url}/worko/user`,{
    method:'POST',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(body)
  });
  const response = await res.text();
  console.log(JSON.parse(response));
}

async function Patch(id, toUpdate) {
  const res = await fetch(`${url}/worko/user/${id}`,{
    method:'PATCH',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(toUpdate)
  })
  const response = await res.text();
  console.log(JSON.parse(response));
}

async function Put(id, toUpdate) {
  const res = await fetch(`${url}/worko/user/${id}`,{
    method:'PUT',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(toUpdate)
  })
  const response = await res.text();
  console.log(JSON.parse(response));
}
