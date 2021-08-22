let row=document.getElementById('ro');
function load(){

var img=['music/head4.png','music/head3.jpg','music/head2.png','music/head.png','music/buds.jpg'];
count=0;
for(let i=0;i<10;i++){
    
    let col=document.createElement('div');
    let card=document.createElement('div');
    let i='music/head4.png';
    card.className='card text-center bg-dark'
    card.innerHTML=`
    <div class='card-header'>
    headphones
    </div>
    <div class='card-body'>
    <img src='${img[count]}' class='w-50' height='50'>
  
    </div>
    <div class='card-footer d-grid'>
    <button class='btn btn-dark'>Add</button>
    </div>
    `;
    col.className='col-m-3 col-4';
    col.appendChild(card);
    row.appendChild(col);

    count++;
    if(count==4){count=0;}
        
}


}

let hm=document.getElementById('home');
let sp=document.getElementById('specs');
let cs=document.getElementById('case');
let pr=document.getElementById('products');

window.onscroll=function(){scroll();}
function scroll(){

    if(document.documentElement.scrollTop<500){
        hm.style.color='white';
        //cs.style.color='aqua';
    }else{
        hm.style.color='var(--a_)';

    }



    if(document.documentElement.scrollTop>500 && document.documentElement.scrollTop<1200 ){
sp.style.color='white';
    }else{
        sp.style.color='var(--a_)';

    }
    if(document.documentElement.scrollTop>1200 && document.documentElement.scrollTop<1500 ){
        cs.style.color='white';
        //cs.style.color='aqua';
    }else{
        cs.style.color='var(--a_)';

    }
    if(document.documentElement.scrollTop>1500 ){
        pr.style.color='white';
        //cs.style.color='aqua';
    }else{
        pr.style.color='var(--a_)';

    }   
    
}