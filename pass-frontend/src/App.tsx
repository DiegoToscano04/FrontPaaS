import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-50 gap-4">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          PaaS Core Education 🚀
        </h1>
        <p className="text-slate-500">
          Entorno configurado con React + Vite + Shadcn/ui
        </p>
      </div>
      
      {/* 
        AQUÍ ESTÁ EL CAMBIO: Usamos el componente <Button> 
        en lugar de un <button> normal. 
        Nota que las clases ya están aplicadas por Shadcn.
      */}
      <Button>
        Botón de Prueba
      </Button>

    </div>
  )
}

export default App