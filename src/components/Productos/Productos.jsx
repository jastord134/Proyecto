import { useState } from 'react'

import productos from "../../data/productosData"
import FormularioProducto from "./FormularioProducto/FormularioProducto"
import './Productos.css'

const Productos = () => {

    const [ showForm, setShowForm ] = useState(false)

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
                <h1>Listado de productos</h1>
                <button class="botones" onClick={() => setShowForm(!showForm)}>+ Agregar Producto</button>
                <br /><br />
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Presentación</th>
                            <th>Descripción</th>
                            <th>Categoría</th>
                            <th>Stock</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productos.map((p) => (
                                <tr key={p.id}>
                                    <td>
                                        <img src={p.img} alt={p.titulo} className="product-img" />
                                    </td>
                                    <td className="id-cell">#{p.id}</td>
                                    <td>{p.titulo}</td>
                                    <td>{p.presentacion}</td>
                                    <td>{p.descripcion}</td>
                                    <td>{p.categoria}</td>
                                    <td>{p.stock}</td>
                                    <td>
                                        <button className="action-btn"><i className="fa fa-pencil"></i></button>
                                        <button className="action-btn delete"><i className="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table> 
                {showForm && <FormularioProducto />}
        </>
    )
}

export default Productos