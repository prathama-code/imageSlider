(function(){
    const pictures = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
    ]

    const buttons = document.querySelectorAll('.btn');
    const imgdiv = document.querySelector('.img-container');
    
    
    let counter = 0;

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            if(button.classList.contains('btn-left')){
                counter--
                if(counter<0){
                    counter = pictures.length -1;
                }
                imgdiv.style.background=`url(images/${pictures[counter]}.webp)`;
                imgdiv.style.backgroundSize = "100% 100%"
                
            }
            else if(button.classList.contains('btn-right')){
                counter++
                if(counter>pictures.length -1){
                    counter = 0
                }
                imgdiv.style.background=`url(images/${pictures[counter]}.webp)`
                imgdiv.style.backgroundSize = "100% 100%"
            }
        })
    })

})()