import { useFormik } from "formik";
import { FormProps } from "./types";

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
