import { DepositTable, MainTitle } from "@/shared";
import Cash from "./Cash";
import Account from "./Account";

export default function Deposit() {
  return (
    <div className="flex flex-col">
      <Cash />
      <Account />
    </div>
  )
}