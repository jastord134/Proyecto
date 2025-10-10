import NavBar from './components/NavBar'

export default function App({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
