import * as React from "react";
import { FormikProps } from "formik";
import { FilterText } from "./filter-text";
import { FormValues } from "../../../shared/type";
import FilterWrapper from "./filter-wrapper";

interface Props {
    initialValues: FormValues;
    formik: FormikProps<FormValues>;
}

export const CreateFilterField: React.FC<Props> = ({ initialValues, formik }) => {
    return (
        <>
            {Object.values(initialValues).map((field) =>
                <FilterWrapper key={field.id} filterLabel={field.label}>
                    {
                        field.type === 'text' || field.type === 'password' ? (
                            <FilterText field={field} formik={formik} />
                        ) : (
                            <></>
                        )
                    }
                </FilterWrapper>
            )}
        </>
    )
}
