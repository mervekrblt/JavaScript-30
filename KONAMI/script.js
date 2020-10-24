const keyCode=[]

const code = 'sailormoon'

window.addEventListener('keyup', function(e){
    keyCode.push(e.key)
    keyCode.splice(-code.length-1, keyCode.length-code.length) // give limited digits, remove first element while user typing 
    console.log(keyCode)
    if(keyCode.join('')===code){
        cornify_add()
    }
})