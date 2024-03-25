import { FormikProps, useFormik } from "formik";
import { FormValues } from "../../../shared/type";
import { FormProps } from "../../Form/model/types";

export const useFormikForm = <T extends Record<string, any>>({
    initialValues,
    validationSchema,
    onSubmit,
}: FormProps<T>) => useFormik({
    initialValues: Object.keys(initialValues).reduce((acc, key) => {
        acc[key] = initialValues[key].value;
        return acc;
    }, {} as { [key: string]: any }),
    validationSchema,
    onSubmit: (values) => {
        onSubmit(values as T);
    },
});

export const hasFormikErrors = (formik: FormikProps<FormValues>): boolean => {
    return (
        Object.keys(formik.errors).length > 0 &&
        Object.keys(formik.touched).some(key => formik.touched[key])
    );
};
