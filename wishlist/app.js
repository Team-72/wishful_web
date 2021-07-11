let modal = document.getElementById('modal');
let close = document.getElementById('close');
let wishlist = document.querySelector('.wishlist');

modal.addEventListener('click', function(){
    wishlist.style.display = 'block';
});

close.addEventListener('click', function(){
    wishlist.style.display = 'none';
});

window.addEventListener('click', function(e){
    if (e.target == wishlist) {
        wishlist.style.display = 'none';
    }
});