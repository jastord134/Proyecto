import { useState } from 'react'
import { addCategory, getProducts } from '../../mockApi'
import { useNavigate } from 'react-router-dom'

export default function CategoryForm(){
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [productIds, setProductIds] = useState([])
  const [msg, setMsg] = useState('')
  const nav = useNavigate()
  const products = getProducts()

  function toggle(pid){
    setProductIds(p => p.includes(pid) ? p.filter(x=>x!==pid) : [...p, pid])
  }
  function handleSubmit(e){
    e.preventDefault()
    if(!name.trim() || !description.trim()){ setMsg('Completa nombre y descripción'); return }
    addCategory({ name:name.trim(), description:description.trim(), imageUrl:imageUrl.trim(), productIds })
    setMsg('Categoría registrada ✅'); setTimeout(()=> nav('/admin/categories'), 700)
  }

  return (
    <div className="container">
      <div className="card" style={{maxWidth:760, margin:'0 auto'}}>
        <h2 className="h2">Nueva categoría</h2>
        <form onSubmit={handleSubmit} style={{display:'grid', gap:14}}>
          <div className="grid-2">
            <div>
              <label>Nombre</label>
              <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Nombre de la categoría"/>
            </div>
            <div>
              <label>URL de imagen (opcional)</label>
              <input className="input" value={imageUrl} onChange={e=>setImageUrl(e.target.value)} placeholder="https://..."/>
            </div>
          </div>
          <div>
            <label>Descripción</label>
            <textarea className="textarea" value={description} onChange={e=>setDescription(e.target.value)} placeholder="Descripción de la categoría..."/>
          </div>
          <div>
            <label>Productos (simple)</label>
            <div className="card" style={{padding:12}}>
              {products.map(pr=>(
                <label key={pr.id} style={{display:'inline-flex', gap:8, marginRight:14, marginBottom:8}}>
                  <input type="checkbox" checked={productIds.includes(pr.id)} onChange={()=>toggle(pr.id)} />
                  {pr.name}
                </label>
              ))}
            </div>
          </div>
          <div className="actions">
            <button type="button" className="btn outline" onClick={()=>nav('/admin/categories')}>Cancelar</button>
            <button className="btn">Crear categoría</button>
          </div>
        </form>
        {msg && <p className="muted" style={{marginTop:10}}>{msg}</p>}
      </div>
    </div>
  )
}
