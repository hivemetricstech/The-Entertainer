
var urlParams  = new URLSearchParams(window.location.search)
console.log(urlParams.get('price'));
  console.log(urlParams.get('order_id'));
 const price= urlParams.get('price');
  const order_id= urlParams.get('order_id');
   const name= urlParams.get('name');
const status= urlParams.get('success');
 console.log(price);
 console.log(name);
 console.log(status);


if(status=="true"){
    document.getElementsByClassName("title-confirmed")[0].style.display="block";
 document.getElementsByClassName("confirmed")[0].style.display="block";
  document.getElementsByClassName("confirmed")[0].textContent +=name;
  document.getElementsByClassName("confirmed")[0].textContent +=" has been Confirmed" ;
  document.getElementsByClassName("confirmed-text")[0].style.display="block";
}
else
{
  document.getElementsByClassName("title-cancelled")[0].style.display="block";
document.getElementsByClassName("cancelled")[0].style.display="block";
  document.getElementsByClassName("cancelled")[0].textContent +=name;
  document.getElementsByClassName("cancelled")[0].textContent +=" is Cancelled" ;
   document.getElementsByClassName("cancelled-text")[0].style.display="block";
}
