import * as React from "react";
import { FormikProps } from "formik";
import { FilterText } from "./filter-text";
import { FormValues } from "../../../shared/type";

interface Props {
    initialValues: FormValues;
    formik: FormikProps<FormValues>;
}

export const CreateFilterField: React.FC<Props> = ({ initialValues, formik }) => {
    return (
        <>
            {Object.values(initialValues).map((field) => (
                field.type === 'text' || field.type === 'password' ? (
                    <FilterText key={field.id} field={field} formik={formik} />
                ) : (
                    <></>
                )
            ))}
        </>
    )
}
