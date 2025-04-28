import axios from "axios";

const registroApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/registro/",
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getRegistros = () => registroApi.get()

export const createRegistro = (formData) => {
  // Generar contraseña aleatoria de 4 dígitos
  const randomPassword = Math.floor(1000 + Math.random() * 9000).toString();
  
  // Añadir la contraseña al formData
  const dataWithPassword = {
    ...formData,
    password: randomPassword,
    send_email: true  // Indicar al backend que envíe un correo
  };
  
  console.log("Enviando datos con contraseña generada:", dataWithPassword);
  
  // Enviar los datos al servidor
  return registroApi.post('/', dataWithPassword);
}

export const eliminarRegistro = (id) => registroApi.delete(`/${id}/`)

/* export const createRegistro = async (data) => {
  try {
    console.log("Sending data to API:", data);
    // Make sure all fields are strings to avoid type issues
    const formattedData = Object.keys(data).reduce((acc, key) => {
      acc[key] = data[key] === null || data[key] === undefined ? '' : String(data[key]);
      return acc;
    }, {});
    
    const response = await registroApi.post("", formattedData);
    console.log("API response:", response);
    return response;
  } catch (error) {
    console.error("API error details:", error.response?.data || error.message);
    console.error("Status code:", error.response?.status);
    console.error("Headers:", error.response?.headers);
    throw error;
  }
}; */

export default registroApi;