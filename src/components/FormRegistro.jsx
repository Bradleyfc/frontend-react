import React, { useState } from 'react';
import { createRegistro } from '../api/registro'; 

export const FormRegistro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    nacionalidad: '',
    carnet: '',
    sexo: '',
    direccion: '',
    municipio: '',
    provincia: '',
    movil: '',
    telefono: '',
    grado: '',
    ocupacion: '',
    titulo: '',
    correo: ''
  });
  
  
const handleSubmit = async (e) => {
  e.preventDefault();
  await createRegistro(formData);
  alert("Registro creado exitosamente");
  /* try {
    console.log(formData);
    const response = await createRegistro(formData);
    console.log("Registro creado:", response);
    alert("Registro creado exitosamente");
    // Reset form if needed
    setFormData({
      nombre: '',
      apellidos: '',
      nacionalidad: '',
      carnet: '',
      sexo: '',
      direccion: '',
      municipio: '',
      provincia: '',
      movil: '',
      telefono: '',
      grado: '',
      ocupacion: '',
      titulo: '',
      correo: ''
    });
  } catch (error) {
    console.error("Error al crear registro:", error);
    alert("Error al crear el registro: " + (error.response?.data?.message || error.message || "Error desconocido"));
  }
} */
}


  return (
    
    <div className="container mt-4">
      <h2>Formulario de Registro</h2>
       {/* {message && (
        <div className={`alert ${message.includes('Error') ? 'alert-danger' : 'alert-success'}`}>
          {message}  */}
       
       
      
      <form onSubmit={handleSubmit}>
        <div className='form-group mb-3'>
          <label>Nombre</label>
          <input 
            type='text' 
            className='form-control' 
            name="nombre"
            value={formData.nombre}
            onChange={(e) => setFormData({... formData,nombre: e.target.value} )}
            required
          />
        </div>
        <div className='form-group mb-3'>
          <label>Apellido</label>
          <input 
            type='text' 
            className='form-control'
            name="apellidos"
            value={formData.apellidos}
            onChange= {(e) => setFormData({... formData,apellidos: e.target.value} )}
            required
          />
        </div>
        <div className='form-group mb-3'>
          <label>Nacionalidad</label>
          <input 
            type='text' 
            className='form-control'
            name="nacionalidad"
            value={formData.nacionalidad}
            onChange= {(e) => setFormData({... formData,nacionalidad: e.target.value} )}
          />
        </div>
        <div className='form-group mb-3'>
          <label>Carnet</label>
          <input 
            type='text' 
            className='form-control'
            name="carnet"
            defaultValue={formData.carnet}
            onChange= {(e) => setFormData({... formData,carnet: e.target.value} )}
          />
        </div>
        <div className='form-group mb-3'>
          <label>Sexo</label>
          <select 
            className='form-control'
            name="sexo"
            value={formData.sexo}
            onChange= {(e) => setFormData({... formData,sexo: e.target.value} )}
            required
          >
            <option value="">Seleccione</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
        </div>
        <div className='form-group mb-3'>
          <label>Dirección</label>
          <input 
            type='text' 
            className='form-control'
            name="direccion"
            value={formData.direccion}
            onChange= {(e) => setFormData({... formData,direccion: e.target.value} )}
          />   
        </div>
        <div className='form-group mb-3'>
          <label>Municipio</label>
          <input 
            type='text' 
            className='form-control'
            name="municipio"
            value={formData.municipio}
            onChange= {(e) => setFormData({... formData,municipio: e.target.value} )}
          />
        </div>
        <div className='form-group mb-3'>
          <label>Provincia</label>
          <input 
            type='text' 
            className='form-control'
            name="provincia"
            value={formData.provincia}
            onChange= {(e) => setFormData({... formData,provincia: e.target.value} )}
          />
        </div>
        <div className='form-group mb-3'>
          <label>Móvil</label>
          <input 
            type='text' 
            className='form-control'
            name="movil"
            value={formData.movil}
            onChange= {(e) => setFormData({... formData,movil: e.target.value} )}
          />
        </div>
        <div className='form-group mb-3'>
          <label>Teléfono</label>
          <input 
            type='text' 
            className='form-control'
            name="telefono"
            value={formData.telefono}
            onChange= {(e) => setFormData({... formData,telefono: e.target.value} )}
          />
        </div>
        <div className='form-group mb-3'>
          <label>Grado</label>
          <select 
            className='form-control'
            name="grado"
            value={formData.grado}
            onChange= {(e) => setFormData({... formData,grado: e.target.value} )}
          >
            <option value="">Seleccione</option>
            <option value="grado1">Ninguno</option>
            <option value="grado2">Noveno</option>
            <option value="grado3">Bachiller</option>
            <option value="grado4">Superior</option>
          </select>
        </div>
        <div className='form-group mb-3'>
          <label>Ocupacion</label>
          <select 
            className='form-control'
            name="ocupacion"
            value={formData.ocupacion}
            onChange= {(e) => setFormData({... formData,ocupacion: e.target.value} )}
          >
            <option value="">Seleccione</option>
            <option value="ocupacion1">Desocupado</option>
            <option value="ocupacion2">Ama de casa</option>
            <option value="ocupacion3">Trabajador Estatal</option>
            <option value="ocupacion4">Trabajador por Cuenta Propia</option>
          </select>
        </div>
        <div className='form-group mb-3'>
          <label>Título</label>
          <input 
            type='text' 
            className='form-control'
            name="titulo"
            value={formData.titulo}
            onChange= {(e) => setFormData({... formData,titulo: e.target.value} )}
          />
        </div>
        <div className='form-group mb-3'>
          <label>Correo</label>
          <input 
            type='email' 
            className='form-control'
            name="correo"
            value={formData.correo}
            onChange= {(e) => setFormData({... formData,correo: e.target.value} )}
          />
        </div>
        <div className='mt-4'>
          <button type = 'submit' className='btn btn-primary'>Registrarme</button>
        </div>
      </form>
      </div>
  );
};

export default FormRegistro;
