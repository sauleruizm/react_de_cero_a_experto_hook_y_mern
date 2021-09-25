import { getHeroeByid } from './08-imp-exp';
 
export const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setInterval(() => {

            
            const heroes = getHeroeByid(id);
            if(heroes)
                resolve(heroes);    
            else 
                reject('No se puedo encontrar el heroe');
            
        }, 1500);
    });
};