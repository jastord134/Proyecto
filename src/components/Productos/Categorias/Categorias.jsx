import { useState } from 'react'
import productos from "../../../data/productosData"
import './Categorias.css'

const CategoriaProducto = ({
    categoriaSeleccionada,
    setCategoriaSeleccionada,
    setShowCategorias
}) => {

    const categorias = Array.from(new Set(productos.map(p => p.categoria)))

    return ( 
        <div className='form'>
                    <div className='content'>
                        <h2 style={{marginTop:0}}>Selecciona una categoría</h2>
                        <select className='select'
                            value={categoriaSeleccionada}
                            onChange={e => setCategoriaSeleccionada(e.target.value)}
                        >
                            <option value="">Todas</option>
                            {categorias.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    <div className='cerrar'>
                            <button className="btn outline" onClick={() => setShowCategorias(false)}>Cerrar</button>
                    </div>
                    </div>
        </div>
    )
}

export default CategoriaProducto