import Link from 'next/link'
import { Button } from './button/Button'

export function Header() {
    return (
        <header className='border'>
            <article>
                <section>
                    Быть умным - это сдорово!
                    <Link href='../pages/hello'>
                        <Button content="take the test" />
                    </Link>
                </section>
            </article>
        </header>
    )
}
