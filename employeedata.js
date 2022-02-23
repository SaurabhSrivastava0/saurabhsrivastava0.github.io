var x;

function fun(){
  var str="";
  str=str+'<table class="table table-hover table-dark">';
  str=str+'<thead><tr> <th scope="col">Employeeid</th><th scope="col">Firstname</th> <th scope="col">Lastname</th> <th scope="col">place</th> <th scope="col">state</th> </tr> </thead';
  str=str+'<tbody class="">';
  for (let i = 0; i < x.length; i++) {
    str=str+'<tr> <th scope="row">'+x[i].Employeeid +'</th> <td>'+ x[i].Firstname +'</td> <td>' + x[i].Lastname +'</td> <td>' +x[i].place +'</td> <td>' +x[i].state +'</td> </tr>';
}
  str=str+'</tbody> </table>';
  document.getElementById('empdat').innerHTML=str;
}

function clr(){
  document.getElementById('empdat').innerHTML="";
}

x=[{
  "Employeeid":"101",
  "Firstname":"Saurabh",
  "Lastname":"Srivastava",
  "place":"faridabad",
  "state":"haryana",
},
{
  "Employeeid":"102",
  "Firstname":"rohit",
  "Lastname":"bhati",
  "place":"burari",
  "state":"delhi"
},
{
  "Employeeid":"103",
  "Firstname":"Sumit",
  "Lastname":"singh",
  "place":"faridabad",
  "state":"haryana",
},
{
  "Employeeid":"104",
  "Firstname":"Saurabh",
  "Lastname":"12345",
  "place":"faridabad",
  "state":"haryana",
},
{
  "Employeeid":"105",
  "Firstname":"Saurabh",
  "Lastname":"12345",
  "place":"faridabad",
  "state":"haryana",
},
{
  "Employeeid":"106",
  "Firstname":"Saurabh",
  "Lastname":"12345",
  "place":"faridabad",
  "state":"haryana",
},
{
  "Employeeid":"107",
  "Firstname":"Saurabh",
  "Lastname":"12345",
  "place":"faridabad",
  "state":"haryana",
},
{
  "Employeeid":"108",
  "Firstname":"Saurabh",
  "Lastname":"12345",
  "place":"faridabad",
  "state":"haryana",
},
{
  "Employeeid":"109",
  "Firstname":"Saurabh",
  "Lastname":"12345",
  "place":"faridabad",
  "state":"haryana",
},
{
  "Employeeid":"110",
  "Firstname":"Saurabh",
  "Lastname":"12345",
  "place":"faridabad",
  "state":"haryana",
},
]
