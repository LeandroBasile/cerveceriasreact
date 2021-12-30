import lupulo from '../imgnavegador/lupulo.png'


const cervezas = [{id: 1 , title: 'Irish', description: '1L',prise: '$200',foto: lupulo}]


export const pizarron = new Promise((resolve, reject)=>{
    let condicion = true

    if (condicion){
        setTimeout(()=>{
            resolve(cervezas)
        },2000)
    }else{
        reject('error')
    }
})