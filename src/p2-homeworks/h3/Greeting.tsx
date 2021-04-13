import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    offErrors: () => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter, offErrors}) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)
    const errorText = error ? 'нужно ввести имя!!!' : ' ';

    return (
        <div className={s.greeting}>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onEnter}
                   onBlur={offErrors} placeholder={'Name'}/>

            <button onClick={addUser} onBlur={offErrors}>add</button>
            <span>{totalUsers}</span>
            <div className={s.errorText}>{errorText}</div>
        </div>
    )
}

export default Greeting
