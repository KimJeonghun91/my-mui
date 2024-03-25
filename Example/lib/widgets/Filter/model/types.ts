export interface FilterFormProps<T> {
    headerTitle?: string;
    initialValues: T;
    onSubmit: (values: T) => void;
}
