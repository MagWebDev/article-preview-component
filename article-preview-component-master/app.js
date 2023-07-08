const shareBtn = document.getElementById('share-icon');
const modal = document.getElementById("modal-share");

shareBtn.addEventListener('click', function(){
    
   if (modal.style.display === "none"){
    modal.style.display = "block"
    shareBtn.classList.add('active')
   } else {
    modal.style.display="none";
    shareBtn.classList.remove('active')

   } 
    
})