import { Card, CardActions, CardContent, CardHeader, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FormikProps } from 'formik';
import { CreateFilterField } from './ui/create-filter-field';
import { FilterFormProps } from './model/types';
import { useFormikForm } from './model/useFormikForm';
import { FormValues } from '../../shared/type';
import { Reset } from '../../shared/assets/images';

const Filter = ({
    headerTitle,
    initialValues,
    onSubmit,
}: FilterFormProps<FormValues>) => {

    const theme = useTheme();
    const formik: FormikProps<FormValues> = useFormikForm<FormValues>({
        initialValues,
        onSubmit,
    });

    return (
        <Grid container sx={{ mt: 4, px: 3 }}>
            <Grid item xs={12}>
                <Card>
                    {headerTitle && <CardHeader title={headerTitle} />}

                    <CardContent>
                        <Grid container sx={{ overflow: 'hidden', borderRadius: (theme.shape.borderRadius * 2) + 'px', borderWidth: '1px', borderColor: theme.palette.background.neutral, borderStyle: 'solid' }}>
                            <CreateFilterField initialValues={initialValues} formik={formik} />
                        </Grid>
                    </CardContent>

                    <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            sx={{ mr: 1 }}
                            variant="text"
                            size="small"
                            endIcon={<Reset />}
                        >
                            초기화
                        </Button>

                        <Button
                            variant="outlined"
                            size="small"
                        >
                            조회하기
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Filter;
