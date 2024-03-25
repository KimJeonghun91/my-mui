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
            key={field.id}
            id={field.id}
            name={field.id}
            type={field.type}
            value={formik.values[field.id]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}

            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderWidth: '0 !important',
                    },
                },
                height: '100%',
                display: 'flex',
                flex: 1
            }}
            inputProps={{
                style: {
                    padding: '6px 10px',
                    borderRadius: '0 !important',
                },
            }}
            autoComplete="new-password"
            fullWidth
        />
    )
}
