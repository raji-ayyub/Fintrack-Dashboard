// app/page.tsx
import Header from './components/Header';
import SummaryCards from './components/SummaryCards';
import TransactionTable from './components/TransactionTable';

export default function Home() {
  return (
    <>
        <Header />
        <SummaryCards />
        <TransactionTable />
    </>
  );
}
