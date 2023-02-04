var data = {
  Name: "Ulric",
  Age: 43,
  Email: "sociis.natoque.penatibus@eleifendCras.com",
  Street: "Ap #122-8677 Magnis Street",
  City: "Salt Lake City",
  Zip: "546895",
  Region: "Utah",
  Country: "Korea, North",
  Info: "Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci,",
  EmployeeID: 200,
  DateOfJoining: "27/04/2018",
  PhoneNumber: "1615062568299",
};

if(localStorage.getItem('emp')) {
    data = localStorage.getItem('emp');
    data = JSON.parse(data);
    console.log(data)
}

var keys = Object.keys(data);
var displayData = keys.map((e) => {
  return "<tr><th>" + e + "</th><td>" + data[e] + "</td></tr>";
}).join('');
console.log(displayData)
document.getElementById('ddata').innerHTML = displayData;
document.getElementsByClassName('fname')[0].textContent = data.Name;
document.getElementById('name2').textContent = data.EmployeeID;


function back() {
  window.location.href='./employee.html';
  localStorage.removeItem('emp');
}