import {useState} from 'react';

function Task3() {

    const hs = (e) => {
        e.preventDefault()
        const name = e.nativeEvent.submitter.name
        
    }


    return (
        <>
            <form onSubmit={hs}>
                <button type="" name="all">All</button>
                <button type="" name="samsung">Samsung</button>
                <button type="" name="vivo">Vivo</button>
                <button type="" name="oneplus">OnePlus</button>
            </form>
        </>
    )
}

export default Task3