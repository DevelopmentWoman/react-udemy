import { getUser,getUsuarioActivo } from '../../src/bases-pruebas/05-funciones';



describe('Pruebas en 05-funciones',()=>{

    test('getUser debe retornar un objeto', ()=>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        expect(testUser).toEqual(user)
    })

    test('getUsuarioActivo debe ser retornado un objeto', ()=>{
        const name='Yelitza'
        const testUser = {
            uid: 'ABC567',
            username: 'Yelitza'
        }
        const user = getUsuarioActivo(name)
        expect(testUser).toEqual(user)
    })

})