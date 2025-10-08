import { useState } from 'react'
import './DashboardAdmin.css'
const DashboardA = () => {

    const dashboardDefault = {
        id: 0,
        ordenes:500,
        usuariosNuevos: 400,
        ingresosTotales: 200,
        fecha:"",
    }

    const [ dashboard, setDashboard ] = useState(dashboardDefault)

    const handleSubmit = () => {
        alert(JSON.stringify(dashboard))
    }

    return ( 
        <form>
            <main>
                <h1>Dashboard</h1>
                <section>
                    <div class="d">
                        <h2><b>Órdenes:</b></h2>
                        <h2>{dashboard.ordenes}</h2>
                    </div>
                    <div class="d">
                        <h2><b>Usuarios nuevos:</b></h2>
                        <h2>{dashboard.usuariosNuevos}</h2>
                    </div> 
                    <div class="d">
                        <h2><b>Ingresos totales:</b></h2>
                        <h2>S/{dashboard.ingresosTotales}</h2>
                    </div>
                </section>
            </main>
            <button onClick={()=>handleSubmit()}>GUARDAR</button>
        </form>
    )
}

export default DashboardA