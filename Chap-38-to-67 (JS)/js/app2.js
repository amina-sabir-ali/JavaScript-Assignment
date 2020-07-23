// -------------- Chap-52 to Chap-57 --------------
function showImage(e){
    console.log(e.src);
    var model_img = document.getElementById('modelImage');
    model_img.src = e.src;
}