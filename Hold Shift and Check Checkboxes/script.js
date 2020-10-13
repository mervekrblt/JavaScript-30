const checkBoxes = document.querySelectorAll('input')

//make variable to see which input selected lastly
let lastChecked; //use let because of reassigned

function handleCheck(e){
    // shift key is used or not
    //and input is checked or not, use this variable
    let inBetween = false // this is used for determine which boxes are located in 2 checks
    //lastChecked = this IT SHOULD BE AT THE BOTTOM BECAUSE THIS IS LASTCHECKED
    if(e.shiftKey && this.checked){ //both of them must be true
        checkBoxes.forEach(checkbox => {
            //console.log(checkbox)
            if(checkbox === this || checkbox=== lastChecked){
                inBetween = !inBetween
                //console.log('start')
            }
           if(inBetween){
                checkbox.checked =true
            }
        }) 
        
    }
    lastChecked = this
}
checkBoxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck))
