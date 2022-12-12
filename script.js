$.fn.tableStyle = function() {
 this.css({
  'width': '500px',
  "height": '30px',
  "margin": '0 auto',
  "border": "none",
  "outline": "none",
  "margin-top": '50px',
  "text-align": "center",
  "border-radius":"5px",
  "cursor": "pointer",
  'box-shadow': '0 0 10px rgba(0,0,0,0.1)',
  'border-radius': '5px',
  'border-collapse': 'collapse',
  'overflow': 'hidden'
 });
  $(this).children('thead').children('tr').css({'max-width':'100px',height:'30px'});
  $(this).children('thead').children('tr:nth-child(1)').css({background:'orange'});
  $(this).children('tbody').children('tr').css({'max-width':'100px',height:'25px',background: '#fff'});
  $(this).children('tbody').children('tr').hover(function(){
    $(this).css({background: 'rgba(0,0,0,0.2)'});
  },function(){
    $(this).css({background: '#fff'});
  });
 return this;
};
$('.table_container').tableStyle();