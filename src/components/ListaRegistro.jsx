import React, { useEffect, useState } from "react";
import { getRegistros } from "../api/registro";
import {eliminarRegistro} from "../api/registro"

export const ListaRegistro = () => {
  const [registros, setRegistros] = useState([]);

  const loadRegistros = async () => {
    try{
      const response = await getRegistros();
      setRegistros(response.data);
    } catch (error) {
      console.error("Error cargando el registro", error);
    }
  };

  const handleDelete = async (id) =>{
    await eliminarRegistro(id)
    setRegistros(registros.filter(registro => registro.id !==id))
  }

  useEffect(() => {
    loadRegistros();
  }, []);

  return (
    <div>
      <h1>Lista de Registros</h1>
      {registros.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Nacionalidad</th>
                <th>Carnet</th>
                <th>Sexo</th>
                <th>Dirección</th>
                <th>Municipio</th>
                <th>Provincia</th>
                <th>Móvil</th>
                <th>Teléfono</th>
                <th>Grado</th>
                <th>Ocupación</th>
                <th>Título</th>
                <th>Correo</th>
                <th>Contraseña</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {registros.map((registro) => (
                <tr key={registro.id}>
                  <td>{registro.nombre}</td>
                  <td>{registro.apellidos}</td>
                  <td>{registro.nacionalidad}</td>
                  <td>{registro.carnet}</td>
                  <td>{registro.sexo_display}</td>
                  <td>{registro.direccion}</td>
                  <td>{registro.municipio}</td>
                  <td>{registro.provincia}</td>
                  <td>{registro.movil}</td>
                  <td>{registro.telefono}</td>
                  <td>{registro.grado_display}</td>
                  <td>{registro.ocupacion_display}</td>
                  <td>{registro.titulo}</td>
                  <td>{registro.correo}</td>
                  <td>{registro.password}</td>
                  <td><button onClick = {() => handleDelete (registro.id)} >Eliminar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <strong>No existen registros disponibles</strong>
      )}
    </div>
  );
};

export default ListaRegistro;
