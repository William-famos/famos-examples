import { Status } from "../components/Status";
import '../styles/Global.css'

export function History(){
    return(

        <div className="flex-1 p-14 w-full e flex flex-col -mt-[70px]">
            <h1 className="text-[1.5rem] -text--gray-100">Meu Histórico</h1>
            <div className="flex changeded overflow-auto mt-3 max-h-[25.5rem]">
                <table className="border-collapse w-full lover">
                    <thead className="w-full">
                        <tr>
                            <th className="-bg--gray-600 p-4 text-left -text--gray-100 text-[0.875rem] leading-[1.6] rounded-tl-[8px] pl-6">Tarefa</th>
                            <th className="-bg--gray-600 p-4 text-left -text--gray-100 text-[0.875rem] leading-[1.6]" >Duração</th>
                            <th className="-bg--gray-600 p-4 text-left -text--gray-100 text-[0.875rem] leading-[1.6]" >Início</th>
                            <th className="-bg--gray-600 p-4 text-left -text--gray-100 text-[0.875rem] leading-[1.6] rounded-tr-[8px] pr-6">Status</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        <tr>
                            <td className="w-2/4 border-t-[4px] -border-t--gray-800 -bg--gray-700  p-4 text-[0.875rem] leading-[1.6] pl-6">Tarefa</td>
                            <td className="-bg--gray-700 border-t-[4px] -border-t--gray-800 p-4 text-[0.875rem] leading-[1.6]">20 minutos</td>
                            <td className="-bg--gray-700 border-t-[4px] -border-t--gray-800 p-4 text-[0.875rem] leading-[1.6]">Há cerca de 2 mesees</td>
                            <td className="-bg--gray-700 border-t-[4px] -border-t--gray-800 p-4 text-[0.875rem] leading-[1.6] pr-6">
                                <Status text="Concluido" statusColor="green"/>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-2/4 border-t-[4px] -border-t--gray-800 -bg--gray-700  p-4 text-[0.875rem] leading-[1.6] pl-6">Tarefa</td>
                            <td className="-bg--gray-700 border-t-[4px] -border-t--gray-800 p-4 text-[0.875rem] leading-[1.6]">20 minutos</td>
                            <td className="-bg--gray-700 border-t-[4px] -border-t--gray-800 p-4 text-[0.875rem] leading-[1.6]">Há cerca de 2 mesees</td>
                            <td className="-bg--gray-700 border-t-[4px] -border-t--gray-800 p-4 text-[0.875rem] leading-[1.6] pr-6">
                                <Status text="Em andamento" statusColor="yellow"/>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-2/4 border-t-[4px] -border-t--gray-800 -bg--gray-700  p-4 text-[0.875rem] leading-[1.6] pl-6">Tarefa</td>
                            <td className="-bg--gray-700 border-t-[4px] -border-t--gray-800 p-4 text-[0.875rem] leading-[1.6]">20 minutos</td>
                            <td className="-bg--gray-700 border-t-[4px] -border-t--gray-800 p-4 text-[0.875rem] leading-[1.6]">Há cerca de 2 mesees</td>
                            <td className="-bg--gray-700 border-t-[4px] -border-t--gray-800 p-4 text-[0.875rem] leading-[1.6] pr-6">
                                <Status text="Interrompido" statusColor="red"/>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-2/4 border-t-[4px] -border-t--gray-800 -bg--gray-700  p-4 text-[0.875rem] leading-[1.6] pl-6">Tarefa</td>
                            <td className="-bg--gray-700 border-t-[4px] -border-t--gray-800 p-4 text-[0.875rem] leading-[1.6]">20 minutos</td>
                            <td className="-bg--gray-700 border-t-[4px] -border-t--gray-800 p-4 text-[0.875rem] leading-[1.6]">Há cerca de 2 mesees</td>
                            <td className="-bg--gray-700 border-t-[4px] -border-t--gray-800 p-4 text-[0.875rem] leading-[1.6] pr-6">
                                <Status text="Concluido" statusColor="green"/>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-2/4 border-t-[4px] -border-t--gray-800 -bg--gray-700  p-4 text-[0.875rem] leading-[1.6] pl-6">Tarefa</td>
                            <td className="-bg--gray-700 border-t-[4px] -border-t--gray-800 p-4 text-[0.875rem] leading-[1.6]">20 minutos</td>
                            <td className="-bg--gray-700 border-t-[4px] -border-t--gray-800 p-4 text-[0.875rem] leading-[1.6]">Há cerca de 2 mesees</td>
                            <td className="-bg--gray-700 border-t-[4px] -border-t--gray-800 p-4 text-[0.875rem] leading-[1.6] pr-6">
                                <Status text="Concluido" statusColor="green"/>
                            </td>
                        </tr>
        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}