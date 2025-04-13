'use client'

import { useSelector } from 'react-redux'
import { UnderLineTitle } from '../UnderLineTitle/UnderLineTitle'
import { RootState } from '@/lib/store'

export function IqResult() {
    const {age, city, gender} = useSelector((state: RootState) => state.user)
    console.log(age)
    return (
        <article className="mb-52 m-10 p-10 bg-[#1c1f1f]">
            <h1 className="text-center">
                <UnderLineTitle>Result of IQ Test</UnderLineTitle>
            </h1>
            <section>
                <p>
                    Age: {age} City: {city} Gender: {gender}
                    Ваш результат ниже 100, а может и вообще 0. Для улучшения
                    результатов попробуйте выбрать другой город.
                </p>

            </section>
        </article>
    )
}
