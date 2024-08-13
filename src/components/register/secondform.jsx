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
    if (committee_list.length === 0 || committee_list === false) {
      setError("required");
    } else if (committee_list.length > 3) {
      setError("succeeded");
    } else if (committee_list.length > 0 && committee_list.length < 3) {
      setError("less");
    } else {
      data.committee_list = toNumber(committee_list);
      onSubmit(data);

    }
  };


  return (
    <div class="mb-5 p-4 bg-white/95 rounded-md backdrop-filter shadow-lg flex flex-col  justify-center gap-3 w-[min(97%,30rem)] ">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {data?.map((item) => (
            <div key={item.id} className="flex items-center">
              <input
                id={`committee-${item.id}`}
                type="checkbox"
                value={parseInt(item.id)}
                {...register("committee_list", {
                  onChange: () => setError(null),
                })}
                className="w-4 h-4 shrink-0 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
        
  <div class="w-full mt-2">
    <Typography variant="normal" className=" font-lead font-semibold antialiased">Please provide a brief statement of your qualifications and contributions you can offer.</Typography>
  <div class="relative w-full mt-1">
    <textarea
      class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
      {...register("brief_statement")}
      placeholder="" required></textarea>
    <label
      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Enter Text
    </label>
  </div>
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
