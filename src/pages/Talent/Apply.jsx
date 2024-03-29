import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, CardActions, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Apply = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleApply = () => {
        console.log("Aplicado");
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        navigate(-1);
    };

    const actionLabel = "Aplicar";

    return (
        <>
            <Card sx={{
                width: 500,
                height: 400,
                margin: "auto",
                p: 3,
            }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Empresa
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Cargo
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Rol
                    </Typography>
                    <Typography variant="body2">
                        Estatus
                        <br />
                        Reviews
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        variant="text"
                        sx={{
                            color: "#1976D2",
                            "&:focus": {
                                outline: "none",
                            },
                            "&:active": {
                                outline: "none",
                            },
                        }}
                        onClick={handleApply}
                    >
                        {actionLabel}
                    </Button>
                </CardActions>
            </Card>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Tu aplicacion has sido enviada exitosamente!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Apply;




