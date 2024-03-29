"use client"

import RootView from "../../../lib/shared/ui/rootView";
import Filter from '../../../lib/widgets/Filter';
import { initialValues } from "./model/loginInfo";
import { FormValues } from '../../../lib/shared/type';

export default function Home() {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
    // router.push(PrivateRoutes.Home);
  }

  return (
    <RootView>
      <Filter
        headerTitle="헤더 타이틀"
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </RootView>
  );
}
