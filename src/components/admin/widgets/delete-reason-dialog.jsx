import UserService from "@/services/user.services";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
  Textarea,
  Spinner,
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWR, { useSWRConfig } from "swr";

export default function DeleteReasonDialog({
  openReason,
  handleOpenReasonDialog,
  user_id,
  action,
}) {
  const { mutate } = useSWRConfig();
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ shouldUnregister: true });

  const onSubmit = async (data) => {
    setStatus("loading");
    data.user_id = user_id;
    data.action = "delete";
    try {
      const response = await UserService.postUserAction(data);
      setStatus("success");
      mutate("users");
      setTimeout(() => {
        handleOpenReasonDialog();
      }, 1000);
    } catch (error) {
      console.log(error?.response?.data?.message);
      // if (error?.response?.data?)
      setStatus("error");
    }
  };
  console.log(user_id, action);
  console.log(openReason);

  return (
    <Dialog open={openReason} handler={handleOpenReasonDialog} size="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogHeader>
          <Typography color="red" variant="h5" className="font-lead">
            Delete / Reject Information
          </Typography>
        </DialogHeader>
        <DialogBody className="overflow-y-auto max-h-[33rem] mr-1">
          <Textarea
            label="Reason"
            {...register("reason", { required: true })}
          />
        </DialogBody>
        <DialogFooter className="flex justify-between pt-0">
          <Button
            color="blue-gray"
            size="sm"
            className="rounded-none"
            onClick={handleOpenReasonDialog}
          >
            <span>Cancel</span>
          </Button>
          <div className="flex flex-row gap-2">
            {status == "success" ? (
              <Typography color="green">Submit Successful</Typography>
            ) : status == "error" ? (
              <Typography color="red">Something Went Wrong.</Typography>
            ) : null}
            <Button
              type="submit"
              color="black"
              size="sm"
              className={`rounded-none ${
                status == "success" || status == "loading"
                  ? "cursor-not-allowed pointer-events-none"
                  : null
              }`}
            >
              <span>
                {status === "loading" ? (
                  <Spinner className="w-14 h-4" />
                ) : status === "success" ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    color="green"
                    className="w-14"
                  />
                ) : (
                  <span> Submit </span>
                )}
              </span>
            </Button>
          </div>
        </DialogFooter>
      </form>
    </Dialog>
  );
}
