import { Helmet } from 'react-helmet-async'

import { DaysOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { MonthRevenueCard } from './month-recenue-card'
export function Dashboard() {
  return (
    <>
      <Helmet title="DashBoard" />
      <div className="flex flex-col gap-4">
        <h1 className="tracking-tigh text-3xl font-bold">DashBoard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DaysOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
      </div>
    </>
  )
}
