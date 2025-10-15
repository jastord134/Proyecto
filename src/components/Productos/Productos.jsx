import { useState } from 'react'

import productosData from "../../data/productosData"
import FormularioProducto from "./FormularioProducto/FormularioProducto"
import './Productos.css'
import CategoriaProducto from './Categorias/Categorias'

const getCategorias = (productos) => Array.from(new Set(productos.map(p => p.categoria)))
const getPresentaciones =  (productos) => Array.from(new Set(productos.map(p => p.presentacion)))


const Productos = () => {
    const [productos, setProductos] = useState(productosData)
    const [showForm, setShowForm ] = useState(false)
    const [search, setSearch ] = useState("")
    const [showCategorias, setShowCategorias] = useState(false)
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("")
    const [productoEditar, setProductoEditar] = useState(null)

    const presentaciones=getPresentaciones(productos)
    const categorias = getCategorias(productos)
    
    const productosFiltrados = productos.filter(p =>
        p.titulo.toLowerCase().includes(search.toLowerCase()) &&
        (categoriaSeleccionada === "" || p.categoria === categoriaSeleccionada)
    )

    const handleGuardarProducto = (nuevoProducto) => {
        if (productoEditar) {
        setProductos(productos.map(p => p.id === nuevoProducto.id ? nuevoProducto : p))
        setProductoEditar(null)
    } else {
        const maxId = productos.length > 0 ? Math.max(...productos.map(p => p.id)) : 0
        const productoConId = { ...nuevoProducto, id: maxId + 1 }
        setProductos([...productos, productoConId])
    }
    }
    const handleEliminarProducto = (id) => {
        if (window.confirm("¿Seguro que deseas eliminar este producto?")) {
            setProductos(productos.filter(p => p.id !== id))
        }
    }
    const handleEditarProducto = (producto) => {
        setProductoEditar(producto)
        setShowForm(true)
    }

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
                <h1>Listado de productos</h1>
                <div class="botones">
                    <div class="search" >
                        <input
                            type="text"
                            placeholder="Buscar un producto..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <i className="fa fa-search"></i>
                    </div>
                    <button className="boton" onClick={() => setShowCategorias(!showCategorias)}>
                    <i className="fa fa-list"></i>
                    Categorías
                    </button>
                    <button class="boton" onClick={() => {setShowForm(!showForm); setProductoEditar(null);}}>+ Agregar Producto</button>
                </div>
            {showCategorias && <CategoriaProducto
                    categoriaSeleccionada={categoriaSeleccionada}
                    setCategoriaSeleccionada={setCategoriaSeleccionada}
                    setShowCategorias={setShowCategorias}
                />}  
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
                            productosFiltrados.map((p) => (
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
                                        <button className="action-btn" title="Editar" onClick={() => handleEditarProducto(p)}><i className="fa fa-pencil"></i></button>
                                        <button className="action-btn delete" title="Eliminar" onClick={() => handleEliminarProducto(p.id)}><i className="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table> 
                {showForm && <FormularioProducto categorias={categorias}
                    presentaciones={presentaciones}
                    onGuardar={handleGuardarProducto}
                    productoEditar={productoEditar}
                    onCerrar={() => { setShowForm(false); setProductoEditar(null); }}/>}
        </>
    )
}

export default Productos