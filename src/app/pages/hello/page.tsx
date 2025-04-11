import { UserCard } from '@/components/cards/UserCard'
import { Nav } from '@/components/Nav'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    return (
        <>
            <Nav />
            <article>
                <h1>Ваш портрет</h1>
                <section>
                    <p>
                        Для начала, нам необходимо идентифицировать вас чтобы
                        выявить ваш точный <strong>интелект</strong> в
                        соответствии с вашим полом, возрастом.
                    </p>
                    <small>
                        Тест не высмеивает вас по возрастным и гендерным
                        отличиям.
                    </small>
                    <UserCard />
                </section>
            </article>
            <div className="start">
                <Image
                    src={'/pictures/start_test.png'}
                    width={400}
                    height={400}
                    alt="start the test"
                />
                <article>
                    <h2>IQ Test</h2>
                    <section>
                        <p>
                            Вам предстоит выполнить 9 уровней теста, на каждом
                            уровне мы будем исследовать ваше критическое
                            мышление и даже когнетивное искажение восприятия
                            реальности. Просто выбирайте те ответы, которые вы
                            сочтете верными.
                        </p>
                        <Link href="/pages/iqTest">start the game</Link>
                    </section>
                </article>
            </div>
        </>
    )
}
