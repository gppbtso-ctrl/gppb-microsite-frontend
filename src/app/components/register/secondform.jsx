import toNumber from "@/app/utils/str-to-int";
import { Button, Card, Typography } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";

function SecondForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const committee = [
    {
      id: 1,
      title: "test1",
      description: "dsadsadsad",
      topic_count: 3,
      created_date: "2024-06-06T15:35:28.487708+08:00",
      updated_date: "2024-06-06T16:13:05.454249+08:00",
    },
    {
      id: 2,
      title: "test2",
      description: "description2",
      topic_count: 5,
      created_date: "2024-06-07T15:35:28.487708+08:00",
      updated_date: "2024-06-07T16:13:05.454249+08:00",
    },
    {
      id: 3,
      title: "test3",
      description: "description3",
      topic_count: 7,
      created_date: "2024-06-08T15:35:28.487708+08:00",
      updated_date: "2024-06-08T16:13:05.454249+08:00",
    },
    // Add more items as needed
  ];

  const onSubmit = (data) => {
    const committee_list = data.committee_list;
    data.committee_list = toNumber(committee_list);
    console.log(data.committee_list);
  };

  return (
    <Card className="mb-12 p-4 shadow-lg flex flex-col justify-center gap-3 max-w-[30rem] w-full">
      <Typography variant="h6" className="font-montserrat">
        Select 3 Committee to Participate:
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-4">
          {committee.map((item) => (
            <div key={item.id} className="flex items-center">
              <input
                id={`committee-${item.id}`}
                type="checkbox"
                value={parseInt(item.id)}
                {...register("committee_list")}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={`committee-${item.id}`}
                className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300"
              >
                {item.title}
              </label>
            </div>
          ))}
        </div>
        <Button type="submit" className="rounded-none" color="blue">
          Proceed
        </Button>
      </form>
    </Card>
  );
}

export default SecondForm;
