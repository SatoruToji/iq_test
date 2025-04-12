import { UserCard } from '@/components/cards/UserCard'
import { UnderLineTitle } from '@/components/underLineTitle/UnderLineTitle'

export function UserPortrain() {
    return (
        <article className="m-10 p-10 bg-[#1c1f1f]">
            <h1 className="text-center">
                <UnderLineTitle bottom='after:bottom-0'>Ваш Портрет</UnderLineTitle>
            </h1>
            <section>
                <p>
                    Для начала, нам необходимо идентифицировать вас чтобы
                    выявить ваш точный <strong>интелект</strong> в соответствии
                    с вашим полом, возрастом.
                </p>
                <small className="opacity-50">
                    Тест не высмеивает вас по возрастным и гендерным отличиям.
                </small>
                <UserCard />
            </section>
        </article>
    )
}
