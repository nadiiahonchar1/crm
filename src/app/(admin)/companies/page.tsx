// import React from "react";
// import Header from "../../components/header";
// import Toolbar from "../../components/toolbar";
// import SearchInput from "../../components/search-input";
// import AddCompanyButton from "../../components/add-company-button";
// import CompanyTable from "../../components/company-table";
// import CompanyRow from "../../components/company-row";
// import { Status } from "../../components/status-label";

// export interface PageProps{ }
// export default function Page({ }: PageProps) {
//     return (<>
//         <Header>Companies</Header>
//         <Toolbar action={<AddCompanyButton/>}>
//             <SearchInput/>
//         </Toolbar>
//         <CompanyTable>
//             <CompanyRow id={1} category={"Products"} company={"Costco"} status={Status.Pending} promotion={true} country={"USA"} joinedDate={"02.09.2023"}/>
//         </CompanyTable>
//     </>)
// }
import React from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getCompanies } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import CompanyTable from '@/app/components/company-table';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CompanyTable />
    </HydrationBoundary>
  );
}