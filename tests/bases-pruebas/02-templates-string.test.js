import { getSaludo } from "../../src/bases-pruebas/02-template-string";


describe('Pruebas en 02-template-string', ()=>{
    test('getSaludo retorna "Hola Yelitza', ()=>{
        const name = 'Yelitza';
        const message = getSaludo(name);

        expect (message).toBe(`Hola ${name}`)
    })
})