import Users from "@/components/Users"

async function fetchUsers() {
  const req = await fetch('https://reqres.in/api/users').then(data => data.json())

await new Promise((resolve)=> setTimeout(resolve, 3000))
  return req.data
}

async function HomePage() {
  const users = await fetchUsers()
  console.log(users, 'oli')
  return (
      <>
        <Users users={users}/>
      </>
  )
}

export default HomePage