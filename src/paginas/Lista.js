export const Lista = (props) => {
  const datos = 
    [
      {
        "id": 1,
        "nombre": "Pan",
        "precio": 0.75,
        "comprado": false
      },
      {
        "id": 2,
        "nombre": "Azúcar",
        "precio": null,
        "comprado": false
      },
      {
        "id": 3,
        "nombre": "Leche",
        "precio": 1.2,
        "comprado": false
      }
    ];

  return (
    <>
 <form>
     
        <ul className="articulos">
          <li className="articulo">
            <input type="checkbox" class="marcar" />
          <span className="nombre">{datos.nombre}</span>
            <span className="precio">{datos.precio}</span>
            <i className="borrar fas fa-times"></i>
          </li>
          <li className="articulo">
            <input typeName="checkbox" class="marcar" />
            {datos.map((datos) => (
              <span className="nombre">{datos.nombre}</span>
            ))}
            {datos.map((datos) => (
              <span className="precio">{datos.precio}</span>
            ))}
            <i className="borrar fas fa-times"></i>
            </li>
        </ul>
        <span className="precio-total">{datos.precio}</span>
 </form>
</>
  );

};
