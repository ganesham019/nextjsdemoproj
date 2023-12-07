import { notFound } from 'next/navigation'
import React from 'react'
interface props {
    params: { id: number }
}
const GetSingleUser = ({ params: { id } }: props) => {
    if (id > 10) notFound();
    return (
        <div>
            <h1> User Detail {id} </h1>
            <h2> User User</h2>
        </div>
    )
}

export default GetSingleUser
