import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Grid, Card, CardContent, Button } from '@mui/material';
import './styles.css'

function Enterprise() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ display: 'flex', alignItems: 'center', minHeight: '100vh', margin: '5px' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={3}>
                    {jobs.map(job => (
                        <Grid item xs={12} sm={6} md={3} key={job.id}>
                            <Card variant="outlined" className="card-background">
                                <CardContent>
                                    <h3>Trabaja con Nosotros!</h3>
                                    <h5>Buscamos nuevos talentos que se unan a nuestro equipo!</h5>
                                    <p>Envía tu CV y portafolio a contacto@byteworks.com</p>
                                    <h3>{job.name}</h3>
                                    <p>{job.business}</p>
                                    <p>{job.type_of_service}</p>
                                    <Link to={`/jobs/${job.id}`}> </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default Enterprise;

