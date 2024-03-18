import React from 'react';
import { Button, Stack, TextField } from '@mui/material';
import { useFormik, FormikProps } from 'formik';

interface FieldConfig {
    id: string;
    value: string;
    label: string;
    type: string;
}

interface FormValues {
    [key: string]: FieldConfig;
}

interface Props<Values> {
    initialValues: Values;
    validationSchema: any;
    onSubmit: (values: Values) => void;
}

const useFormikForm = <Values extends Record<string, any>>({
    initialValues,
    validationSchema,
    onSubmit,
}: Props<Values>) => useFormik({
    initialValues: Object.keys(initialValues).reduce((acc, key) => {
        acc[key] = initialValues[key].value;
        return acc;
    }, {} as { [key: string]: any }),
    validationSchema,
    onSubmit: (values) => {
        onSubmit(values as Values);
    },
});

const Form = ({ initialValues, validationSchema, onSubmit }: Props<FormValues>) => {
    const formik: FormikProps<FormValues> = useFormikForm<FormValues>({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
                {Object.values(initialValues).map((field) => (
                    <TextField
                        fullWidth
                        key={field.id}
                        id={field.id}
                        name={field.id}
                        label={field.label}
                        type={field.type}
                        value={formik.values[field.id]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched[field.id] && Boolean(formik.errors[field.id])}
                        helperText={formik.touched[field.id] && formik.errors[field.id] ? String(formik.errors[field.id]) : ''}
                        margin="normal"
                    />
                ))}
            </Stack>
            <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
            </Button>
        </form>
    );
};

export default Form;
