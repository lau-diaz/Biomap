//  const paArriba = () => {
//     window.scrollTo({top: 0, behavior: 'smooth'})
//  }

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {seVeElBotonONo()};

function seVeElBotonONo() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function paArriba() {
    document.documentElement.scrollTop = 0;
  }