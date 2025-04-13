'use client'

import { Exercise } from '@/components/cards/Exercises/Exercise'
import { IqResult } from '@/components/IqResult/IqResult'
import { MyImage } from '@/components/MyImage/MyImage'
import { Nav } from '@/components/Nav'
import { UnderLineTitle } from '@/components/UnderLineTitle/UnderLineTitle'
import { useState } from 'react'

export default function Page() {
    const [num, setNum] = useState<number>(1)

    return (
        <div className="start">
            <Nav />
            <article>
                <section>
                    <h2 className={`${num < 9 ? '' : 'hidden'}`}>
                        <UnderLineTitle translate="after:translate-x-1">
                            Exercise {num}
                        </UnderLineTitle>
                    </h2>
                    <section>
                        {num < 9 ? (
                            <div className="flex justify-between p-7 gap-9">
                                <MyImage
                                    src={`/pictures/questions/${num}.png`}
                                    width={500}
                                />
                                <section className="relative top-0 right-0 bottom-0 left-0 m-auto">
                                    <h3>Select answers</h3>
                                    <Exercise num={num} setNum={setNum} />
                                </section>
                            </div>
                        ) : (
                            <IqResult />
                        )}
                    </section>
                </section>
            </article>
        </div>
    )
}
