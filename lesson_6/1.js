window.onload = function(){
    var images = document.getElementsByTagName("img");
    for(var i=0;i<images.length;i++){
        images[i].onclick=showBigPng;
    }
}
function showBigPng(event){
    var bigPngBlock = document.getElementById("bigPng");
    bigPngBlock.innerHTML="";
    var minPng = event.target;
    var imageNameParts = minPng.id.split("_");
    var path = 'lesson_6/png/' + imageNameParts[0] + 'big.jpg';
    var bigPng = document.createElement('img');
    bigPng.style.display = "flex";
    bigPng.src = path;
    bigPngBlock.appendChild(bigPng);
    bigPng.onerror = function(){
        bigPng.style.display = "none";
        alert("file not found");
    }
}