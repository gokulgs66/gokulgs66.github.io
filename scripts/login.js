function helloWorld(){
    alert('helloworld')
}


function dataentry() {
    let data = {
        username: document.getElementById('username').value,
        lastName: document.getElementById('password').value
    }
    console.log(data);
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(res=> res.json())
    .then(data=> console.log(data));
}

