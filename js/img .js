let up_load = document.querySelectorAll("input");
let label = document.querySelectorAll("label");



    up_load.forEach(up =>{
            up.onchange = () => {
                let files = up.files;
    
                for(let i=0; i < files.length; i++) {
                    let reader = URL.createObjectURL(files[i])
    
                    up.parentElement.firstElementChild.src = reader
                    up.previousElementSibling.style.opacity = "0"
                }
            }
        
            })