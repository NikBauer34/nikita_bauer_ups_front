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
import { EnterButton, MainParagraph, MainTitle, useInputValidation } from '@/shared'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { LineTitle, SocialIcon } from '@/shared'
import { Badge } from '@/components/ui/badge'

export function Auth() {
	let emailInput = useInputValidation('', {isEmpty: {value: true, message: 'Почта не может быть пустой'}, minLength: {value: 3, message: 'Почта не может быть меньше трех символов'}, maxLength: {value: 12, message: 'Почта не может быть больше 12 символов'}})
  let passwordInput = useInputValidation('', {isEmpty: {value: true, message: 'Пароль не может быть пустым'}, minLength: {value: 3, message: 'Пароль не может быть меньше трех символов'}, maxLength: {value: 12, message: 'Пароль не может быть больше 12 символов'}})
	const router = useRouter()
	let [loading, setLoading] = useState(false)
	const [isReg, setIsReg] = useState(false)
	async function onSubmit(e: SyntheticEvent) {
		e.preventDefault()
		setLoading(true)
		const res = await signIn('credentials', {
			email: 'email',
			password: 'uuoi',
			redirect: false
		})
		setLoading(false)
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
							<MainTitle>{isReg ? 'Зарегистрироваться' : 'Войти'}</MainTitle>
						</CardTitle>
						{/* <CardDescription className='pb-[40px]'> */}
						<MainParagraph>Добро пожаловать! <br />
						Войдите чтобы продолжить</MainParagraph>
						{/* </CardDescription> */}
					</CardHeader>
					<CardContent className={styles.content}>
  
       <Input className="text-[#979797] text-base font-gilroy_semibold" placeholder='Email' {...emailInput}/>
			 {(emailInput.isDirty && emailInput.isEmpty.value) && <Badge variant={'destructive'}>{emailInput.isEmpty.message}</Badge>}
            {(emailInput.isDirty && emailInput.minLengthError.value) && <Badge variant={'destructive'}>{emailInput.minLengthError.message}</Badge>}
            {(emailInput.isDirty && emailInput.maxLengthError.value) && <Badge variant={'destructive'}>{emailInput.maxLengthError.message}</Badge>}
			<Input className="text-[#979797] text-base font-gilroy_semibold" placeholder='Пароль' {...passwordInput}/> 
			{(passwordInput.isDirty && passwordInput.isEmpty.value) && <Badge variant={'destructive'} >{passwordInput.isEmpty.message}</Badge>}
            {(passwordInput.isDirty && passwordInput.minLengthError.value) && <Badge variant={'destructive'}>{passwordInput.minLengthError.message}</Badge>}
            {(passwordInput.isDirty && passwordInput.maxLengthError.value) && <Badge variant={'destructive'}>{passwordInput.maxLengthError.message}</Badge>}
			<EnterButton text='Войти' className='mt-[70px] mb-[33px]' onClick={async (e) => await onSubmit(e)} disabled={loading || (!emailInput.isInputValid || !passwordInput.isInputValid)} loading={loading}/> 
			<LineTitle className='mb-[20px]'>или войти через</LineTitle>
			<SocialIcon text='google' />
					</CardContent>
					<CardFooter className={styles.footer}>
						<span className=' text-[#979797]'>{isReg ? 'Уже есть аккаунт?' : 'Нет аккаунта?'}</span>
						<button onClick={() => setIsReg(!isReg)} className='text-[#2B56F6]'>
							{isReg ? 'Войти' : 'Зарегистрируйтесь'}
						</button>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}