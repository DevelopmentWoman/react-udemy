import {getHeroeById,getHeroesByOwner} from '../../src/bases-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';


describe('Pruebas en 08-imp-exp',()=>{

    test('getHeroeById debe retornar un heroe por ID',()=>{
        const heroe =     {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        }

        const fnHeroe = getHeroeById(100)
        // console.log(fnHeroe)
        expect(fnHeroe).toBeFalsy();
    })


    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', ()=>{
        const owner = 'DC'
        const showHeroes = getHeroesByOwner(owner)
        // console.log(heroes)
        expect(showHeroes.length).toBe(3)
        expect(showHeroes).toEqual(heroes.filter((heroe)=> heroe.owner===owner ))
    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', ()=>{
        const owner = 'Marvel'
        const showHeroes = getHeroesByOwner(owner)
        // console.log(showHeroes)
        expect(showHeroes.length).toBe(2)
        expect(showHeroes).toEqual(heroes.filter((heroe)=>heroe.owner===owner))
    })

})