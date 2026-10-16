import { useState } from "react";
import { Alert, Box, Button, Card, Grid, MenuItem, Snackbar, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useClients } from "../../context/ClientsContext";
import { provinces } from "../../data/mockData";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",
};

// Acepta formatos como "+54 9 11 4523-8890", "011 4523-8890" o "(0351) 456-7890"
const phoneHasValidDigits = (value = "") => {
    const digits = value.replace(/\D/g, "");
    return /^[\d\s()+-]+$/.test(value) && digits.length >= 8 && digits.length <= 15;
};

const clientSchema = yup.object().shape({
    firstName: yup.string().trim().required("Ingresá el nombre"),
    lastName: yup.string().trim().required("Ingresá el apellido"),
    email: yup.string().trim().email("El email no es válido").required("Ingresá el email"),
    phone: yup.string().required("Ingresá un teléfono").test("phone", "El teléfono no es válido", phoneHasValidDigits),
    address: yup.string().trim().required("Ingresá la dirección"),
    city: yup.string().trim().required("Ingresá la localidad"),
    province: yup.string().required("Elegí una provincia"),
    zipCode: yup.string().trim().max(8, "Máximo 8 caracteres"),
});

const fields = [
    { name: "firstName", label: "Nombre", size: 6, autoComplete: "given-name" },
    { name: "lastName", label: "Apellido", size: 6, autoComplete: "family-name" },
    { name: "email", label: "Email", size: 6, type: "email", autoComplete: "email" },
    { name: "phone", label: "Teléfono", size: 6, type: "tel", autoComplete: "tel", placeholder: "+54 9 11 1234-5678" },
    { name: "address", label: "Dirección", size: 12, autoComplete: "street-address" },
    { name: "city", label: "Localidad", size: 5, autoComplete: "address-level2" },
    { name: "province", label: "Provincia", size: 4, select: true },
    { name: "zipCode", label: "Código postal (opcional)", size: 3, autoComplete: "postal-code" },
];

const Form = () => {
    const { addClient } = useClients();
    const navigate = useNavigate();
    const [savedName, setSavedName] = useState(null);

    const handleFormSubmit = (values, { resetForm }) => {
        const { firstName, lastName, ...rest } = values;
        const name = `${firstName.trim()} ${lastName.trim()}`;
        addClient({ name, ...rest });
        setSavedName(name);
        resetForm();
    };

    return (
        <Box>
            <Header title="Nuevo cliente" subtitle="Cargá los datos para sumarlo a tu lista de clientes" />

            <Card sx={{ p: { xs: 2, md: 3 }, maxWidth: 900 }}>
                <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={clientSchema}>
                    {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting, resetForm }) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <Typography variant="h6" mb={2}>Datos del cliente</Typography>
                            <Grid container spacing={2.5}>
                                {fields.map(({ name, label, size, select, ...inputProps }) => (
                                    <Grid key={name} size={{ xs: 12, sm: size }}>
                                        <TextField
                                            fullWidth
                                            select={select}
                                            label={label}
                                            name={name}
                                            value={values[name]}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={!!touched[name] && !!errors[name]}
                                            helperText={touched[name] && errors[name]}
                                            {...inputProps}
                                        >
                                            {select && provinces.map((p) => (
                                                <MenuItem key={p} value={p}>{p}</MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                ))}
                            </Grid>
                            <Box display="flex" justifyContent="flex-end" gap={1.5} mt={3}>
                                <Button onClick={() => resetForm()} color="inherit">
                                    Limpiar
                                </Button>
                                <Button type="submit" variant="contained" disabled={isSubmitting}>
                                    Guardar cliente
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Card>

            <Snackbar
                open={Boolean(savedName)}
                autoHideDuration={6000}
                onClose={() => setSavedName(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    onClose={() => setSavedName(null)}
                    action={
                        <Button color="inherit" size="small" onClick={() => navigate("/clientes")}>
                            Ver clientes
                        </Button>
                    }
                >
                    {savedName} se agregó a tus clientes.
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Form;
