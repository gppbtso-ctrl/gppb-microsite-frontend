import { Card } from "@material-tailwind/react";

const CommentsLoader = () => {
    return(
  <Card className="border-[1px] border-blue-gray-700 mt-5 max-w-[90vw] w-full  xl:max-w-[65vw] rounded-sm h-full drop-shadow-md flex flex-col justify-start items-start gap-5  !p-0 ">
  <div role="status" className="flex flex-col justify-start items-start w-full h-full p-5  animate-pulse">
   <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-16 mb-4"></div>
   <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-48 mb-4"></div>
   <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-full max-w-[25rem] mb-4 mt-5"></div>
   <div class="h-px bg-gray-200 w-full mb-5"></div>
   <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-20 mb-4"></div>
   <div class="h-[5rem] bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-6"></div>
   <div class="h-[5rem] bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-6"></div>
   <div class="h-[5rem] bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-6"></div>
   <div class="h-[5rem] bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-6"></div>
   <div class="h-[5rem] bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-5"></div>
  
  </div>
  </Card>
  )
  }

export default CommentsLoader;