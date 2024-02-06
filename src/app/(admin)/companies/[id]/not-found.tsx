// import React from 'react';
// import Header from '@/app/components/header';

// export interface PageProps {
//   params: { id: string };
// }

// export default function Page({ params }: PageProps) {
//   return (
//     <div className="py-6 px-10">
//       <p>{`Information about company (${params.id})`}</p>
//     </div>
//   );
// }
'use client';

import React from 'react';
import Link from 'next/link';

export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <div>
      <p>Could not found company</p>
      <Link href="/companies" className="text-blue-500">
        Back to companies
      </Link>
    </div>
  );
}