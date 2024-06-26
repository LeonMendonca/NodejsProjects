const url = "http://localhost:3000"

document.addEventListener('DOMContentLoaded',function(event) {
  event.preventDefault();
  const searchBtn = document.getElementById('searchUser');
  const deleteBtn = document.getElementById('deleteUser');

  searchBtn.addEventListener('click',function() {
    Query('find');
  })

  deleteBtn.addEventListener('click',function() {
    Query('delete');
  })
})

function Query(method) {
  const query = document.getElementById('search').value
  if(!query) {
    if(method === 'find') {
      return FindUser(null);
    } else {
      return DeleteUser(null);
    }
  }
  if(method === 'find') {
      return FindUser(query);
    } else {
      return DeleteUser(query);
    }
}

async function FindUser(query) {
  const id = query;
  const resid = await fetch(`${url}/worko/user/${id}`,{
    method:'GET'
  })
  const response2 = await resid.text();
  console.log(JSON.parse(response2))
}

async function DeleteUser(query) {
  const id = query;
  const res = await fetch(`${url}/worko/user/${id}`,{
    method:'DELETE',
  })
  const response = await res.text();
  console.log(JSON.parse(response));
}
