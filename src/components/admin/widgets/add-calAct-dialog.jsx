import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Textarea,
  Input,
  Spinner,
} from "@material-tailwind/react";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import UserService from "@/services/user.services";
import useSWR, { useSWRConfig } from "swr";
import AuthService from "@/services/auth";

const AddCalcActDialog = ({ open, handleOpen, id }) => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitStatus("loading");
    try {
      const response = await UserService.addCalendarAct(id, data);
      setSubmitStatus("success");
      mutate("comTopics");
      setTimeout(() => {
        handleOpen();
        setSubmitStatus(null);
        reset();
        mutate("comCalendarActivies");
      }, 500);
    } catch (error) {
      setSubmitStatus("error");
    }
    console.log(id, data);
  };

  return (
    <Dialog open={open} handler={handleOpen} className="rounded-none">
      <DialogHeader>
        <Typography variant="h5" className="font-montserrat">
          Add Topic
        </Typography>
      </DialogHeader>
      <DialogBody>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="topicForm"
          className="flex flex-col gap-3"
        >
          <div class="relative w-full min-w-[200px] h-10">
            <input
              class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-none border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
              required
              {...register("title", { required: true })}
            />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-none before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-none after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              Title
            </label>
          </div>
          <div className="w-full flex gap-2 justify-between">
            <div className="w-full">
              <div class="relative w-full min-w-[200px]">
                <Typography>Start Date</Typography>
                <input
                  type="datetime-local"
                  {...register("start", { required: true })}
                />
              </div>
            </div>
            <div className="w-full">
              <div class="relative w-full min-w-[200px]">
                <Typography>Start Date</Typography>
                <input
                  type="datetime-local"
                  {...register("end", { required: true })}
                />
              </div>
            </div>
          </div>
        </form>
      </DialogBody>
      <DialogFooter className="flex gap-2">
        <Button
          variant="text"
          onClick={handleOpen}
          className="mr-1 rounded-none"
        >
          <span className="font-montserrat">Cancel</span>
        </Button>
        <Button
          color="blue"
          type="submit"
          form="topicForm"
          className="rounded-none max-h-10 flex items-center"
        >
          {submitStatus === "loading" ? (
            <Spinner color="white" className=" w-12 h-5"></Spinner>
          ) : submitStatus === "success" ? (
            <span className="font-montserrat">Success</span>
          ) : (
            <span className="font-montserrat">Submit</span>
          )}
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default AddCalcActDialog;
