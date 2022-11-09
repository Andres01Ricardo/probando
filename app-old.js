const http = require('http');

 http.createServer( (req,res) => {

    /* res.writeHead(200,{'Content-Type':'application/json'});
 */
    /* res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    res.writeHead(200,{'Content-Type':'application/csv'});
    /* const persona = {
        id:1,
        nombre:'Ricardo'
    }
    
    res.write(JSON.stringify(persona)); */
    res.write('Hola Mundo');
     /* res.write('1, Ricardo \n');
    res.write('2, Sthefanny \n');
    res.write('3, Emma \n');
    res.write('4, Coryto \n');
    res.write('5, Mostrica \n'); */
    res.end();

})
.listen( 8080 );


console.log('Escuchando el puerto ', 8080);