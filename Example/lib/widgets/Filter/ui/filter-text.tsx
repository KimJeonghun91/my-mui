import * as React from "react";
import { TextField } from "@mui/material";
import { FormikProps } from "formik";
import { FieldConfig, FormValues } from "../../../shared/type";

interface Props {
    field: FieldConfig;
    formik: FormikProps<FormValues>;
}

export const FilterText: React.FC<Props> = ({ field, formik }) => {
    return (
        <TextField
            autoComplete="new-password"
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
            FormHelperTextProps={{
                style: { textAlign: 'right', fontSize: '0.65rem' }
            }}
        />
    )
}
