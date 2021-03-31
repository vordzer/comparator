
$(".btn").on('click',function(){
  var check = $("#checker").value;
  var sample = $("#sample").value;
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
