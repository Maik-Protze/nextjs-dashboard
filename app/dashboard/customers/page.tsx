import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* Add search and create customer functionality here */}
      </div>
      <div className="mt-6">
        <p className="text-gray-500">Customer management coming soon...</p>
      </div>
    </div>
  );
}
