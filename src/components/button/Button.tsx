'use client'

import { useRouter } from 'next/navigation'

interface Props {
    children: string
    Link?: string
}

export function Button({ children, Link }: Props) {
    const router = useRouter()
    return (
        <>
            <button onClick={() => console.log('here')}>{children}</button>
        </>
    )
}
