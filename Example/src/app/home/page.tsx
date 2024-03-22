"use client"

import { Card, CardActions, CardContent, CardHeader, Grid, Button } from '@mui/material';
import RootView from "../../../lib/shared/ui/rootView";

export default function Home() {
  return (
    <RootView>
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Card>
            <CardHeader title="Carousel Basic 1" />
            <CardContent>
              {/* <CarouselBasic1 data={_carouselsExample} /> */}
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="text" size="small">초기화</Button>
              <Button variant="outlined" size="small">조회하기</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </RootView>
  );
}




