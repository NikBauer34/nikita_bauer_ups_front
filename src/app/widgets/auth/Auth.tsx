'use client'

import Image from 'next/image'
import { SyntheticEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { Form } from '@/components/ui/form'

import styles from './Auth.module.scss'
import { AuthFields } from './AuthFields'
import { Social } from './Social'
import { EnterButton, MainParagraph, MainTitle } from '@/shared'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export function Auth() {
	const router = useRouter()
	const [isReg, setIsReg] = useState(false)
	async function onSubmit(e: SyntheticEvent) {
		e.preventDefault()
		const res = await signIn('credentials', {
			email: 'email',
			password: 'uuoi',
			redirect: false
		})
		router.push('/')
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Image
					src='/assets/icons/vector.svg'
					alt='logo vector'
					width={100}
					height={100}
				/>
			</div>
			<div className={styles.right}>
				<Card className={styles.card}>
				<Image
					src='/assets/icons/vector-black.svg'
					alt='logo vector'
					width={100}
					height={100}
				/>
					<CardHeader className={styles.header}>
						<CardTitle>
							<MainTitle text={isReg ? 'Зарегистрироваться' : 'Войти'} />
						</CardTitle>
						{/* <CardDescription className='pb-[40px]'> */}
						<MainParagraph text='Добро пожаловать!' />
<MainParagraph text='
Войдите чтобы продолжить' />
						{/* </CardDescription> */}
					</CardHeader>
					<CardContent className={styles.content}>
  
       <Input className="text-[#979797] text-base font-gilroy_semibold" placeholder='Email'/>
			<div className='pb-[10px]' />
			<Input className="text-[#979797] text-base font-gilroy_semibold" placeholder='Email'/> 
			<EnterButton text='Войти' className='mt-[30px] mb-[33px]' onClick={async (e) => await onSubmit(e)}/> 
			<div className="float-left w-[100%] border-t-[1px] border-solid border-[#ccc] text-center text-[#979797]"><b className='inline-block relative top-[-12px] w-[140px] h-[16px] text-center bg-[#fff] z-1 font-gilroy_semibold'>или войти через</b></div>
			<div className=' w-full flex justify-center'>
			<div className="h-14 p-3.5 bg-white rounded-[15px] border border-[#e0e0e0] justify-start items-start gap-2.5 inline-flex justify-self-center">
  <div className="w-7 h-7 justify-center items-center flex">
    <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
		<Image src={'/assets/icons/googl.svg'} alt='google' width={30} height={30} />
  </div>
</div>
</div>
					</CardContent>
					<CardFooter className={styles.footer}>
						<span className=' text-[#979797]'>{isReg ? 'Уже есть аккаунт?' : 'Еще нет аккаунта?'}</span>
						<button onClick={() => setIsReg(!isReg)} className='text-[#2B56F6]'>
							{isReg ? 'Войти' : 'Создать'}
						</button>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}