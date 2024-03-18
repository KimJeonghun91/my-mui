import * as yup from 'yup';

export interface FieldConfig {
    id: string;
    value: string;
    label: string;
    type: string;
}

export interface FormValues {
    [key: string]: FieldConfig;
}

export interface FormProps<T> {
    initialValues: T;
    validationSchema: yup.ObjectSchema<any>;
    onSubmit: (values: T) => void;
    submitText?: string;
}
