
import React from 'react'

interface User {
  id: number,
  name: string,
  email: string
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <>
      <h1> All users</h1>
      {
        users.map((user) =>
          <>
            <p>{user.name}</p>
          </>
        )
      }
    </>
  )
}

export default UsersPage
