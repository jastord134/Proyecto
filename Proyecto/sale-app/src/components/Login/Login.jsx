import { useState } from 'react'
import usuarios from "../../data/usuarios";
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()

    const [ usuario, setUsuario ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleLogin = () => {
        const resultado = usuarios.find((u) => u.username.toLowerCase() === usuario.toLowerCase() 
                                        && u.password.toLowerCase() === password.toLowerCase())
        
        if (resultado) {
            localStorage.setItem("usuario", JSON.stringify(resultado));
            navigate('/inicio')
        }
        else
            alert('Usuario o password incorrecto!')
    }

    return (
        <>
            <h1>Venta de Garage</h1>
            <h2>Inicio de Sesion</h2>
            <label>Usuario:</label>
            <br/>
            <input type="text" id="usuario" value={usuario} 
                onChange={(e) => setUsuario(e.target.value)}/>
            <br/>
            <label>Password:</label>
            <br/>
            <input type="password" id="password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button onClick={() => handleLogin()}>INGRESAR</button>
        </>
    )
}

export default Login;