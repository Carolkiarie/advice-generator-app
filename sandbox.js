

const getAdvice= async()=>{
    const base= 'https://api.adviceslip.com/advice';
    const response= await fetch (base);
    return response.json()
}




// click event
const icon= document.querySelector('.icon');
icon.addEventListener('click',()=>{
    getAdvice().then((response)=>{
    const advice= document.querySelector('.advise');
    const generateAdvice= document.querySelector('.advisegenerated')
    // output the id of advice on the dom
    const useradvice= response.slip.advice;
    const userid= response.slip.id;
    
    generateAdvice.innerText= `" ${useradvice}"`
    advice.querySelector('span').innerText= `#${userid}`;
    
    }).catch((err)=>(
        console.log(err)
    )); 
    
})

