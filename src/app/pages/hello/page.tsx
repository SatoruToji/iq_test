'use client'

import { Nav } from '@/components/Nav'
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
