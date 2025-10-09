import { useEffect, useState } from 'react'
import { getCategories } from '../../mockApi'

export default function CategoryList(){
  const [q, setQ] = useState('')
  const [data, setData] = useState([])
  useEffect(()=>{ setData(getCategories({q})) }, [q])

  return (
    <div className="container">
      <div className="card">
        <h2 className="h2">Listado de categorías</h2>
        <div className="search" style={{maxWidth:'420px', margin:'10px 0 14px 0'}}>
          <input placeholder="Buscar un producto..." value={q} onChange={e=>setQ(e.target.value)} />
          <span>🔎</span>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th style={{width:140, textAlign:'center'}}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map(c=>(
              <tr key={c.id}>
                <td><b>{c.name}</b></td>
                <td className="muted">{c.description}</td>
                <td>
                  <div className="row-actions" style={{justifyContent:'center'}}>
                    <a className="view" href={`/admin/categories/${c.id}`}>👁️ Ver</a>
                    <a className="edit" href="#" onClick={(e)=>e.preventDefault()}>✏️</a>
                    <a className="trash" href="#" onClick={(e)=>e.preventDefault()}>🗑️</a>
                  </div>
                </td>
              </tr>
            ))}
            {data.length===0 && (
              <tr><td colSpan={3} className="muted">Sin resultados</td></tr>
            )}
          </tbody>
        </table>

        <div className="pagination">
          <div className="page active">1</div><div className="page">2</div><div className="page">3</div>
          <div className="page">›</div>
        </div>
      </div>
    </div>
  )
}
