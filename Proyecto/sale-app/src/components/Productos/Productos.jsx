import { useState } from 'react'

import productos from "../../data/productosData"
import FormularioProducto from "./FormularioProducto/FormularioProducto"
import './Productos.css'

const Productos = () => {

    const [ showForm, setShowForm ] = useState(false)

    return (
        <>
            <h1>Mantenimiento de Productos</h1>

            <button onClick={() => setShowForm(!showForm)}>+ Nuevo Producto</button>
            <br/><br/>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((p) => {
                            return(
                                <tr>
                                    <td>{p.id}</td>
                                    <td>{p.titulo}</td>
                                    <td>{p.descripcion}</td>
                                    <td>{p.precio}</td>
                                    <td>{p.categoria}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {showForm && <FormularioProducto />}
        </>
        

    )
}

export default Productos