export interface FieldConfig {
    id: string;
    value: string;
    label: string;
    type: string;
}

export interface FormValues {
    [key: string]: FieldConfig;
}
