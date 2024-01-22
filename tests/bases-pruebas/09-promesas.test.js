import {getHeroeByIdAsync} from '../../src/bases-pruebas/09-promesas'


describe('Pruebas 09-Promesas',()=>{

    test('getHeroeByIdAsync debe retornar un heroe',(done)=>{

        const id = 1;
        getHeroeByIdAsync(id)
        .then(hero=>{
            
            expect(hero).toEqual(   {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            done();

        })
    })



    test('getHeroeByIdAsync debe retornar un error si no existe el heroe',(done)=>{

        const id = 1;
        getHeroeByIdAsync(id)
        .then(heroe=>{
            expect(hero).toBeFalsy();
            done()
        })
        .catch(error=>{
            
            expect(error).toBe('No se pudo encontrar el héroe ' + id)
            done();

        })
    })
})