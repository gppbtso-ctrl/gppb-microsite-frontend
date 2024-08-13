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
import {
  faComment,
  faEye,
  faPencil,
  faReply,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Spinner,
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
import Link from "next/link";
import Pagination from "@/components/general-widgets/paginator";
import CommentsLoader from "@/components/loading/comments-loader";
import isNonEmptyPTag from "@/utils/checkEmptyTag";

export default function Topic() {
  const router = useRouter();
  const { id } = useParams();
  const loading = useLoading(1400);
  const { token, decodedToken, setToken, removeToken } = useAuthStore();
  const [loaded, setLoaded] = useState(false);
  const [currentContent, setCurrentContent] = useState("");
  const [currentContentEdit, setCurrentContentEdit] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitStatusEdit, setSubmitStatusEdit] = useState({});
  // use for tiptap textfield, pass 'postSubmit' for the adding of comment, pass id for edits 
  const [required, setRequired] = useState(null)
  
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const refEditor = useRef(null);
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    // Custom logic before updating the page
    setPage(newPage);
  };

  useEffect(() => {
    setLoaded(true);
  }, [decodedToken]);

  const getTopicComments = async () => {
    const response = await UserService.getTopicComments(id, page);
    return response.data;
  };

  const { data, isLoading, error, mutate, isValidating } = useSWR(
    id ? "TopicsComments" : null,
    getTopicComments, {
      onError: (error) => {
        const err_response = error?.response
        if (
          err_response?.status == 404 &&
          err_response?.statusText == "Not Found"
     
        ) {
          if( err_response?.data?.detail == "Invalid page."){
            setPage(page !== 0 ? page - 1 : 1)
          }
          else{
            router.push('/404')
          }
        }
      }
    }
  );


  useEffect(() => {
    // Manually trigger a re-fetch when perPage or searchTerm changes
    mutate("TopicsComments");
  }, [page]);



  const onSubmit = async (formData) => {
    if (Object.keys(formData).length ===  0 || !isNonEmptyPTag(formData?.message)) {
      setRequired('postSubmit')
      setTimeout(() => {
        setRequired(null)
      }, 2000);
    
      return;
    } else {
      setRequired(null)
    formData.topic = data?.topic_data?.id || null;
    setSubmitStatus("loading");
    try {
      const response = await UserService.postComment(formData);
      setSubmitStatus("success");
      const updatedData = await getTopicComments(); // Fetch new data
      mutate(updatedData,false); 
      setCurrentContent(null);
      reset();
     setTimeout(() => {
      setSubmitStatus(null);
      setCurrentContent(null)
      refEditor?.current?.focus();
      setPage( page === updatedData.total_pages ? page : updatedData.total_pages );
    }, 500);
    } catch (error) {
      setSubmitStatus("error");
    }
  };
}



 
console.log(page, data?.total_pages)
  const handleContentChange = (content) => {
    setValue("message", content, { shouldValidate: true });
  };

 const handleEditSubmit = async (id) => {
 const formData = getValues()

 if (Object.keys(formData).length ===  0 || !isNonEmptyPTag(formData?.message)) {
  setRequired(id)
  setTimeout(() => {
    setRequired(null)
  }, 2000);
}else{
  setRequired(null)
 setSubmitStatusEdit(prev => ({...prev, [id]:'loading'}));
 try {
  const response = await UserService.postEdit(formData, id);
   setSubmitStatusEdit(prev => ({...prev, [id]:'Success'}));
   mutate("TopicsComments");
   setCurrentContentEdit(null)
   setSubmitStatusEdit({});
   reset()
 } catch (error) {
  setSubmitStatusEdit(prev => ({...prev, [id]:'error'}));
 }
//  purpose of the ID to 
}
 }


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
    setCurrentContent((prevContent) => replyFinal);
    refEditor.current.focus();
    // You can add more logic here to handle the reply action
  };

  const handleDelete = async (id) => {
    try {
      const response = await UserService.postDelete(id);
      mutate("TopicsComments");
    } catch (error) {
      console.log(error?.response);
    }
  };

  const handleEdit = (id, message) => {

    setCurrentContentEdit({ id: id, message: message });
  };
  
  


  return (
    <>
      {loading ? <LoadingScreen /> : null}
      <div className="  h-full flex flex-col justify-center items-center z-10">
        {data && data?.topic_data ? (
          <>
            <Card className="border-[1px] border-blue-gray-700 mt-5 md:mt-10 max-w-[90vw] w-full  xl:max-w-[65vw] rounded-sm h-full drop-shadow-md flex flex-row justify-center items-center gap-5  !p-0 ">
              <div className="h-full p-3 md:p-6 flex flex-col gap-3 flex-1 w-full">
                <div>
                  <div className="flex flex-col ">
                    <Typography className=" text-base font-semibold">
                      {data?.topic_data?.starter?.first_name}
                    </Typography>
                    <Typography className="  font-semibold text-sm">
                      <Moment format="MMM DD, YYYY">
                        {data?.topic_data?.created_date}
                      </Moment>
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-col w-full ">
                  <Typography className=" font-semibold text-2xl">
                    {data?.subject}
                  </Typography>
                  <Typography className="font-normal text-md">
                    in{" "}
                    <Link
                      href={`/committee/${data?.topic_data?.committee}`}
                      className="text-blue-600 hover:text-blue-900 underline"
                    >
                      {" "}
                      {data?.topic_data?.committee_title}{" "}
                    </Link>
                  </Typography>
                </div>
                <div className="break-words mt-2">
                  <Typography className="text-lg tracking-wide whitespace-pre-wrap">
                    {data?.topic_data?.content}
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

                  {data?.post_data.length !== 0 ?
                    Object.keys(data?.post_data).map((key, i) => {
                      const post = data?.post_data[key];
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
                                <div className="flex gap-2">
                                  {decodedToken?.user_id !==
                                  post?.created_by?.id ? (
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
                                   {decodedToken?.role === "USER" &&
                                    decodedToken?.user_id ===
                                      post?.created_by?.id ?
                                   <Button
                                        size="sm"
                                        variant="outlined"
                                        className={`p-1 rounded-none border-none ${
                                          currentContentEdit?.id === post?.id
                                            ? "text-green-700 pointer-events-none opacity-80"
                                            : "text-black"
                                        }`}
                                        onClick={() =>
                                          handleEdit(post?.id, post?.message)
                                        }
                                      >
                                        <FontAwesomeIcon
                                          icon={faPencil}
                                          className="text-xs"
                                        />
                                      </Button> : null}
                                  {decodedToken?.role === "ADMIN" ||
                                  (decodedToken?.role === "USER" &&
                                    decodedToken?.user_id ===
                                      post?.created_by?.id) ? (
                                    <>
                                      <Button
                                        size="sm"
                                        variant="outlined"
                                        className="p-1 rounded-none border-none"
                                        onClick={() => handleDelete(post?.id)}
                                      >
                                        <FontAwesomeIcon
                                          icon={faTrash}
                                          className="text-xs"
                                        />
                                      </Button>
                                    </>
                                  ) : null}
                                </div>
                              ) : null}
                            </div>
                            {currentContentEdit?.id === post?.id ? (
                              <div className="-mt-2">
                                {" "}
                                <Tiptap
                                  onContentChange={handleContentChange}
                                  currentContent={currentContentEdit?.message}
                                  refEditor={refEditor}
                             
                                  isEdit={true}
                                />
                                <div className="w-full flex justify-end gap-2 mt-1">
                                {required === post?.id && <Typography size="sm" color="red" className="font-medium">Please fill out the text field!</Typography>}
                                  <Button
                                    color="blue-gray"
                                    className="py-1 px-1.5 rounded-none text-[0.6rem] md:text-[0.70rem]"
                                    onClick={() => setCurrentContentEdit(null)}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    variant="gradient"
                                    className="py-1 px-1.5 rounded-none text-[0.60rem] md:text-[0.70rem]"
                                    onClick={()=>handleEditSubmit(post?.id)}
                                  >
                       {post?.id in submitStatusEdit &&
                            submitStatusEdit[post?.id] === "loading" ? (
                              <Spinner className="w-10 h-4" color="white" />
                            ) : submitStatusEdit[post?.id] === "success" ? (
                              "success"
                            ) : (
                              "Submit"
                            )}
                                  </Button>
                                </div>
                              </div>
                            ) : (
                              <Typography
                                className="w-full text-blue-gray-900 text-lg 
                        [&_strong]:font-extrabold [&_blockquote]:pl-4 
                        [&>blockquote_span]:text-sm [&>blockquote_span]:font-semibold [&_blockquote]:border-l-2
                         [&_blockquote]:border-l-blue-gray-500 [&_blockquote]:bg-blue-gray-100  [&_blockquote]:pr-1"
                              >
                                {parse(post?.message)}
                              </Typography>
                            )}
                          </div>
                        </div>
                      );
                    }):<Typography className="font-sans text-sm font-semibold">No Comments Yet!</Typography>}
                  {/* comment section */}
                </div>
              </div>
            </Card>
            <div className="w-full max-w-[90vw] xl:max-w-[65vw]">
              <Pagination
                page={page}
                totalPages={
                  data?.detail == "Invalid page." ? 1 : data?.total_pages
                }
                onPageChange={handlePageChange}
                totalEntries={data?.count}
              />
              {loaded && decodedToken && data ? (
                ["TWG", "ADMIN"].includes(decodedToken?.role) ||
                (decodedToken?.role === "USER" &&
                  decodedToken?.committee_list.includes(
                    data?.topic_data?.committee
                  )) ? (
                 
                (!currentContentEdit && <div className="mt-2 ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Tiptap
                        onContentChange={handleContentChange}
                        currentContent={currentContent}
                        refEditor={refEditor}
                      
                      />
                      <div className="flex justify-end items-center mt-1 gap-2">
                        {required === "postSubmit" && <Typography size="sm" color="red" className="font-medium">Please fill out the text field!</Typography>}
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
                  </div>)
                ) : null
              ) : null}
            </div>
          </>
        ) : (
          <CommentsLoader />
        )}
      </div>
    </>
  );
}
