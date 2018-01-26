//business logic

function Customer(name, email, phone){
  this.name = name;
  this.email = email;
  this.phone = phone;
}

function Funds(deposit, withdraw, balance){
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.balance = balance;
}

//ui logic

$(function(){

  $("#register").submit(function(event){
    event.preventDefault();


    var name = $("#new-name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();

    $("#register")[0].reset(); //resets all form fields

    console.log(name);
    console.log(email);
    console.log(phone);

  });

  $("#deposit").submit(function(event){
    event.preventDefault();

    var deposit = $("#deposit-amount").val();
    var withdraw = $("#withdraw-amount").val();

    Funds.Balance

    return balance+=deposit;

    $("#deposit")[0].reset();

    console.log(deposit);
    console.log(withdraw);

  });
});


// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
// }
//
// var Jack = new Person("Jack", "Sparrow", 34, "brown");
//
// Person.prototype.getFullName = function(){
//   return this.firstName + " " + this.lastName;
// }
//
// Person.prototype.nationality = "American";
//
// console.log(Jack.nationality);
//
// console.log(Jack.getFullName());
