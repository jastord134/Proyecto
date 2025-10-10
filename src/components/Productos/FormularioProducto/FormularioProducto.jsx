import { useState } from 'react'

const FormularioProducto = () => {

    const productoDefault = {
        id: 0,
        titulo: "",
        descripcion: "",
        precio: 0,
        categoria: "",
        img:""
    }

    const [ producto, setProducto ] = useState(productoDefault)

    const handleSubmit = () => {
        alert(JSON.stringify(producto))
    }

    return ( 
        <form>
            <h2>Nuevo Producto</h2>
            <label>Titulo</label>
            <br></br>
            <input type="text" value={producto.titulo}
                onChange={(e) => setProducto({...producto, titulo: e.target.value})}/>
            <br></br>
            <label>Descripcion</label>
            <br></br>
            <input type="text" value={producto.descripcion}
                onChange={(e) => setProducto({...producto, descripcion: e.target.value})}/>
            <br></br>
            <label>Precio</label>
            <br></br>
            <input type="text" value={producto.precio}
                onChange={(e) => setProducto({...producto, precio: e.target.value})}/>
            <br></br>
            <label>Categoria</label>
            <br></br>
            <input type="text" value={producto.categoria}
                onChange={(e) => setProducto({...producto, categoria: e.target.value})}/>
            <br></br>
            <label>URL de Imagen</label>
            <br></br>
            <input type="text" value={producto.img}
                onChange={(e) => setProducto({...producto, img: e.target.value})}/>
            <br></br>
            <button onClick={()=>handleSubmit()}>GUARDAR</button>
        </form>
    )
}

export default FormularioProducto