describe('Pruebas en <DemoComponent/>',()=>{

    test('esta prueba no debe fallar', ()=>{
        // 1. Inicialización
        const message1 = 'Hola mundo';
    
        //2. estimulo
        const message2 = message1.trim();
    
        //3. Observar el comportamiento... esperado
        expect(message1).toBe(message2);
    });


});


