window.onload=function(){


}
var navjs=document.getElementById('nav');
window.addEventListener('scroll',function(){
    this.console.log(window.scrollY);
    if(window.scrollY>660){
        navjs.style.position='fixed';
        navjs.style.top='0px';
    }
})