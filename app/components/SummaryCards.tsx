// app/components/SummaryCards.tsx

import Dots from '@/public/icons/div.svg';
import Image from 'next/image';

interface SummaryCardProps {
  label: string;
  amount: string;
  change: string;
}

const SummaryCard = ({ label, amount, change }: SummaryCardProps) => (
  <div className="bg-gray-100 p-[28px]  rounded-[20px] w-full">
    <div className='w-full mb-[18px] flex items-center justify-between'>
      <h3 className="text-sm  font-bold">{label}</h3>
      <Image src={Dots} alt='dots' width={40} height={40} className="w-[20px] text-gray-400" />
    </div>
    <p className="text-2xl font-bold mb-[10px]">{amount}</p>
    <p className="text-green-600 text-sm">{change}</p>
  </div>
);

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 px-6">
      <SummaryCard label="Total Balance" amount="$12,345" change="+5%" />
      <SummaryCard label="Total Credits" amount="$7,890" change="+3%" />
      <SummaryCard label="Total Debits" amount="$4,455" change="-2%" />
      <SummaryCard label="Transactions" amount="$150" change="+10%" />
    </div>
  );
}
