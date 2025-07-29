// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText =h2.innerText=h2.innertext+"from apna collage students ";

let divs=document.querySelectorAll(".box");
// console.leog(divs[0]);
let idx=1;
for(div of divs){
    div.innertext=`new unique vale${idx}`;
    idx++;
}
// divs[0].innertext ="new unique value 1";
// divs[1].innertext ="new unique value 2";
// divs[2].innertext ="new unique value 3";
