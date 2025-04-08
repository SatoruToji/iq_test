import { UserCard } from "@/app/components/cards/UserCard";

export default function Page() {
    return (
        <>
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
