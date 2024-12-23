const content = document.querySelector('.content');

content.addEventListener('click',(e)=>{
  const el = e.target;
  const text1 = content.querySelector('.text-1');
  const text2 = content.querySelector('.text-2');
  const text3 = content.querySelector('.text-3');
  const text4 = content.querySelector('.text-4');

  if(el.id === "input-1"){
    text1.classList.toggle('text-open');
  }
  if(el.id === "input-2"){
    text2.classList.toggle('text-open');
  }
  if(el.id === "input-3"){
    text3.classList.toggle('text-open');
  }
  if(el.id === "input-4"){
    text4.classList.toggle('text-open');
  }
})