import TransactionsTable from "@/components/TransactionsTable";
import ValueContainer from "@/components/ValueContainer";
import { TrendingDown, Wallet } from "lucide-react";

export default function Home() {
    return (
        <main className="mx-10 pb-32">
            <h1 className="font-bold text-3xl mt-10">Dashboard</h1>
            <ValueContainer background="bg-bg-cash">
                <div className="flex items-center gap-3 ml-6 mt-7">
                    <div className="size-14 flex items-center justify-center bg-bg-primary rounded-xl">
                        <Wallet />
                    </div>
                    <h3 className="text-2xl text-gray-detail">Saldo</h3>
                </div>
                <span className="font-bold text-4xl ml-6 mt-7">
                    R$ 3.900,00
                </span>
            </ValueContainer>
            <ValueContainer>
                <div className="flex items-center gap-3 ml-6 mt-7">
                    <div className="size-14 flex items-center justify-center bg-bg-expense-color rounded-xl">
                        <TrendingDown className="text-expense-color" />
                    </div>
                    <h3 className="text-2xl text-gray-detail">Despesas</h3>
                </div>
                <span className="font-bold text-4xl ml-6 mt-7">
                    R$ 3.900,00
                </span>
            </ValueContainer>
            <div className="size-full border border-border-color rounded-[20px] flex flex-col mt-4 px-8">
                <div className="h-32 flex items-center justify-between">
                    <h3 className="text-3xl font-bold">Transações</h3>
                    <span className="text-xl font-bold">Janeiro</span>
                </div>
                <hr className="border-border-color" />
                <div>
                    <h4 className="text-2xl font-bold mt-7 mb-5">Pendentes</h4>
                    <TransactionsTable />
                    <h4 className="text-2xl font-bold mt-7 mb-5">Concluídas</h4>
                    <TransactionsTable />
                </div>
            </div>
        </main>
    );
}
