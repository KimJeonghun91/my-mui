"use client"

import { Card, CardActions, CardContent, CardHeader, Grid, Button } from '@mui/material';
import RootView from "../../../lib/shared/ui/rootView";
import { Reset } from '../../shared/assets/images';

export default function Home() {
  return (
    <RootView>
      <Grid container sx={{ mt: 4, px: 3 }}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="필터 헤더" />
            <CardContent>
              <Grid container sx={{}}>
                <Grid item xs={4}>
                  <div style={{ backgroundColor: '#ff00ff', height: '40px' }}></div>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ backgroundColor: '#00ffff', height: '40px' }}></div>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ backgroundColor: '#ffff00', height: '40px' }}></div>
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
    </RootView>
  );
}




