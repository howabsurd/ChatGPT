'use client'

import { useSession , signOut } from "next-auth/react";
import NewChat from "./NewChat";

export default function Sidebar() {
  const {data : session } = useSession();
  console.log(session);
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
        {session &&
          <img onClick={()=> signOut()}src={session.user?.image!} alt="Profile picture" className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50" /> 

        }
    </div>
  )
}
