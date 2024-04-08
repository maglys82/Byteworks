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

describe('POST /usuarios', () => {
  it('debería agregar un nuevo usuario correctamente', async () => {
    const usuario = {
      "name": "Juan",
      "rol": "Desarrollador",
      "skill": "JavaScript",
      "review": 4,
      "status": "Activo",
      "comentario": "Buen trabajo"
    };
    const response = await request(server).post('/usuarios').send(usuario);
    expect(response.status).toBe(201);
    expect(response.body).toEqual('Usuario agregado con Éxito');
  });

  it('debería devolver un Error cuando envío datos inválidos', async () => {
    const usuario = {
      "name": "Pedro"
    };
    const response = await request(server).post('/usuarios').send(usuario);
    expect(response.status).toBe(400);
    expect(response.body).toEqual('Faltan datos Requeridos');
  });
});

describe('GET /usuarios', () => {
  it('debería devolver una lista de usuarios en formato JSON', async () => {
    const response = await request(server).get('/usuarios');
    expect(response.headers['content-type']).toEqual(expect.stringContaining('application/json'));
    expect(response.status).toEqual(200);
  });
});

describe('PUT /jobs/:id', () => {
  it('debería actualizar un job existente correctamente', async () => {
    const jobId = 1; // Supongamos que el ID del job a actualizar es 1
    const jobActualizado = {
      "name": "Nuevo nombre de trabajo",
      "business": "Nueva empresa",
      "type_of_service": "Nuevo tipo de servicio",
      "type": "Nuevo tipo",
      "user_dev": 123 // Nuevo ID de usuario desarrollador
    };
    const response = await request(server).put(`/jobs/${jobId}`).send(jobActualizado);
    expect(response.status).toBe(200);
    expect(response.body).toEqual('Job actualizado con éxito');
  });

  it('debería devolver un Error cuando se intenta actualizar un job con datos inválidos', async () => {
    const jobId = 999; // Supongamos que el ID del job a actualizar no existe
    const jobActualizado = {
      "name": "Nuevo nombre de trabajo"
    };
    const response = await request(server).put(`/jobs/${jobId}`).send(jobActualizado);
    expect(response.status).toBe(500); 
    expect(response.body).toEqual('Error al actualizar el job');
  });
});

describe('DELETE /jobs/:id', () => {
  it('debería eliminar un job existente correctamente', async () => {
    const jobId = 1; // Supongamos que el ID del job a eliminar es 1
    const response = await request(server).delete(`/jobs/${jobId}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual('Job eliminado con éxito');
  });

  it('debería devolver un Error cuando se intenta eliminar un job con ID inexistente', async () => {
    const jobId = 999; // Supongamos que el ID del job a eliminar no existe
    const response = await request(server).delete(`/jobs/${jobId}`);
    expect(response.status).toBe(500); 
    expect(response.body).toEqual('Error al eliminar el job');
  });
});
