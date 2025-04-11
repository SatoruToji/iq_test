import Image from 'next/image'

interface Props {
    src: string
    width?: number
}

export function MyImage({ src, width = 100 }: Props) {
    return (
        <Image
            src={src}
            alt="fck off"
            width={width}
            height={0}
            style={{ height: 'auto' }}
            className="object-contain"
        />
    )
}
