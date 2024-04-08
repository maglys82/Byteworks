const request = require("supertest");
const server = require("../server");

describe('POST /jobs', () => {
  it('debería devolver un JSON con datos de trabajos desde la base de datos', async () => {
    const jobs = {
      "name": "Desarrolador Frontend",
      "business":"Consultora Conexiones",
      "type_of_service": "Desarrollador",
      "status":"En progreso"
    }
    // Realiza una solicitud a la ruta '/jobs'
    const response = await request(server).post('/jobs').send(jobs);

    // Verifica el código de estado
    expect(response.status).toBe(201);

    // Verifica que la respuesta contenga los datos obtenidos de la base de datos
    expect(response.body).toEqual('Recurso agregado con Exito');
  });

  it('debería devolver un Error cuando envío datos invalidos', async () => {
    const jobs = {
      "name": "mmita83@gmail.com"
    }
    // Realiza una solicitud a la ruta '/jobs'
    const response = await request(server).post('/jobs').send(jobs);

    // Verifica el código de estado
    expect(response.status).toBe(400);

    // Verifica que la respuesta contenga los datos obtenidos de la base de datos
    expect(response.body).toEqual('Faltan datos Requeridos');
  });
});

it('debería devolver una lista de trabajos en formato JSON', async () => {
  const response = await request(server).get('/jobs');
  expect(response.headers['content-type']).toEqual(expect.stringContaining('application/json'));
  expect(response.status).toEqual(200)
});
