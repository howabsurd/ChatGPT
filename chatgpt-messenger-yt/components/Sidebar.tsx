import NewChat from "./NewChat";

export default function Sidebar() {
  return (
    <div className='flex flex-col h-screen p-2'>
        <div className='flex-1'>
            <div>
                 <NewChat />
            
            <div>  
                {/* <ModelSelection /> */}
                </div>
                {/* {Map through the chatRows} */}
            </div>
        </div>
    </div>
  )
}
