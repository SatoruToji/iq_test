import { Header } from '../components/Header'
import { Nav } from '../components/Nav'

export default function Home() {
    return (
        <div className="">
            <Nav home={true} />
            <Header />
        </div>
    )
}
