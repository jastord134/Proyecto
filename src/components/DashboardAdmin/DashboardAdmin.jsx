import { useState } from 'react'
import './DashboardAdmin.css'
import usuarios from "../../data/usuarios";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css' // Asegúrate de importar los estilos

const DashboardA = () => {
    let usuario=usuarios.length;
    const dashboardDefault = {
        id: 0,
        ordenes:500,
        usuariosNuevos: usuario,
        ingresosTotales: 4000,
        fecha:"",
    }

    const [dashboard, setDashboard] = useState(dashboardDefault)
    const today = new Date()
    const [startDate, setStartDate] = useState(today)
    const [endDate, setEndDate] = useState(today)

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(JSON.stringify({
            ...dashboard,
            rangoBusqueda: {
                desde: startDate,
                hasta: endDate
            }
        }))
    }
    return ( 
        <form>
            <main>
                <h1>Dashboard</h1>
                <div class="rango">
                    <div>
                        <label>Desde:</label>
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat="yyyy-MM-dd"
                            maxDate={endDate}
                        />
                    </div>
                    <div>
                        <label>Hasta:</label>
                        <DatePicker
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            dateFormat="yyyy-MM-dd"
                            minDate={startDate}
                        />  
                    </div>
                    <button type="submit" onClick={handleSubmit}>Buscar</button>
                </div>
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
        </form>
    )
}

export default DashboardA