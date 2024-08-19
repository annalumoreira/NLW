import { MapPin, Calendar, ArrowRight } from 'lucide-react';

export function App() {

  return (
    <div className="h-screen flex items-center justify-center">
    <div className="max-w-3xl w-full px-6 text-center space-y-10">
      <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem</p>
      <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
        <div className='flex items-center gap-2 flex-1'>
        <MapPin className="size-5 text-zinc-400 ml-4"/>
        <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none"/>
        </div>

        <div className='flex items-center gap-2 px-5'>
        <Calendar className="size-5 text-zinc-400 ml-4"/>
        <input type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"/>
        </div>

        <div className='w-px h-6 bg-zinc-400'/>
        
        <div className='flex items-center  gap-2 bg-lime-400 text-lime-950 hover:bg-lime-300 rounded-lg px-5 py-2 font-medium'>
          <button>Continuar</button>
          <ArrowRight className="size-5 text-lime-950"/>
        </div>

      </div>
      <p className=" text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br /> com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">politicas de privacidade</a></p>
    </div>
   </div> 
  )
}
