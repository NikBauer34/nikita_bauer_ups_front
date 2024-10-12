import { BankAccount, BankBadge, SecondaryParagraph } from "@/shared";
interface IBankAccountProps {
  pincode: string, bank_title: string, bank_image: string, account_rubles: number
}
const BankAccountProps: IBankAccountProps[] = [
  {
    pincode: '*9898',
    bank_title: 'T-Банк (Тинькофф)',
    bank_image: 'tinkoff.svg',
    account_rubles: 143000
  },
  {
    pincode: '*9842',
    bank_title: 'Альфа-банк',
    bank_image: 'alfa.svg',
    account_rubles: 106540 
  }
]
export default function Account() {
  return (
    <div className="flex flex-col">
      <SecondaryParagraph className="mb-[20px]">Мои счета</SecondaryParagraph>
      {BankAccountProps.map(el =>

        <BankAccount pincode={el.pincode}
         bank_title={el.bank_title} 
         bank_image={el.bank_image} 
         account_rubles={el.account_rubles}
          />
      )}
      <BankBadge className="w-[334px] self-center">Добавить информацию о счете</BankBadge>
    </div>
  )
}