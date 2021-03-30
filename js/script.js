
$(".btn").on('click',function(){
  alert("comparing");
  var check = $("#checker").value;
  var sample = $("#sample").value;
  if(check === sample)
  {
    $("#result").append("The same");
  }
  else
  {
    $("#result").append("Different");
  }
})
