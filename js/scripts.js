$(document).ready(function(){
  $("form.factorial").submit(function(event){
    event.preventDefault();
    var factor = $("input#factor").val();
    // console.log(factor);
    var num = 1
    // var multiNum = 0
    for (i = 0; i < factor; i++) {
      num = num * (factor - i);
      // multiNum % factor
    console.log(num);

    $("#output").text(num);
    }
});

});
