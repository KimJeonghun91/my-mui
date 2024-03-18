import * as React from "react";
import { FormikProps } from "formik";
import { FieldText } from "./field-text";
import { FormValues } from "../model/types";

interface Props {
    initialValues: FormValues;
    formik: FormikProps<FormValues>;
}

export const CreateField: React.FC<Props> = ({ initialValues, formik }) => {
    return (
        <>
            {Object.values(initialValues).map((field) => (
                field.type === 'text' || field.type === 'password' ? (
                    <FieldText key={field.id} field={field} formik={formik} />
                ) : (
                    <></>
                )
            ))}
        </>
    )
}
