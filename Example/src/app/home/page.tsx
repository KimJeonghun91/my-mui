"use client"

import { Card, CardActions, CardContent, CardHeader, Grid, Button, TextField, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import RootView from "../../../lib/shared/ui/rootView";
import { Reset } from '../../shared/assets/images';

export default function Home() {
  const theme = useTheme();

  return (
    <RootView>
      <Grid container sx={{ mt: 4, px: 3 }}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="필터 헤더" />
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
    </RootView >
  );
}




