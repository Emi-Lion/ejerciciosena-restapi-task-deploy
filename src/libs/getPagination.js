// contine funciones referentes a la paginacion para cada una de las rutas
//la la cantidad de documentos y el tamaño de la pagina
// ahora no devuelve un arreglo sino un objeto docs

export const getPagination = (page, size) => {
    const limit = size ? + size : 3; //establece las paginas devueltas
    const offset = page ? page * limit : 0; // define los saltos de pagina multiplicandolos
    return { limit, offset}; //devuelve la cantidad de paginas y de saltos seguin requiera el cliente

};