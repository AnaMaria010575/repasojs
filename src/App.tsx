import img from './assets/imagenes/marie.jpg'
export const App = () => {
    return (
        <>
            <div>........ Página Web........</div><div>
                <main>
                    <h1>Ana María Barroso Rendo</h1>
                    <p>Esta es una página web sencilla creada con HTML.</p>
                    <img src={img} />
                    <button>Convertir</button>
                    <button>Completar</button>
                </main>
            </div>
        </>
    )
}
