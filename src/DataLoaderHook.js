import React, {useEffect, useState} from "react"

export default function DataLoaderHook() {
    const [data, setData] = useState([]); 
    useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setData(data)
            }); 
    }, [])

    return (
        <>
            <ul>
                {data.map(item => <li key={item.id}>{item.email}</li>)}
            </ul>
        </>
    )
}