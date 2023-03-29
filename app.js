let resim = document.getElementsByClassName("resim");
let kucukResim = document.getElementsByTagName("li");
let index = 0;
dondur(index);
otoPlay();
function dondur(indis) {
    index = indis;
    if (index >= resim.length) {
        index = 0;
    } else if (index < 0) {
        index = resim.length - 1;
    }
    for (i = 0; i < resim.length; i++) {
        resim[i].classList.remove("aktif");
        kucukResim[i].classList.remove("aktifKucukResim");
        
    }
    resim[index].classList.add("aktif");
    kucukResim[index].classList.add("aktifKucukResim");
} 
function ileri(){
    index++;
    dondur(index);
}
function geri(){
    index--;
    dondur(index);
}
function otoPlay(){
   oynat = setInterval(ileri, 2000);
}
function durdur(){
    clearInterval(oynat);
}
function devam(){
    oynat = setInterval(ileri, 2000)
}