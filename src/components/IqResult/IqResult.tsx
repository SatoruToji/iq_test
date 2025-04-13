'use client'

import { useSelector } from 'react-redux'
import { UnderLineTitle } from '../UnderLineTitle/UnderLineTitle'
import { RootState } from '@/lib/store'
import { GetRandomNum } from '@/lib/functions/getRandomNum'
import { useEffect, useState } from 'react'

export function IqResult() {
    const { age, city, gender } = useSelector((state: RootState) => state.user)
    const [iq, setIq] = useState(0)
    useEffect(() => {
        if (city === 'Екатеринбург') {
            setIq(GetRandomNum(1000))
        } else if (city === 'Челябинск') {
            setIq(GetRandomNum(500))
        } else {
            setIq(GetRandomNum(100))
        }
    }, [city])

    return (
        <article className="mb-52 m-10 p-10 bg-[#1c1f1f]">
            <h1 className="text-center">
                <UnderLineTitle>Result of IQ Test</UnderLineTitle>
            </h1>
            <section>
                <h2 className="text-center mt-5 mb-5">{iq} iq</h2>
                <p>
                    Поздравляю! Вы прошли iq тест и теперь вы знаете свой
                    настоящий уровень интелекта, а если вы сомневаетесь в наших
                    выводах, вы можете спокойно перепройти тест или
                    воспользоваться другим браузером.
                </p>
            </section>
        </article>
    )
}
