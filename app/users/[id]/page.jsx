import Link from "next/link"

async function getUser(id){
    const req = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await req.json()

    return data.data
}   

async function UserPage({params}) {

    const usuario = await getUser(params.id)
  return (
    <div className="bg-slate-400 p-10 rounded-md m-3">
        <img src={usuario.avatar} className="m-auto my-4" />
        <h3 className="text-3xl font-bold">{usuario.id} {usuario.first_name} {usuario.last_name}</h3>
        <p className="my-3">email: {usuario.email}</p>
        <Link className='bg-red-300 p-2 m-5 rounded-md' href='/'>Home</Link>
    </div>
  )
}

export default UserPage