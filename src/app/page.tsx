import { Header } from '../components/Header'
import { Nav } from '../components/Nav'

export default function Home() {
    return (
        <>
            <Nav home={true} />
            <Header />
        </>
    )
}
