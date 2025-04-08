'use client'

interface Props {
    content: string
}

export function Button({ content }: Props) {
    return <button onClick={() => console.log('here')}>{content}</button>
}
