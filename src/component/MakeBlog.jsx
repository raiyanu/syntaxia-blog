import { useState } from "react";
import { Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postBlog } from "../slices/blogSlice";

export default function MakeBlog() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(() => {
        JSON.parse(localStorage.getItem("blogInfo"))
            ? JSON.parse(localStorage.getItem("blogInfo")).title
            : "";
    });
    const [content, setContent] = useState(() => {
        JSON.parse(localStorage.getItem("blogInfo"))
            ? JSON.parse(localStorage.getItem("blogInfo")).content
            : "";
    });
    const handleContentChange = (value) => {
        localStorage.setItem("blogInfo", JSON.stringify({ title, content: value }));
        setContent(value);
    };
    const handleTitleChange = (value) => {
        localStorage.setItem("blogInfo", JSON.stringify({ title, content: value }));
        setTitle(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Posting...");
        dispatch(postBlog({ title, content }));
    };
    const state = useSelector((state) => state);
    const navigate = useNavigate();

    return (
        <div className="w-full h-fit ">
            <h2 className="text-center text-2xl md:text-3xl xl:text-4xl">
                Create Blog post
            </h2>
            <Form
                className="container px-2 block md:grid  grid-rows-6 grid-flow-col md:h-[400px] gap-2 mx-auto my-4 "
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                }}
            >
                <label className="input input-bordered flex items-center gap-2 col-span-5 row-span-1 max-md:my-2  w-full ">
                    {" "}
                    <b>Title:</b>
                    <input
                        type="text"
                        className="grow"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => {
                            handleTitleChange(e.target.value);
                        }}
                    />
                </label>
                <div className="  col-span-5 row-span-5  w-full max-md:h-[300px]">
                    <textarea
                        className="input textarea textarea-bordered w-full h-full resize-none"
                        placeholder="Bio"
                        value={content}
                        onChange={(e) => {
                            handleContentChange(e.target.value);
                        }}
                    ></textarea>
                </div>
                <div className="md:border rounded-md p-2 md:border-white flex items-center justify-start flex-col gap-3 row-span-5">
                    {/* TODO: Chore Unncessary features */}
                    <p>Action utitlites</p>

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox mr-3" />
                            <span className="label-text text-base">Remember me </span>
                        </label>
                    </div>
                </div>
                <input
                    type="submit"
                    className="btn btn-outline max-md:btn-block"
                    value="Submit"
                />
            </Form>
        </div>
    );
}
