
$(".btn").on('click',function(){
  var check = $("#checker").val();
  var sample = $("#sample").val();
  alert(check);
  alert(sample);
  if(check === sample)
  {
    $("#result").innerText = "The same";
  }
  else
  {
    $("#result").innerText = "Different";
  }
})
