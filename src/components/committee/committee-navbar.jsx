import useAuthStore from '@/store/authStore';
import { Button } from '@material-tailwind/react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const CommitteeNavbar = ({id}) => {
    const router = useRouter()
    const pathname = usePathname()
    const { token, decodedToken, setToken, removeToken } = useAuthStore();
    

  return (
    <div className={`w-full max-w-[60rem] flex  ${decodedToken ? 'justify-between':'justify-around'}`}>
        {" "}
        <Button
          variant="text"
          size="sm"
          className={`relative rounded-none hover:text-blue-400 ${
            pathname === `/committee/${id}`
              ? "pointer-events-none"
              : ""
          }` }
          onClick={() => router.push(`/committee/${id}`)}
        >

          <span
            className={`font-sans text-[1.2em] ${
              pathname === `/committee/${id}`
                ? "text-blue-500"
                : ""
            }`}
          >Provisions</span>
          { pathname === `/committee/${id}` ? <div className="w-full p-0 absolute h-[3px] left-0 -bottom-[0.20rem] bg-blue-700"/> : null}
         
        </Button>{" "}
        <Button
          variant="text"
          size="sm"
          className={`relative rounded-none hover:text-blue-400 ${
            pathname === `/committee/listof-members/${id}`
              ? "pointer-events-none"
              : ""
          }` }
          onClick={() => router.push(`/committee/listof-members/${id}`)}
        >

          <span
            className={`font-sans text-[1.2em] ${
              pathname === `/committee/listof-members/${id}`
                ? "text-blue-500"
                : ""
            }`}
          >List Of Members</span>
          { pathname === `/committee/listof-members/${id}` ? <div className="w-full p-0 absolute h-[3px] left-0 -bottom-[0.20rem] bg-blue-700"/> : null}
         
        </Button>{" "}
        {decodedToken ?  <Button
          variant="text"
          size="sm"
          className={`relative rounded-none hover:text-blue-400 ${
            pathname === `/committee/calendar-activities/${id}`
              ? "pointer-events-none"
              : ""
          }` }
          onClick={() => router.push(`/committee/calendar-activities/${id}`)}
        >
          <span
            className={`font-sans text-[1.2em] ${
              pathname === `/committee/calendar-activities/${id}`
                ? "text-blue-500"
                : ""
            }`}
          >
            Calendar Activities
          </span>{" "}
        
        </Button> : null}
       
      </div>
  )
}

export default CommitteeNavbar;