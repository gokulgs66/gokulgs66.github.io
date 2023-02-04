function HelloWorld() {
  alert("HelloWorld");
  var a = 10;
  console.log(a);
  if (a === 10) {
    let b = 20;
    console.log(b);
  }
  console.log(b);
}

function postData() {
    let data = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('name2').value,
        Email: document.getElementById('mailid').value,
        password: document.getElementById('pass').value
    }
    console.log(data);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(res=> res.json())
    .then(data=> console.log(data));

}

// function postData() {
//   let data = {
//       Email: document.getElementById('mailid').value
//   }
//   console.log(data);
// }

// HelloWorld3();

function HelloWorld1() {
  alert("HelloWorld1: " + a);
}

const HelloWorld2 = function () {
  alert("HelloWorld2: " + a);
};

const HelloWorld3 = () => {
  alert("HelloWorld3: " + a);
};
var a = 10;
