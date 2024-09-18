import { useState, use } from "react";
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
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState("");
    const [category, setCategory] = useState("");
    const handleAddTag = (tag) => {
        if (tag.length > 18) {
            alert("Tag name is too long, keep it under 18 characters");
            return;
        }
        if (!tags.includes(tag)) {
            setTags([...tags, tag]);
        }
    };

    const handleRemoveTag = (tag) => {
        setTags(tags.filter((t) => t !== tag));
    };
    const handleTagKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const tag = e.target.value.trim();
            if (tag) {
                handleAddTag(tag);
                e.target.value = "";
            }
        } else {
            setTag(e.target.value);
        }
    };

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
        dispatch(postBlog({ title, content, tags, category }));
    };
    const state = useSelector((state) => state);
    const navigate = useNavigate();

    return (
        <div className="w-full h-fit ">
            <h2 className="text-center text-2xl md:text-3xl xl:text-4xl">
                Create Blog post
            </h2>
            <Form
                className="container px-2 block md:grid  grid-rows-6 grid-flow-col md:h-[400px] gap-2 mx-auto my-4"
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
                <div className="md:border rounded-md p-2 md:border-white flex items-center lg:items-start justify-start flex-col gap-3 row-span-5">
                    {/* TODO: Chore Unncessary features */}
                    <p>Action utitlites</p>

                    <select
                        onChange={(e) => {
                            setCategory(e.target.value);
                        }}
                        className="select select-bordered select-sm w-full max-w-xs"
                    >
                        <option disabled selected>
                            Category
                        </option>
                        <option value={"technology"}>Technology</option>
                        <option value={"science"}>Science</option>
                        <option value={"art"}>Art</option>
                        <option value={"history"}>History</option>
                        <option value={"literature"}>Literature</option>
                        <option value={"socialScience"}>Social Science</option>
                        <option value={"other"}>Other</option>
                    </select>
                    <div className="form-control w-full">
                        <label className="label cursor-pointer w-full">
                            <input
                                type="text"
                                placeholder="Tags"
                                className="input input-bordered input-sm w-full max-w-xs"
                                onKeyDown={(e) => {
                                    handleTagKeyPress(e);
                                }}
                                onChange={(e) => {
                                    setTag(e.target.value);
                                }}
                            />
                        </label>
                        {/* <div className="flex items-start justify-start w-full overflow-y-scroll max-w-xs"> */}
                        <div className=" max-w-[300px] max-h-[70px] flex h-fit w-300px p-1 flex-wrap gap-1 overflow-y-scroll flex-row items-start">
                            {tags.map((tag) => (
                                <Tag
                                    key={tag}
                                    tag={tag}
                                    click={() => {
                                        handleRemoveTag(tag);
                                    }}
                                />
                            ))}

                            {/* <Tag tag={"Tech"} />
                            <Tag tag={"SocialAwareness"} />
                            <Tag tag={"Work Culture"} />
                            <Tag tag={"FAANG"} />
                            <Tag tag={"Trend"} />
                            <Tag tag={"Updates"} />
                            <Tag tag={"Review"} />
                            <Tag tag={"SharingCaring"} />
                            <Tag tag={"Tips&Tricks"} /> */}
                        </div>
                    </div>
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

export const Tag = ({ tag, click }) => {
    return (
        <span
            onClick={click}
            className="badge badge-info gap-1 ml-1 cursor-pointer max-w-full h-fit"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="transparent"
                viewBox="0 0 24 24"
                className="inline-block h-4 w-4 stroke-current hover:fill-red-700"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                ></path>
            </svg>
            <p>{tag}</p>
        </span>
    );
};
