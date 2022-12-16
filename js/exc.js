document.querySelector('[data-button]').addEventListener('click',()=>{

if(document.querySelector('[data-tintas]').classList[1]=='desable'){
    document.querySelector('[data-tintas]').classList.remove('desable');
    console.log('alo')
} else{

    document.querySelector('[data-tintas]').classList.add('desable');
    console.log('clicked')}
})