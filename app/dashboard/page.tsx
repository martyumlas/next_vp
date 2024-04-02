import { fetchRevenue } from "../lib/data";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { lusitana } from "../ui/fonts";

//this page is an async component
export default async function Page() {
  const revenue = await fetchRevenue()
 console.log(revenue)
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
      </div>
    </main>
  ) 
}
