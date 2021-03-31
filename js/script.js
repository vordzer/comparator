
$(".btn").on('click',function(){
  var check = $("#checker").val();
  var sample = $("#sample").val();
  if(check === sample)
  {
    $("#result").text("The same");
  }
  else
  {
    $("#result").text("Different");
  }
})
