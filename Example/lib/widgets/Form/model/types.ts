import * as yup from 'yup';

export interface FormProps<T> {
    initialValues: T;
    validationSchema?: yup.ObjectSchema<any>;
    onSubmit: (values: T) => void;
    submitText?: string;
}
