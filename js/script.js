let count = 0;
function test(){
  count+=1;
  console.log(count);
  $("#here").html(count);
};
$(document).ready(function(){
    $("#options").click(function(){
        $("#q2").show();
        $("#q1").hide();
    });
    $("#option").click(function(){
        $("#q3").show();
        $("#q2").hide();
    });
    $("#option3").click(function(){
        $("#q4").show();
        $("#q3").hide();
    });
    $("#option4").click(function(){
        $("#q5").show();
        $("#q4").hide();
    });
    $("#option5").click(function(){
        $("#q6").show();
        $("#q5").hide();
    });
    $("#option6").click(function(){
        $(".lastpage").show();
        $("#q6").hide();
        $(".score").hide();

    });
    
})