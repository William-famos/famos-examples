const STATUS_COLORS = {
yellow: "#fba94c",
green: "#00875f",
red:"#ab222e"
} as const

interface StatusProps{
    text:string,
    statusColor: keyof typeof STATUS_COLORS
}

export function Status(prop:StatusProps){
    return(
        <span className='flex items-center gap-2 '>
            <div className={`w-2 h-2 rounded-[9999px] ${prop.statusColor == 'red'? "-bg--red-500" : "" || prop.statusColor == 'yellow'? "-bg---yellow-500" : "" || prop.statusColor == 'green'? "-bg--green-500" : ""}`}></div>
            <p>{prop.text}</p>
        </span>
    )
}