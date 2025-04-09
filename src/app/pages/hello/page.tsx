import { UserCard } from '@/components/cards/UserCard'
import { Nav } from '@/components/Nav'

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
        </>
    )
}
