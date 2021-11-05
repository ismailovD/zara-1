const   inputOrder = document.querySelector('.form__order'),
        inputAuth = document.querySelector('.form__auth'),
        inputInfo = document.querySelector('.form__info'),
        inputHover = document.querySelector('.form__info-hover');

        inputOrder.addEventListener('input', ()=> {
            if(inputOrder.value == "911"){
                inputOrder.classList.add('form__invalid')
            }else inputOrder.classList.remove('form__invalid')
        })
        inputAuth.addEventListener('input', ()=> {
            if(inputAuth.value == "911"){
                inputAuth.classList.add('form__invalid')
            }else inputAuth.classList.remove('form__invalid')
        })
        
        inputInfo.addEventListener('mouseenter' , () => {
            inputHover.style.opacity = "1" 
        })
        inputInfo.addEventListener('mouseleave' , () => {
            inputHover.style.opacity = "0"
        })