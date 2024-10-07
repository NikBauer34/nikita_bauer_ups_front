'use client'

import { useRouter } from 'next/navigation'
import { FaYandex } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '@/components/ui/button'


import styles from './Auth.module.scss'

export function Social() {
	const router = useRouter()

	return (
		<div className={styles.social}>
			<Button
				variant='outline'
				onClick={() => router.push(`/auth/google`)}
			>
				<FcGoogle />
				Продолжить через Google
			</Button>
			<Button
				variant='outline'
				onClick={() => router.push(`/auth/yandex`)}
			>
				<FaYandex color='#FC3F1D' />
				Продолжить через Яндекс
			</Button>
		</div>
	)
}