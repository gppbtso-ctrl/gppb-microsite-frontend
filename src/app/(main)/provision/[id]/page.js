"use client";
import TiptapEditor from "@/components/general-widgets/Tiptap";
import Editor from "@/components/general-widgets/Tiptap";
import Tiptap from "@/components/general-widgets/Tiptap";
import LoadingScreen from "@/components/loading/loading";
import { TopicTable } from "@/components/topics/topic.table";
import AddTopicDialog from "@/components/topics/widgets/add-topic-dialog";
import UserService from "@/services/user.services";
import useAuthStore from "@/store/authStore";
import useLoading from "@/utils/use-loading";
import { faComment, faEye, faReply } from "@fortawesome/free-solid-svg-icons";
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
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Moment from "react-moment";
import useSWR from "swr";
import parse from "html-react-parser";
import moment from "moment/moment";

export default function Topic() {
  const router = useRouter();
  const { id } = useParams();
  const loading = useLoading(1400);
  const { token, decodedToken, setToken, removeToken } = useAuthStore();
  const [loaded, setLoaded] = useState(false);
  const [currentContent, setCurrentContent] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const refEditor = useRef(null);

  useEffect(() => {
    setLoaded(true);
  }, [decodedToken]);

  const getTopicComments = async () => {
    const response = await UserService.getTopicComments(id);
    return response.data;
  };

  const { data, isLoading, error, mutate, isValidating } = useSWR(
    id ? "TopicsComments" : null,
    getTopicComments
  );

  if (
    error?.response?.status == 404 &&
    error?.response?.statusText == "Not Found"
  ) {
    router.push("/404");
  }

  const onSubmit = async (formData) => {
    formData.topic = data?.id || null;
    console.log(formData, "onsubmit");

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

  const handleContentChange = (content) => {
    setValue("message", content);
  };

  const handleReplyClick = (post) => {
    const reply = `
    <blockquote>
    <p><span>${post.created_by.first_name} ${
      post.created_by.last_name
    }</span></p>
    <p><span>${moment(post.created_date).format("YYYY MMM DD HH:mm")}</span></p>
    <br/>
    ${post?.message}
    </blockquote>
    `;
    const replyFinal = reply.replace(/<span>/g, `<span style="">`);
    console.log(replyFinal);
    setCurrentContent((prevContent) => replyFinal);
    refEditor.current.focus();
    // You can add more logic here to handle the reply action
  };

  return (
    <>
      {loading ? <LoadingScreen /> : null}
      <div className="  h-full flex flex-col justify-center items-center z-10">
        <Card className="border-[1px] border-blue-gray-700 mt-10 max-w-[90vw] w-full  xl:max-w-[65vw] rounded-sm h-full drop-shadow-md flex flex-row justify-center items-center gap-5  !p-0 ">
          <div className="h-full p-7 flex flex-col gap-3 flex-1 w-full">
            <div>
              <div className="flex flex-col ">
                <Typography className=" text-base font-semibold">
                  {data?.starter?.first_name}
                </Typography>
                <Typography className="  font-semibold text-sm">
                  <Moment format="MMM DD, YYYY">{data?.created_date}</Moment>
                </Typography>
              </div>
            </div>
            <div className="flex flex-col w-full ">
              <Typography className=" font-semibold text-2xl">
                {data?.subject}
              </Typography>
              <Typography className="font-normal text-md">
                in {data?.committee_title}
              </Typography>
            </div>
            <div className="break-words mt-2">
              <Typography className="text-lg tracking-wide whitespace-pre-wrap">
                {data?.content}
              </Typography>
            </div>
            <div className="h-[1px] bg-gray-500 mt-2 mb-2"></div>

            <div className="flex flex-col gap-2">
              <Typography
                variant="lead"
                className=" font-semibold tracking-wider text-sm "
              >
                Comments
              </Typography>
              {submitStatus === "error" && (
                <Alert color="red" className="rounded-none">
                  <Typography>Something Went Wrong!</Typography>
                </Alert>
              )}

              {data?.posts &&
                Object.keys(data?.posts).map((key, i) => {
                  const post = data.posts[key];
                  return (
                    <div
                      key={i}
                      className="flex flex-col p-3 mt-2 shadow-md rounded-md border   border-blue-gray-500 antialiased"
                    >
                      <div className="flex flex-col gap-0 w-full break-words">
                        <div className="flex w-full justify-between items-start mb-7">
                          <div className="flex flex-col">
                            <Typography className=" text-sm text-blue-gray-900 font-semibold">
                              {post?.created_by?.first_name +
                                " " +
                                post?.created_by?.last_name}
                            </Typography>
                            <Typography className=" tracking-wide text-xs font-semibold text-blue-gray-900">
                              <Moment format="YYYY MMM DD HH:mm">
                                {post?.created_date}
                              </Moment>
                            </Typography>
                          </div>
                          {loaded && decodedToken ? (
                            <Button
                              size="sm"
                              variant="outlined"
                              className="p-1 rounded-none border-none"
                              onClick={() => handleReplyClick(post)}
                            >
                              <FontAwesomeIcon
                                icon={faReply}
                                className="text-xs"
                              />
                            </Button>
                          ) : null}
                        </div>
                        <Typography
                          className="w-full text-blue-gray-900 text-lg 
                        [&_strong]:font-extrabold [&_blockquote]:pl-4 
                        [&>blockquote_span]:text-sm [&>blockquote_span]:font-semibold [&_blockquote]:border-l-2
                         [&_blockquote]:border-l-blue-gray-500 [&_blockquote]:bg-blue-gray-100  [&_blockquote]:pr-1"
                        >
                          {parse(post?.message)}
                        </Typography>
                      </div>
                    </div>
                  );
                })}
              {/* comment section */}
              {loaded && decodedToken && data ? (
                ["TWG", "ADMIN"].includes(decodedToken?.role) ||
                (decodedToken?.role === "USER" &&
                  decodedToken?.committee_list.includes(data?.committee)) ? (
                  <div className="mt-1">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Tiptap
                        onContentChange={handleContentChange}
                        currentContent={currentContent}
                        setCurrentContent={setCurrentContent}
                        refEditor={refEditor}
                      />
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
                            : "Add Comment"}
                        </Button>{" "}
                      </div>
                    </form>
                  </div>
                ) : null
              ) : null}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
