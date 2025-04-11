import Image from 'next/image'

interface Props {
    src: string
    alt?: string
    width?: number
}

export function MyImage({ src, width = 100, alt = 'load' }: Props) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={0}
            style={{ height: 'auto' }}
            className="object-contain"
        />
    )
}
