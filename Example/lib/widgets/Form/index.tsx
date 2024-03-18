import React from 'react';
import { Button, Stack, Box } from '@mui/material';
import { FormikProps } from 'formik';
import { CreateField } from './ui/create-field';
import { FormProps, FormValues } from './model/types';
import { useFormikForm } from './model/useFormikForm';


const Form = ({ initialValues, validationSchema, onSubmit, submitText }: FormProps<FormValues>) => {
    const formik: FormikProps<FormValues> = useFormikForm<FormValues>({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <Box sx={{ width: 1, maxWidth: 350 }}>
            <form onSubmit={formik.handleSubmit} autoComplete='off' autoCapitalize='off'>
                <Stack spacing={1} >
                    <CreateField initialValues={initialValues} formik={formik} />
                </Stack>

                <Button sx={{ mt: 0.5, py: 2, borderRadius: 2 }} color="primary" variant="contained" fullWidth type="submit">
                    {submitText}
                </Button>
            </form>
        </Box>
    );
};

export default Form;
