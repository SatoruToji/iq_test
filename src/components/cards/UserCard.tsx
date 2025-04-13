'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '@/lib/userSlice/UserSlice'

export function UserCard() {
    const [state, setState] = useState({
        age: 0,
        city: '2',
        gender: 'male',
    })
    const router = useRouter()
    const dispatch = useDispatch()

    function handleChange<K extends keyof typeof state>(
        key: K,
        value: (typeof state)[K]
    ) {
        setState((prev) => ({ ...prev, [key]: value }))
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        dispatch(setUserData(state))
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>1. Your Gender:</legend>
                <div>
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={state.gender === 'male'}
                        onChange={(e) => handleChange('gender', e.target.value)}
                    />
                    <label htmlFor="male">male</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={state.gender === 'female'}
                        onChange={(e) => handleChange('gender', e.target.value)}
                    />
                    <label htmlFor="female">female</label>
                </div>
            </fieldset>

            <fieldset>
                <legend>2. Your City:</legend>
                <select
                    name="city"
                    id="city"
                    value={state.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                >
                    <option value="Москва">Москва</option>
                    <option value="Санкт-Петербург">Санкт-Петербург</option>
                    <option value="Екатеринбург">Екатеринбург</option>
                    <option value="Калининград">Калининград</option>
                    <option value="Нальчик">Нальчик</option>
                    <option value="Челябинск">Челябинск</option>
                </select>
            </fieldset>

            <fieldset>
                <legend>3. How old are you?</legend>
                <label htmlFor="age">ur age:</label>
                <input
                    type="range"
                    id="age"
                    min="0"
                    max="9"
                    value={state.age}
                    onChange={(e) =>
                        handleChange('age', Number(e.target.value))
                    }
                />
                <span id="res">{state.age}</span>
            </fieldset>

            <button
                type="submit"

                className="absolute m-auto right-0 left-0 w-fit"
            >
                Continue
            </button>
        </form>
    )
}
