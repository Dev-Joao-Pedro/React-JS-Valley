import { useState } from "react"

const listRender = () => {

    const [list] = useState(['EU', 'TU', 'NOS'])

    return (
        <div>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </div>
    )
}

export default listRender
