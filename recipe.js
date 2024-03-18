/*const button = document.querySelector('.button');
const par = document.querySelector('.par');

button.addEventListener('click',(e)=>{
  par. classlist.toggle('show-more');
})*/

document.addEventListener('DOMContentLoaded', function() {
  const exploreBtn = document.getElementById('exploreBtn');
  const moreText = document.querySelector('.moreText');

  moreText.style.display = 'none';

  
  exploreBtn.addEventListener('click', function() {
   
    if (moreText.style.display === 'none') {
      moreText.style.display = 'block';
    } else {
      moreText.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
 
  const exploreBtn2 = document.getElementById('exploreBtn2');
  const moreText = document.querySelector('.moreText');

  
  moreText.style.display = 'none';

  
  exploreBtn2.addEventListener('click', function() {
  
    if (moreText.style.display === 'none') {
      moreText.style.display = 'block';
    } else {
      moreText.style.display = 'none';
    }
  });
});