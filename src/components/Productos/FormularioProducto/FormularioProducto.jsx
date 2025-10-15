import { useState } from 'react'
import { useRef,useEffect } from 'react'
import './FormularioProducto.css'

const productoDefault = {
        id: 0,
        titulo: "",
        presentacion: "",
        descripcion: "",
        categoria: "",
        stock: "",
        img: ""
    }

const FormularioProducto = ({
    categorias,
    presentaciones,
    onGuardar,
    productoEditar,
    onCerrar
}) => {

    const [ producto, setProducto ] = useState(productoDefault)
    const [imagenPreview, setImagenPreview] = useState(productoEditar?.img || "")
    const fileInputRef = useRef(null)

    useEffect(() => {
        if (productoEditar) {
            setProducto(productoEditar)
            setImagenPreview(productoEditar.img || "")
        } else {
            setProducto(productoDefault)
            setImagenPreview("")
        }
    }, [productoEditar])
    
    const handleImagen = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (ev) => {
                setImagenPreview(ev.target.result)
                setProducto({ ...producto, img: ev.target.result })
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!producto.titulo || !producto.categoria || !producto.stock) {
            alert("Completa los campos obligatorios")
            return
        }
        onGuardar(producto)
        onCerrar()
    }

    return ( 
        <div className="form-modal-bg">
            <form className="form-modal" onSubmit={handleSubmit}>
                <h2>{productoEditar ? "Editar producto" : "Agregar un producto"}</h2>
                <div className="form-grid">
                    <div>
                        <label>Nombre del producto</label>
                        <input
                            type="text"
                            placeholder="Nombre del producto"
                            value={producto.titulo}
                            onChange={e => setProducto({ ...producto, titulo: e.target.value })}
                        />
                        <label>Presentación</label>
                        <select
                            value={producto.presentacion}
                            onChange={e => setProducto({ ...producto, presentacion: e.target.value })}
                        >
                            <option value="">Seleccione la presentación</option>
                            {presentaciones.map(pres => (
                                <option key={pres} value={pres}>{pres}</option>
                            ))}
                        </select>
                        <label>Categoría</label>
                        <div className="categoria-row">
                            <select
                                value={producto.categoria}
                                onChange={e => setProducto({ ...producto, categoria: e.target.value })}
                            >
                                <option value="">Seleccione la categoría del producto</option>
                                {categorias.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                        <label>Stock</label>
                        <input
                            type="number"
                            min="0"
                            placeholder="Cantidad en stock"
                            value={producto.stock}
                            onChange={e => setProducto({ ...producto, stock: e.target.value })}
                        />
                        <label>Descripción</label>
                        <textarea
                            placeholder="Descripción del producto..."
                            value={producto.descripcion}
                            onChange={e => setProducto({ ...producto, descripcion: e.target.value })}
                        />
                        
                    </div>
                    <div>
                        <label>Imagen</label>
                        <div className="img-box">
                            {imagenPreview ? (
                                <img src={imagenPreview} alt="preview" />
                            ) : (
                                <div><i className="fa fa-image"></i></div>
                            )}
                            <div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    style={{display:"none"}}
                                    onChange={handleImagen}
                                />
                                <button type="button" onClick={() => fileInputRef.current.click()}>
                                    Seleccionar imagen
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="btn-submit">
                            {productoEditar ? "Actualizar producto" : "Crear producto"}
                        </button>
                        <button type="button" className="btn-cancel" onClick={onCerrar}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormularioProducto