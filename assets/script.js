
document.getElementById('button').addEventListener('click', addClient);


function addClient() {
  let promes = new Promise(res => {
    res(
        
        fetch(`https://jsonplaceholder.typicode.com/users`)
.then(res=> res.json())
.then(data => {
    data.forEach(user => {
        document.getElementById('table').innerHTML += `
    <tr>
    <td>${user.name}</td>   
    <td>${user.username}</td>
    <td>${user.email}</td>
    <td>${user.address.city}</td>
    <td>${user.address.street}</td>
    <td>${user.address.suite}</td>
    <td>${user.phone}</td>
    <td>${user.company.name}</td>   
    </tr>
        `
    })
})
    )
  })
 
}


