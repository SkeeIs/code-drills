$(document).ready(function(){
    
  $("#submit").click(function(event) { 
    event.preventDefault();
    var firstName = $("#firstname").val();
    var lastName = $("#lastname").val();
    var occupation = $("#job").val();
    var city = $("#city").val();
    var state = $("#state").val();
console.log(firstName, lastName, occupation, city, state)
    //$(".form").empty();
    //this.formClear = function () {
      //$form.find('input:text, input:password, input:file, select, textarea').val('');
    //}
console.log($(".form"));    
    $("#results").html("<div>firstName</div><div>lastName</div><div>occupation</div><div>city</div><div>state</div>");
  })



});    