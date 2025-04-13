interface Props {
    children: React.ReactNode
    width?: string
    translate?: string
    bottom?: string
}

export function UnderLineTitle({ children, width='after:w-svh', translate='after:-translate-x-1/2', bottom='after:-bottom-1' }: Props) {
    return (
        <span className={`relative inline-block text-center after:-[''] after:absolute after:left-1/2 ${bottom} ${translate} ${width} after:h-[2px] after-gray`}>
            {children}
        </span>
    )
}
