'use client'

import { useRouter } from 'next/navigation'

interface Props {
    content: string
    Link?: string
}

export function Button({ content, Link }: Props) {
    const router = useRouter()
    return (
        <>
            
            <button onClick={() => console.log('here')}>{content}</button>
        </>
    )
}
