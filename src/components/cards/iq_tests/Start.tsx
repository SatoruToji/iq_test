import Image from 'next/image'

export function Start() {
    return (
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
                        уровне мы будем исследовать ваше критическое мышление и
                        даже когнетивное искажение восприятия реальности. Просто
                        выбирайте те ответы, которые вы сочтете верными.
                    </p>
                    <button>start the test</button>
                </section>
            </article>
        </div>
    )
}
