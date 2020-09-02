

var head = document.querySelector("#head");
window.addEventListener("scroll", function(){
    var scrollHeight = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollHeight === 0){
    head.classList.remove("fixed");
}
else{
    head.classList.add("fixed");
}
  });