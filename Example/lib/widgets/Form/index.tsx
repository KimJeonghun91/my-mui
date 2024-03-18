import React from 'react';
import { Button, Stack, TextField, Box } from '@mui/material';
import { useFormik, FormikProps } from 'formik';
import * as yup from 'yup';

interface FieldConfig {
    id: string;
    value: string;
    label: string;
    type: string;
}

export interface FormValues {
    [key: string]: FieldConfig;
}

interface Props<T> {
    initialValues: T;
    validationSchema: yup.ObjectSchema<any>;
    onSubmit: (values: T) => void;
    submitText?: string;
}

const useFormikForm = <T extends Record<string, any>>({
    initialValues,
    validationSchema,
    onSubmit,
}: Props<T>) => useFormik({
    initialValues: Object.keys(initialValues).reduce((acc, key) => {
        acc[key] = initialValues[key].value;
        return acc;
    }, {} as { [key: string]: any }),
    validationSchema,
    onSubmit: (values) => {
        onSubmit(values as T);
    },
});

const Form = ({ initialValues, validationSchema, onSubmit, submitText }: Props<FormValues>) => {

    const formik: FormikProps<FormValues> = useFormikForm<FormValues>({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <Box sx={{ width: 1, maxWidth: 350 }}>
            <form onSubmit={formik.handleSubmit} autoComplete='off' autoCapitalize='off'>
                <Stack spacing={1} >
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
                            helperText={formik.touched[field.id] && formik.errors[field.id] ? String(formik.errors[field.id]) : ' '}
                            margin="normal"
                        />
                    ))}
                </Stack>

                <Button sx={{ mt: 0.5, py: 2, borderRadius: 2 }} color="primary" variant="contained" fullWidth type="submit">
                    {submitText}
                </Button>
            </form>
        </Box>
    );
};

export default Form;
