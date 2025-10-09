import { useParams, useNavigate } from 'react-router-dom'
import { getOrderById, cancelOrder } from '../../mockApi'

export default function OrderDetail(){
  const { orderId } = useParams()
  const nav = useNavigate()
  const order = getOrderById(orderId)
  if(!order) return <div className="container"><div className="card">No se encontró la orden.</div></div>

  function doCancel(){
    if(confirm('¿Cancelar la orden?')){ cancelOrder(order.id); alert('Orden cancelada'); nav(`/user/orders/${order.id}`, { replace:true }) }
  }

  return (
    <div className="container">
      <div className="card">
        <div className="orderHead">
          <h2 className="h2">Orden <span style={{color:'var(--green)'}}>#{order.id}</span></h2>
          <div className="spacer"></div>
          <div className="right">
            <div>Estado: <span className="badge">{order.status}</span></div>
            <div className="muted" style={{marginTop:6}}>Monto total: <b>S/ {order.totals.total.toFixed(2)}</b></div>
          </div>
        </div>

        <h3 style={{marginTop:10}}>Productos ordenados</h3>
        <table className="table">
          <thead>
            <tr><th>Nombre</th><th>Categoría</th><th>Cantidad</th><th>Total</th></tr>
          </thead>
          <tbody>
            {order.items.map((it,i)=>(
              <tr key={i}>
                <td>{it.name}</td>
                <td className="muted">—</td>
                <td>{it.qty}</td>
                <td>S/ {(it.qty*it.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <div className="page">‹</div><div className="page active">1</div><div className="page">2</div><div className="page">…</div><div className="page">10</div><div className="page">›</div>
        </div>

        <div style={{display:'flex', gap:22, marginTop:14}}>
          <div className="card" style={{flex:1}}>
            <h4>Envío</h4>
            <p>{order.shippingAddress.name}</p>
            <p className="muted">{order.shippingAddress.address} – {order.shippingAddress.city}</p>
          </div>
          <div className="card" style={{flex:1}}>
            <h4>Pago</h4>
            <p>Método: {order.paymentMethod}</p>
          </div>
        </div>

        <div className="actions" style={{marginTop:14}}>
          <button className="btn outline" onClick={doCancel}>Cancelar orden</button>
        </div>
      </div>
    </div>
  )
}
