window.onload=function(){
    var t=document.querySelector("#banner .text");
    var m=document.querySelector("#third h2");
    var A=document.querySelector(".xLine");
    var o=document.querySelector(".yLine");
    var w=document.querySelectorAll("#third dl");
    var c=document.querySelectorAll(".line");
    var F=document.querySelector(".mCenter");
    var b=document.querySelector("#fourth h2");
    var a=document.documentElement.scrollTop||document.body.scrollTop;
    var y=document.getElementById("back");
    var l=document.querySelectorAll("nav li");

    for(var D=0; D<l.length;D++) {
        l[D].index=D;
        if(D==0){
            continue
        }
        l[D].onclick=function(){
            console.log(this.index);
            var i=document.getElementById("anchor"+this.index);
            window.scrollTo(0,i.offsetTop)
        }
    }
    if(a<300) {
        t.style.transition="0.2s all ease-in";
        t.style.width="400px";
        t.style.opacity="1";
        t.num=0;
        t.addEventListener("transitionend",function(){
            t.num++;
            if(t.num<=1) {
                var i=document.querySelector("html");
                i.style.animation="0.3s shake";
            }
        });
    }else{
        t.style.width="400px";
        t.style.opacity="1";
    }
    r(a);
    function r(H){
        for(var G=0; G<c.length; G++) {
            if(H>c[G].offsetTop-300) {
                c[G].style.transform="scaleX(1)";
            }
        }
    }
    var x=0;
    d(a);
    function d(H){
        if(H>m.offsetTop-150){
            x++;
            if(x>1){
                return
            }
            A.style.transform="scale(1)";
            o.style.transform="scale(1)";
            for(var G=0; G<w.length; G++){
                w[G].style.transform="scale(1)";
            }
        }
    }
    var v=0;
    k(a);
    function k(i){
        if(i>b.offsetTop-100) {
            v++;
            if(v>1) {
                return
            }
            F.style.opacity=1;
            F.style.animation="1s fold linear";
            F.addEventListener("animationend",function(){
                this.style.animation="";
                s();
            })
        }
    }
    var n=0;
    h(a);











    function h(I){
    var H=document.querySelector("#fifth h2");

    if(I>H.offsetTop-200){
        n++;
        if(n>1){
        return}var G=document.querySelector(".fCenter");
    var i=document.querySelector(".fImg");
    var K=document.querySelectorAll(".fCenter div");

    i.style.animation="3s black linear";
    setTimeout(function(){

    for(var L=0;
        L<K.length;
    L++){
        K[L].l=K[L].offsetLeft;
    K[L].t=K[L].offsetTop;
        K[L].style.left=i.offsetWidth/2-K[L].offsetWidth/2+"px";
        K[L].style.top=i.offsetHeight/2-K[L].offsetHeight/2+"px";
        K[L].style.transform="scale(0)"}},2000);

    i.addEventListener("animationend",J);

    function J(){

    this.style.transform="scale(0)";
    setTimeout(function(){

    for(var L=0;
        L<K.length;
    L++){
        K[L].className="";
    K[L].style.left=K[L].l+"px";
        K[L].style.top=K[L].t+"px";
        K[L].style.transform="scale(1)"}i.style.transform="scale(1.2)";
        i.style.transition="0.2s transform";
        i.addEventListener("transitionend",function(){

    i.removeEventListener("animationend",J);

    i.style.animation="10s blackRotate linear infinite"})},500)}}}var g=document.querySelectorAll("#photo img");

    for(var D=0;
        D<g.length;
    D++){
        g[D].onmouseover=function(){

    for(var G=0;
        G<g.length;
    G++){
        g[G].nextElementSibling.style.width=0}this.nextElementSibling.style.width="224px"}}var u=document.querySelectorAll("#photo li");

    var z=["9ddd1051ff","b03d1a16c1","f2f3b49850"];
        for(var D=0;
            D<u.length;
        D++){
            u[D].index=D;
        u[D].onclick=function(G){
        var i=document.createElement("div");

var H=document.createElement("div");

    i.id="video";
    H.id="shadow";
    H.style.height=document.body.offsetHeight+"px";
    i.innerHTML='<embed src="http://yuntv.letv.com/bcloud.swf?uu=11ijmp9uua&amp;
    vu='+z[this.index]+'&amp;
    pu=8FF9C0D595&amp;
    auto_play=1&amp;
    gpcflag=1" quality="high" width="960" height="540" align="middle" allowscriptaccess="never" allowfullscreen="true" type="application/x-shockwave-flash"></embed>';
    document.body.appendChild(H);

    document.body.appendChild(i);

    G.cancelBubble=true
    }
}
    document.onclick=function(){
    var G=document.getElementById("shadow");
    var i=document.getElementById("video");
        if(!G){
            return
        }
        document.body.removeChild(G);
        document.body.removeChild(i)
    };
    window.onscroll=function(){
    var i=document.documentElement.scrollTop||document.body.scrollTop;
    r(i);

    d(i);

    k(i);

    h(i);

    if(i>500){
        y.style.display="block";
    }else{
        y.style.display="none";
    }
};

function s(){
    var K=document.querySelectorAll(".mCenter div:not(.arc)");
    var G=document.querySelectorAll("#fourth .box");
    var J=[];
    for(var H=0;
        H<G.length;
    H++){
        J.push(G[H])}J.sort(function(L,i){
    var N=parseInt(L.querySelector(".order").innerHTML);

    var M=parseInt(i.querySelector(".order").innerHTML);

    return N-M});
    var I=K[0];
    for(var H=0;
        H<K.length;
    H++){
        (function(L){
        setTimeout(function(){

    I.className="";
    K[L].className="active";
    I=K[L];
    J[parseInt(L/5)].style.opacity=1;
    if(L==K.length-1){
        setTimeout(function(){

    I.className="";
    j(J)},100)}},L*100)})(H)}}function j(I){
    var J=document.querySelector("#fourth h2");
    var H=document.querySelectorAll(".rightBtn div");
    var G=document.querySelectorAll(".order");

    H[0].style.animation="1.2s lightSpeedIn ease-in";
    H[0].addEventListener("animationend",function(){

    this.style.animation="";
    this.style.opacity=1;
    setTimeout(function(){

    H[0].style.transition="1s transform";
    H[0].style.transform="skewY(-45deg)";
    H[0].style.transformOrigin="center";
    H[0].children[0].style.transform="skewY(45deg)"},100)});

    H[0].addEventListener("transitionend",function(){

    this.style.animation="1s breath linear infinite alternate";
    G[0].style.animation="1s breathWhite linear infinite alternate";
    G[4].style.animation="1s breathWhite linear infinite alternate";
    H[1].style.opacity=0.5;
    H[1].children[0].style.transform="skewY(45deg)"
});
    var i=0;
    H[1].addEventListener("transitionend",function(){

    i++;
    if(i==2){
    var L=document.querySelectorAll(".arc");

    for(var K=2;
        K<I.length;
    K++){
        I[K].className+=" blur";
    L[K].className+=" blur"}}})}var f=document.querySelector(".date div");

var p=new Date(2016,9,31);
    var q=document.querySelectorAll(".date span");
    var e="00天00时00分00秒";    var C=0;
    setInterval(function(){
    var G=B(p);
    var H=E(G.d)+"天"+E(G.h)+"时"+E(G.m)+"分"+E(G.s)+"秒";
    for(var I=0;
        I<q.length;
    I++){
        if(q[I].className.indexOf("colon")==-1){
        q[I].className=""}if(e.charAt(I)!=H.charAt(I)){
        q[I].innerHTML=H.charAt(I);

        q[I].className="active";
        q[I].addEventListener("transitionend",function(){
        this.className=""
        })
    }
}e=H},1000);

    function E(i){
        return i<10?"0"+i:i+""}function B(H){
    var i=new Date();

    var G=Math.abs(H-i);

    return {
        d:parseInt(G/(24*3600000)),
        h:parseInt(G%(24*3600000)/3600000),
        m:parseInt(G%(24*3600000)%3600000/60000),
        s:parseInt(G%(24*3600000)%3600000%60000/1000)
    }
}
    y.onclick=function(){
        window.scrollTo(0,0)
    }
};
