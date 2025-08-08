// app/components/SummaryCards.tsx
interface SummaryCardProps {
  label: string;
  amount: string;
  change: string;
}

const SummaryCard = ({ label, amount, change }: SummaryCardProps) => (
  <div className="bg-gray-100 p-4 rounded w-full">
    <h3 className="text-sm text-gray-500">{label}</h3>
    <p className="text-2xl font-bold">{amount}</p>
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
