import { useState } from "react"

const listRender = () => {

    const [list] = useState(['EU', 'TU', 'NOS',])

    const [myObject] = useState([
        {id:1, name:'João'},
        {id:2,  name:'Pedro'},
        {id:3, name:'Sousa'}
    ])

    return (
        <div>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
            {myObject.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </div>
    )
}

export default listRender
