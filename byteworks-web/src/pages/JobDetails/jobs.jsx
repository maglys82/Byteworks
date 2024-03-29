import React from 'react';

function JobDetails({ match, jobs }) {
  const jobId = match.params.id;
  const job = jobs.find(job => job.id === parseInt(jobId));

  return (
    <div>
      {job ? (
        <div>
          <h1>Detalles del empleo {job.id}</h1>
          <p>Nombre: {job.name}</p>
          <p>Negocio: {job.business}</p>
          <p>Tipo de servicio: {job.type_of_service}</p>
          <p>Estado: {job.status}</p>
        </div>
      ) : (
        <p>No se encontró el empleo con ID {jobId}</p>
      )}
    </div>
  );
}

export default JobDetails;
