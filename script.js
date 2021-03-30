
$(".btn").on('click',function(){
  var check = $("#checker").val();
  var sample = $("#sample").val();
  if(check === sample)
  {
    $("#result").append("The same");
  }
  else
  {
    $("#result").append("Different");
  }
})
