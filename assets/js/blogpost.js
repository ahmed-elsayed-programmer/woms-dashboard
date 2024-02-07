let imageInput = document.getElementById('upfile'); 

imageInput.addEventListener('change', (e)=> {
    document.getElementById('imageText').innerHTML =e.target.value 
})

