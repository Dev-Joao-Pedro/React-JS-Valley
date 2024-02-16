import { useState } from "react"

const listRender = () => {

    const [list] = useState(['EU', 'TU', 'NOS',])

    const [myObject] = useState([
        {id:1, name:'João', qualidade:'Bonito'},
        {id:2,  name:'Pedro', qualidade:'Gostoso'},
        {id:3, name:'Sousa', qualidade:'Joga bola e Dança'}
    ])

    return (
        <div>
            {list.map((item, i) => (
                <h4 key={i}>{item}</h4>
            ))}
            {myObject.map((user) => (
                <li key={user.id}>{user.name} - {user.qualidade}</li>
            ))}
        </div>
    )
}

export default listRender
