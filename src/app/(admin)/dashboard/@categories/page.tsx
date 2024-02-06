// import React from 'react';
// import { getSummaryCategories } from '@/lib/api';
// import StatCard, { StatCardType } from '@/app/components/stat-card';
// import DashboardCard from '@/app/components/dashboard-card';

// export interface PageProps {}

// export default async function Page({}: PageProps) {
//   const data = await getSummaryCategories();

//   return (
//     <DashboardCard label="Categories of companies">
//       <div className="grid grid-cols-12 gap-3 pb-5 px-5">
//         {data.map(({ categoryId, categoryTitle, count }) => (
//           <div key={categoryId} className="col-span-3">
//             <StatCard
//               type={StatCardType.Dark}
//               label={categoryTitle}
//               counter={count}
//             />
//           </div>
//         ))}
//       </div>
//     </DashboardCard>
//   );
// }

import React from 'react';
import { getCategories, getCompanies } from '@/lib/api';
import getCountById from '@/lib/utils/getCountById';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import DashboardCard from '@/app/components/dashboard-card';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const categories = await getCategories();
  const companies = await getCompanies();

  const counts = getCountById(companies, 'categoryId');

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories.map(({ id, title }) => (
          <div key={id} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={title}
              counter={counts[id] || 0}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}