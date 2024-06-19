import UserService from "@/services/user.services";
import toNumber from "@/utils/str-to-int";
import { Alert, Button, Card, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

const committee = [
  {
    id: 1,
    title: "dsadasdsadsaddasddsdsadsadsaddsadsada",
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
  {
    id: 4,
    title: "dsadasdasdsad4",
    description: "description3",
    topic_count: 7,
    created_date: "2024-06-08T15:35:28.487708+08:00",
    updated_date: "2024-06-08T16:13:05.454249+08:00",
  },
  // Add more items as needed
];

function SecondForm({ onSubmit, submitStatus }) {
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getCommittees = async () => {
    const response = await UserService.getCommittees();
    console.log(response?.data);
    return response.data;
  };

  const {
    data,
    isLoading,
    error: dataError,
    mutate,
    isValidating,
  } = useSWR("committees", getCommittees);

  const handleCheckBoxSubmit = (data) => {
    const committee_list = data.committee_list;
    console.log(committee_list);
    if (committee_list.length === 0 || committee_list === false) {
      setError("required");
    } else if (committee_list.length > 3) {
      setError("succeeded");
    } else if (committee_list.length > 0 && committee_list.length < 3) {
      setError("less");
    } else {
      data.committee_list = toNumber(committee_list);
      onSubmit(data);
      console.log(data);
    }
  };
  console.log(data);

  return (
    <div className="mb-12 p-4 shadow-lg flex flex-col justify-center gap-3 max-w-[40rem] w-full">
      <Typography variant="h6" className="font-montserrat">
        Select 3 Committee to Participate:
      </Typography>
      <form
        onSubmit={handleSubmit(handleCheckBoxSubmit)}
        className="flex flex-col gap-2"
      >
        {error ? (
          <Alert color="red" className="h-10 rounded-none flex items-center">
            {" "}
            {error === "required"
              ? "Please select 3 committees"
              : error === "succeeded"
              ? "You can only select 3 committee"
              : error === "less"
              ? "Select select atleast 3 committee"
              : null}
          </Alert>
        ) : null}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {data?.map((item) => (
            <div key={item.id} className="flex items-center">
              <input
                id={`committee-${item.id}`}
                type="checkbox"
                value={parseInt(item.id)}
                {...register("committee_list", {
                  onChange: () => setError(null),
                })}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={`committee-${item.id}`}
                className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300 max-w-[17rem] break-words"
              >
                {item.title}
              </label>
            </div>
          ))}
        </div>
        <Button type="submit" className="rounded-none mt-2" color="blue">
          {submitStatus === "loading"
            ? "Submitting..."
            : submitStatus === "success"
            ? "Success"
            : "Submit"}
        </Button>
      </form>
    </div>
  );
}

export default SecondForm;
