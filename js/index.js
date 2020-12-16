

$(document).ready(function ()	{
setTimeout(function(){
  $('body').addClass('blue');
 $( '#demo' ).fadeOut();
 $( '#de1' ).fadeOut();
 $( 'img' ).fadeIn();
  $( '#dash' ).fadeOut();
  $( '#sun' ).fadeOut();
  $('.star').fadeIn();
   $('.stars').fadeIn();
}, 3000);

})

$(document).ready(function(){
  var stars=500;
  var $stars=$(".stars");
  var r=700;
  for(var i=0;i<stars;i++){
    var $star=$("<div/>").addClass("star");
    $stars.append($star);
  }
  $(".star").each(function(){
    var cur=$(this);
    var s=0.2+(Math.random()*1);
    var curR=r+(Math.random()*300);
    cur.css({ 
      transformOrigin:"0 0 "+curR+"px",
      transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-110)+"deg) scale("+s+","+s+")"
       
    })
  })
})