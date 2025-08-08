"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import DropDownArrow from "../../public/icons/caret-down.svg";

interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}

const initialTransactions: Transaction[] = [
  { id: "1", date: "2023-10-01", remark: "Salary", amount: 3000, currency: "USD", type: "Credit" },
  { id: "2", date: "2023-10-02", remark: "Groceries", amount: -150, currency: "USD", type: "Debit" },
  { id: "3", date: "2023-10-03", remark: "Gym Membership", amount: -50, currency: "USD", type: "Debit" },
  { id: "4", date: "2023-10-04", remark: "Dinner", amount: -40, currency: "USD", type: "Debit" },
  { id: "5", date: "2023-10-05", remark: "Movie Tickets", amount: -30, currency: "USD", type: "Debit" },
  { id: "6", date: "2023-10-06", remark: "Rent", amount: -1200, currency: "USD", type: "Debit" },
  { id: "7", date: "2023-10-07", remark: "Utilities", amount: -100, currency: "USD", type: "Debit" },
  { id: "8", date: "2023-10-08", remark: "Car Payment", amount: -400, currency: "USD", type: "Debit" },
  { id: "9", date: "2023-10-09", remark: "Insurance", amount: -200, currency: "USD", type: "Debit" },
];

const getUnique = (key: keyof Transaction, data: Transaction[]) => {
  return [...new Set(data.map((item) => item[key]))];
};

export default function TransactionTable() {
  const [tab, setTab] = useState("overview");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortAsc, setSortAsc] = useState(true);
  const [filters, setFilters] = useState<Partial<Record<keyof Transaction, string>>>({});
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setTransactions(initialTransactions);
      setLoading(false);
    }, 500);
  }, []);

  const handleSort = () => {
    const sorted = [...transactions].sort((a, b) =>
      sortAsc
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setTransactions(sorted);
    setSortAsc(!sortAsc);
  };

  const applyFilters = (data: Transaction[]) => {
    return data.filter((tx) => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        if (key === "amount") return tx.amount.toString() === value;
        return tx[key as keyof Transaction] === value;
      });
    });
  };

  const handleFilterChange = (key: keyof Transaction, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const renderDropdown = (key: keyof Transaction) => {
    const options = getUnique(key, initialTransactions);
    return (
      <div className="relative inline-flex items-center gap-1">
        <select
          className="text-[15px]  max-w-[5rem] outline-0 focus:border-0 focus:outline-0 rounded p-1 pr-6 appearance-none"
          value={filters[key] || ""}
          onChange={(e) => handleFilterChange(key, e.target.value)}
        >
          <option value="">{key[0].toUpperCase() + key.slice(1)}</option>
          {options.map((opt) => (
            <option key={opt.toString()} value={opt.toString()}>
              {key === "amount" ? `$${Math.abs(Number(opt))}` : opt}
            </option>
          ))}
        </select>
        <Image src={DropDownArrow} alt="v" width={15} height={15} className="absolute right-2" />
      </div>
    );
  };

  const filteredTransactions = applyFilters(transactions);

  const renderTable = () => {
    if (loading) return <p className="mt-4 px-6">Loading transactions...</p>;
    if (filteredTransactions.length === 0) return <p className="mt-4 px-6">No transactions found.</p>;

    return (
      <div className="mt-4 w-full">
        <div className="hidden md:grid grid-cols-8 gap-2 px-6 text-xs text-gray-500 ">
          <div className="border-b py-2 my-0 border-gray-200 col-span-4 flex items-center cursor-pointer" >
            <button className="font-bold  flex items-center justify-center w-4 h-4  rounded p-2 px-3 pb-3" onClick={handleSort}>{sortAsc ? "↑" : "↓"}</button> <span>  {renderDropdown("date")}</span>
          </div>
          <div className="border-b py-2 my-0 border-gray-200 col-span-1">{renderDropdown("remark")}</div>
          <div className="border-b py-2 my-0 border-gray-200 col-span-1">{renderDropdown("amount")}</div>
          <div className="border-b py-2 my-0 border-gray-200 col-span-1">{renderDropdown("currency")}</div>
          <div className="border-b py-2 my-0 border-gray-200 col-span-1">{renderDropdown("type")}</div>
        </div>
        <div className="w-full">
          {filteredTransactions.map((t) => (
            <div key={t.id} className=" px-6 py-2">
              {/* Desktop row */}
              <div className="hidden md:grid grid-cols-8 gap-2 items-center">
                <div className="border-b py-2 my-0 border-gray-200 col-span-4">{t.date}</div>
                <div className="border-b py-2 my-0 border-gray-200 col-span-1">{t.remark}</div>
                <div className="border-b py-2 my-0 border-gray-200 col-span-1">${Math.abs(t.amount)}</div>
                <div className="border-b py-2 my-0 border-gray-200 col-span-1">{t.currency}</div>
                <div className="border-b py-2 my-0 border-gray-200 col-span-1">
                  <div className="w-[74px] px-[8px] py-[4px] rounded-full flex items-center gap-[8px] text-xs font-semibold bg-gray-200">
                    <div
                      className={`w-2 h-2 rounded-full ${t.type === "Credit" ? "bg-[#087A2E]" : "bg-[#C6381B]"}`}
                    ></div>
                    {t.type}
                  </div>
                </div>
              </div>

              {/* Mobile row */}
              <div className="md:hidden flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span>{t.date}</span>
                  <button
                    onClick={() => setExpandedRow(expandedRow === t.id ? null : t.id)}
                    className="text-gray-600"
                  >
                    ...
                  </button>
                </div>
                {expandedRow === t.id && (
                  <div className="mt-2 text-xs text-gray-700 space-y-1 pl-2">
                    <div><strong>Remark:</strong> {t.remark}</div>
                    <div><strong>Amount:</strong> ${Math.abs(t.amount)}</div>
                    <div><strong>Currency:</strong> {t.currency}</div>
                    <div className="flex items-center gap-2">
                      <strong>Type:</strong>
                      <div className="w-[74px] px-[8px] py-[4px] rounded-full flex items-center gap-[8px] text-xs font-semibold bg-gray-200">
                        <div
                          className={`w-2 h-2 rounded-full ${t.type === "Credit" ? "bg-[#087A2E]" : "bg-[#C6381B]"}`}
                        ></div>
                        {t.type}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="px-6 flex flex-col w-full">
      <div className="w-full flex items-center justify-start border-b border-[#49656E]">
        <button
          onClick={() => setTab("overview")}
          className={`w-[121px] flex items-center justify-center px-[28px] py-[12px] ${
            tab === "overview" ? "border-b-2 border-[#4B8B9F] text-[#437D8E]" : ""
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("transactions")}
          className={`w-[121px] flex items-center justify-center px-[28px] py-[12px] ${
            tab === "transactions" ? "border-b-2 border-[#4B8B9F] text-[#437D8E]" : ""
          }`}
        >
          Transactions
        </button>
      </div>

      {tab === "overview" ? (
        <>
          <h2 className="mt-4 ml-4">Summary</h2>
          {renderTable()}
        </>
      ) : (
        <>
          <h2 className="mt-4">Transactions</h2>
          {renderTable()}
        </>
      )}
    </div>
  );
}
