'use client'

import { MyImage } from '@/components/MyImage/MyImage'
import { RootState } from '@/lib/store'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

export function UserStarts() {
    const isVisible = useSelector((state: RootState) => state.visible.isVisible)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isVisible && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }, [isVisible])

    if (!isVisible) return null
    return (
        <article className="mt-40" ref={ref}>
            <h2 id="#IqTestDescription" className="text-center">
                IQ Test
            </h2>
            <section className="flex m-10 p-7 gap-10">
                <MyImage
                    src={'/pictures/start_test.png'}
                    width={400}
                    alt="start the test"
                />
                <span>
                    <p>
                        Вам предстоит выполнить 9 уровней теста, на каждом
                        уровне мы будем исследовать ваше критическое мышление и
                        даже когнетивное искажение восприятия реальности. Просто
                        выбирайте те ответы, которые вы сочтете верными.
                    </p>
                    <Link
                        href="/pages/iqTest"
                        className="bg-amber-200 absolute right-0 left-0 w-fit m-auto"
                    >
                        start the test
                    </Link>
                </span>
            </section>
        </article>
    )
}
