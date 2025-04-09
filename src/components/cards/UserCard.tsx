'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Nav } from '../Nav'

export function UserCard() {
    const [age, setAge] = useState<number>(0)
    const [city, setCity] = useState<string>('2')
    const [gender, setGender] = useState<string>('male')
    const router = useRouter()

    function handleAgeChange(event: React.ChangeEvent<HTMLInputElement>) {
        setAge(Number(event.target.value))
    }

    function handleCityChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setCity(event.target.value)
    }

    function handleGenderChange(event: React.ChangeEvent<HTMLInputElement>) {
        setGender(event.target.value)
    }

    return (
        <>
            <form id="form">
                <fieldset>
                    <legend>Your Gender:</legend>
                    <div>
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            // checked={gender === 'male'}
                            onChange={handleGenderChange}
                        />
                        <label htmlFor="male">male</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            checked={gender === 'female'}
                            onChange={handleGenderChange}
                        />
                        <label htmlFor="female">female</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Your City:</legend>
                    <select
                        name="city"
                        id="city"
                        value={city}
                        onChange={handleCityChange}
                    >
                        <option value="1">Москва</option>
                        <option value="2">Санкт-Петербург</option>
                        <option value="3">Екатеринбург</option>
                        <option value="4">Калининград</option>
                    </select>
                </fieldset>

                <fieldset>
                    <legend>How old are you?</legend>
                    <label htmlFor="age">ur age:</label>
                    <input
                        type="range"
                        id="age"
                        min="0"
                        max="9"
                        value={age}
                        onChange={handleAgeChange}
                    />
                    <span id="res">{age}</span>
                </fieldset>
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault()
                        router.push('/pages/iqTest')
                    }}
                >
                    next
                </button>
            </form>
        </>
    )
}
