'use client'

import { useEffect, useState } from "react";
import { GetName } from "../actions";

export default function Profile(){
    const [name, setName] = useState("")
    useEffect(()=>{
        async function gn() {
            let usern = await GetName()
            setName(usern)
        }
        gn()
    }, [])
    return <div>
        <p>{name}</p>
    </div>
}