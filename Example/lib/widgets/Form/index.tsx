import { Button, Stack, Box } from '@mui/material';
import { FormikProps } from 'formik';
import { CreateField } from './ui/create-field';
import { FormProps, FormValues } from './model/types';
import { hasFormikErrors, useFormikForm } from './model/useFormikForm';


const Form = ({ initialValues, validationSchema, onSubmit, submitText }: FormProps<FormValues>) => {
    const formik: FormikProps<FormValues> = useFormikForm<FormValues>({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <Box sx={{ width: 1 }}>
            <form onSubmit={formik.handleSubmit} autoComplete='off' autoCapitalize='off'>
                <Stack spacing={0.5} >
                    <CreateField initialValues={initialValues} formik={formik} />
                </Stack>

                <Button
                    fullWidth
                    sx={{ mt: 0.8, py: 2, borderRadius: 2 }}
                    color={"primary"}
                    variant="contained"
                    type="submit"
                    disabled={hasFormikErrors(formik)}
                >
                    {submitText}
                </Button>
            </form>
        </Box>
    );
};

export default Form;
