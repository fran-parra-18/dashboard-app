import { Box, Button, TextField, useMediaQuery, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address: "",
};

const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup.string().matches(phoneRegExp, "phone number is not valid").required("required"),
    address: yup.string().required("required"),
})

const Form = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const isNonMobile = useMediaQuery("(min.width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box m="20 px">
            <Header titlite="create user" subtitle="create a new user profile" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4,minmax(0, 1fr))"
                            sx={
                                {
                                    "& > div": {
                                        gridColumn: isNonMobile ? undefined : "span 4",
                                    }
                                }
                            }
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="first name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2 !important" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="last name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2 !important" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="contact"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="address"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address}
                                name="address"
                                error={!!touched.address && !!errors.address}
                                helperText={touched.address && errors.address}
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button
                                type="submit"
                                color="secondary"
                                variant="contained"
                                sx={{
                                    backgroundColor: colors.blueAccent[600], // el color que quieras
                                    color: "#fff",
                                    "&:hover": {
                                        backgroundColor: colors.blueAccent[700], // color al pasar el mouse
                                    },
                                }}
                            >
                                Create new User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Form;