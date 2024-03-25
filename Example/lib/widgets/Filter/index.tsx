import { Card, CardActions, CardContent, CardHeader, Grid, Button, TextField, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FormikProps } from 'formik';
import { CreateFilterField } from './ui/create-filter-field';
import { FilterFormProps } from './model/types';
import { useFormikForm } from './model/useFormikForm';
import { Reset } from '../../../src/shared/assets/images';
import { FormValues } from '../../shared/type';

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
                            <Grid item xs={4} sx={{ borderWidth: '0px', borderBottomWidth: '1px', borderColor: theme.palette.background.neutral, borderStyle: 'solid' }}>
                                <Box sx={{ flexDirection: 'row', display: 'flex', alignItems: 'center', flex: 1 }}>
                                    <Box sx={{ bgcolor: theme.palette.background.neutral, minWidth: 80, height: 40, px: 2, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                        <Typography sx={{ whiteSpace: 'nowrap', width: 'auto' }} variant="body2">검색</Typography>
                                    </Box>

                                    <TextField
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderWidth: '0 !important'
                                                },
                                            },
                                            height: '100%',
                                            display: 'flex',
                                            flex: 1
                                        }}
                                        inputProps={{
                                            style: {
                                                padding: '6px 10px'
                                            },
                                        }}
                                        autoComplete="new-password"
                                        fullWidth
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={4} sx={{ borderWidth: '0px', borderBottomWidth: '1px', borderColor: theme.palette.background.neutral, borderStyle: 'solid' }}>
                                <Box sx={{ flexDirection: 'row', display: 'flex', alignItems: 'center', flex: 1 }}>
                                    <Box sx={{ bgcolor: theme.palette.background.neutral, minWidth: 80, height: 40, px: 2, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                        <Typography sx={{ whiteSpace: 'nowrap', width: 'auto' }} variant="body2">긴 필터 타이틀 테스트</Typography>
                                    </Box>

                                    <TextField
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderWidth: '0 !important'
                                                },
                                            },
                                            height: '100%',
                                            display: 'flex',
                                            flex: 1
                                        }}
                                        inputProps={{
                                            style: {
                                                padding: '6px 10px'
                                            },
                                        }}
                                        autoComplete="new-password"
                                        fullWidth
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={4} sx={{ borderWidth: '0px', borderBottomWidth: '1px', borderColor: theme.palette.background.neutral, borderStyle: 'solid' }}>
                                <Box sx={{ flexDirection: 'row', display: 'flex', alignItems: 'center', flex: 1 }}>
                                    <Box sx={{ bgcolor: theme.palette.background.neutral, minWidth: 80, height: 40, px: 2, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                        <Typography sx={{ whiteSpace: 'nowrap', width: 'auto' }} variant="body2">긴 필터 타이틀 테스트</Typography>
                                    </Box>

                                    <TextField
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderWidth: '0 !important'
                                                },
                                            },
                                            height: '100%',
                                            display: 'flex',
                                            flex: 1
                                        }}
                                        inputProps={{
                                            style: {
                                                padding: '6px 10px'
                                            },
                                        }}
                                        autoComplete="new-password"
                                        fullWidth
                                    />
                                </Box>
                            </Grid>
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
