import { Card, CardBody, CardFooter } from "@material-tailwind/react";

const CardsLoading = () => {
  return (
    <>
      <Card className="mt-1 w-96 rounded-xl border border-gray-500 shadow-md ">
        <CardBody>
          <div className="flex justify-between">
            <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-16 mb-4"></div>
          </div>
          <div className="flex flex-col  mt-3">
            <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-full mb-2"></div>
            <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-full mb-2"></div>
            <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-48 mb-2"></div>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <div class="h-7 bg-gray-200 rounded-none dark:bg-gray-700 w-24"></div>
        </CardFooter>
      </Card>
      <Card className="mt-1 w-96 rounded-xl border border-gray-500 shadow-md ">
        <CardBody>
          <div className="flex justify-between">
            <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-16 mb-4"></div>
          </div>
          <div className="flex flex-col  mt-3">
            <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-full mb-2"></div>
            <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-full mb-2"></div>
            <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-48 mb-2"></div>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <div class="h-7 bg-gray-200 rounded-none dark:bg-gray-700 w-24"></div>
        </CardFooter>
      </Card>
      <Card className="mt-1 w-96 rounded-xl border border-gray-500 shadow-md ">
        <CardBody>
          <div className="flex justify-between">
            <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-16 mb-4"></div>
          </div>
          <div className="flex flex-col  mt-3">
            <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-full mb-2"></div>
            <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-full mb-2"></div>
            <div class="h-3 bg-gray-200 rounded-none dark:bg-gray-700 w-48 mb-2"></div>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <div class="h-7 bg-gray-200 rounded-none dark:bg-gray-700 w-24"></div>
        </CardFooter>
      </Card>
    
      </>
  );
};

export default CardsLoading;
