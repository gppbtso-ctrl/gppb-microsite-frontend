"use client";
import LoadingScreen from "@/components/loading/loading";
import { TopicTable } from "@/components/topics/topic.table";
import AddTopicDialog from "@/components/topics/widgets/add-topic-dialog";
import UserService from "@/services/user.services";
import useAuthStore from "@/store/authStore";
import useLoading from "@/utils/use-loading";
import { faComment, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Moment from "react-moment";
import useSWR from "swr";

export default function Topic() {
  const router = useRouter();
  const { id } = useParams();
  const loading = useLoading(1400);
  const { token, decodedToken, setToken, removeToken } = useAuthStore();
  const [loaded, setLoaded] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setLoaded(true);
  }, [decodedToken]);

  const getTopicComments = async () => {
    const response = await UserService.getTopicComments(id);
    return response.data;
  };

  const { data, isLoading, error, mutate, isValidating } = useSWR(
    "TopicsComments",
    getTopicComments
  );

  console.log(data);

  if (
    error?.response?.status == 404 &&
    error?.response?.statusText == "Not Found"
  ) {
    router.push("/404");
  }

  const onSubmit = async (formData) => {
    formData.topic = data?.id || null;
    console.log(formData);

    setSubmitStatus("loading");
    try {
      const response = await UserService.postComment(formData);
      setSubmitStatus("success");
      mutate("TopicsComments");
      setTimeout(() => {
        setSubmitStatus(null);
        reset();
      }, 1000);
    } catch (error) {
      setSubmitStatus("error");
    }
    console.log(data);
  };

  console.log(decodedToken);
  return (
    <>
      {loading ? <LoadingScreen /> : null}
      <div className=" relative h-full flex flex-col justify-center items-center z-10">
        <Card className="mt-10 mx-3 w-full max-w-[60rem] h-full rounded-none border flex flex-row justify-center items-center gap-5 border-gray-500 !p-0 ">
          <div className="h-full p-7 flex flex-col gap-3 flex-1">
            <div>
              <div className="flex flex-col ">
                <Typography className="font-montserrat">
                  {data?.starter?.first_name}
                </Typography>
                <Typography variant="small" className="font-montserrat">
                  <Moment format="MMM DD, YYYY">{data?.created_date}</Moment>
                </Typography>
              </div>
            </div>
            <div className="flex flex-col w-full ">
              <Typography className="font-montserrat font-semibold text-2xl">
                {data?.subject}
              </Typography>
              <Typography className="font-montserrat font-normal text-md">
                in {data?.committee_title}
              </Typography>
            </div>
            <div className="break-words ">
              <Typography className="font-montserrat text-lg font-normal">
                {data?.content}
              </Typography>
            </div>
            <div className="h-[1px] bg-gray-500 mt-5 mb-2"></div>

            <div className="flex flex-col gap-2">
              <Typography className="font-montserrat text-sm font-semibold">
                Comments
              </Typography>
              {submitStatus === "error" && (
                <Alert color="red" className="rounded-none">
                  <Typography>Something Went Wrong!</Typography>
                </Alert>
              )}

              {loaded && decodedToken && data ? (
                ["TWG", "ADMIN"].includes(decodedToken?.role) ||
                (decodedToken?.role === "USER" &&
                  decodedToken?.committee_list.includes(data?.committee)) ? (
                  <div className="mb-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <textarea
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900  rounded-none border-2 border-black focus:rounded-none focus:ring-blue-500 focus:border-blue-500  "
                        placeholder="Write your comment here..."
                        {...register("message", { required: true })}
                        required
                      ></textarea>
                      <div className="flex justify-end items-center mt-1">
                        <Button
                          type="submit"
                          size="sm"
                          variant="outlined"
                          className="rounded-none"
                        >
                          {submitStatus === "loading"
                            ? "Adding..."
                            : submitStatus === "success"
                            ? "Success"
                            : "Publish"}
                        </Button>{" "}
                      </div>
                    </form>
                  </div>
                ) : null
              ) : null}

              {data?.posts &&
                Object.keys(data?.posts).map((key) => {
                  const post = data.posts[key];
                  return (
                    <div
                      key={key}
                      className="flex flex-col gap-0 p-3 border-[1.5px] border-black mt-1 shadow-md antialiased"
                    >
                      <div className="flex flex-col gap-0 mb-7">
                        <Typography className="font-montserrat font-normal">
                          {post?.created_by?.first_name}
                        </Typography>
                        <Typography className="font-montserrat text-sm font-normal">
                          <Moment fromNow>{post?.created_date}</Moment>
                        </Typography>
                      </div>
                      <Typography className="font-montserrat font-normal">
                        {post?.message}
                      </Typography>
                    </div>
                  );
                })}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
