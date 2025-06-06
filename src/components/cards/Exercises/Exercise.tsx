import { MyImage } from '@/components/MyImage/MyImage'
import { Dispatch, SetStateAction } from 'react'

interface Props {
    num: number
    setNum: Dispatch<SetStateAction<number>>
}

export function Exercise({ setNum, num }: Props) {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex gap-1'>
                <button onClick={() => setNum(num + 1)}>
                    <MyImage src={`/pictures/answers${num}/a1.png`} />
                </button>
                <button onClick={() => setNum(num + 1)}>
                    <MyImage src={`/pictures/answers${num}/a2.png`} />
                </button>
                <button onClick={() => setNum(num + 1)}>
                    <MyImage src={`/pictures/answers${num}/a3.png`} />
                </button>
            </div>
            <div className='flex gap-1'>
                <button onClick={() => setNum(num + 1)}>
                    <MyImage src={`/pictures/answers${num}/a4.png`} />
                </button>
                <button onClick={() => setNum(num + 1)}>
                    <MyImage src={`/pictures/answers${num}/a5.png`} />
                </button>
                <button onClick={() => setNum(num + 1)}>
                    <MyImage src={`/pictures/answers${num}/a6.png`} />
                </button>
            </div>
        </div>
    )
}
