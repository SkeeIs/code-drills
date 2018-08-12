$(document).ready(function(){
    
  $("#submit").click(function(event) { 
    event.preventDefault();
    var firstName = $("#firstname").val();
    var lastName = $("#lastname").val();
    var occupation = $("#job").val();
    var city = $("#city").val();
    var state = $("#state").val();
console.log(firstName, lastName, occupation, city, state)
    $("#firstname").val(" ");
    $("#lastname").val(" ");
    $("#job").val(" ");
    $("#city").val(" ");
    $("#state").val(" ");  

console.log($(".form"));    
    $("#results").html("<div>" + firstName + ' ' + lastName + "</div><div>"+occupation +"</div><div>"+city + ', ' + state +"</div>");
  })



});    