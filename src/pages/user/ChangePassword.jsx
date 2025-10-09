import { useState } from 'react'
import { changePassword } from '../../mockApi'

export default function ChangePassword(){
  const [oldPwd, setOldPwd] = useState('')
  const [newPwd, setNewPwd] = useState('')
  const [confPwd, setConfPwd] = useState('')
  const [msg, setMsg] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    if(!oldPwd || !newPwd || !confPwd){ setMsg('Completa todos los campos'); return }
    if(newPwd !== confPwd){ setMsg('La confirmación no coincide'); return }
    const res = changePassword(oldPwd, newPwd)
    setMsg(res.ok ? 'Password cambiada ✅' : res.msg)
    if(res.ok){ setOldPwd(''); setNewPwd(''); setConfPwd('') }
  }

  return (
    <div className="container" style={{maxWidth:900}}>
      <div className="card" style={{maxWidth:820, margin:'0 auto'}}>
        <h2 className="h2">Cambiar contraseña</h2>
        <form onSubmit={handleSubmit} className="grid-2">
          <div>
            <label>Password actual</label>
            <input className="input" type="password" value={oldPwd} onChange={e=>setOldPwd(e.target.value)} />
          </div>
          <div></div>
          <div>
            <label>Nueva password</label>
            <input className="input" type="password" value={newPwd} onChange={e=>setNewPwd(e.target.value)} />
          </div>
          <div>
            <label>Confirmar nueva password</label>
            <input className="input" type="password" value={confPwd} onChange={e=>setConfPwd(e.target.value)} />
          </div>
          <div className="actions" style={{gridColumn:'1 / -1'}}>
            <button className="btn">Guardar</button>
          </div>
        </form>
        {msg && <p className="muted" style={{marginTop:10}}>{msg}</p>}
      </div>
    </div>
  )
}
