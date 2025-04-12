import { MyImage } from '@/components/MyImage/MyImage'
import { UnderLineTitle } from '@/components/underLineTitle/UnderLineTitle'
import Image from 'next/image'
import Link from 'next/link'

export function UserStarts() {
    return (
        <article className="mt-40 ">
            <h2 id="#IqTestDescription" className="text-center">
                <UnderLineTitle width="after:w-90">IQ Test</UnderLineTitle>
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
