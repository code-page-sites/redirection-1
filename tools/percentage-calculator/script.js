$(function() {
  $("#txtAmt").blur(function() {
    var amt = $("#txtAmt").val();
    var per = $("#txtPer").val();
    var res = (amt/100) * per;
    $("#skb-res").html(res);
  });
  
  $("#txtAmt2").blur(function() {
    var amt = $("#txtAmt2").val();
    var per = $("#txtPer2").val();
    var res = (per/amt) * 100;
    $("#skb-res2").html(res);
  });
  
  
  $("#txtPer3").blur(function() {
    var amt = $("#txtAmt3").val();
    var per = $("#txtPer3").val();
    var aPr = per/100;
    var res = amt/aPr;
    $("#skb-res3").html(res);
  });


});