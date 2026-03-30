import React from "react"

function Menu(props) {
    return (
        <ul class="nav nav-tabs my-4">
           { props.datos.map( item => <li class ="nav-item">{item}</li> ) }
        </ul>
    )

    
}
export default Menu