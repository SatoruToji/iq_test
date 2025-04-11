import { UserCard } from '@/components/cards/UserCard'
import { Nav } from '@/components/Nav'
import Image from 'next/image'
import Link from 'next/link'
import { UserPortrain } from './UserPortrain'
import { UserStarts } from './UserStarts'

export default function Page() {
    return (
        <>
            <Nav />
            <UserPortrain />
            <UserStarts />
        </>
    )
}
