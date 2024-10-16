import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogS } from "../slices/blogSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Article() {
  const navigate = useNavigate();
  const loading = useSelector((state) => state.blog.loading);
  const blogList = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();
  const noOfPage = useSelector((state) => state.blog.totalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(currentPage);
  useEffect(() => {
    HandleArticleState();
  }, [currentPage]);

  const HandleArticleState = async () => {
    dispatch(getBlogS(currentPage));
    console.log("Article State:", blogList);
  };
  const handleOptionChange = async (e) => {
    let value = e.target.value;
    if (value === "<") {
      if (currentPage === 1) return;
      value = parseInt(currentPage >= 1 ? currentPage - 1 : 1);
    }
    if (value === ">") {
      if (currentPage === noOfPage) return;
      value = parseInt(currentPage <= noOfPage ? currentPage + 1 : 1);
    }
    value = parseInt(value);
    setSelectedOption(value);
    setCurrentPage(value);
    console.log(value);
    await dispatch(getBlogS(value)).then(navigate(`#article`));
  };
  const refresh = () => {
    HandleArticleState();
  };
  return (
    <div className="min-w-[70%] lg:max-w-[70%] p-2 md:p-4">
      {/* <div className="flex items-center justify-around w-full"> <span className="badge badge-primary">debugger:</span>

        <h1>loading: {loading ? "true" : "false"}</h1>
        <button className="btn btn-sm btn-outline" type="button" onClick={refresh}>refresh</button>
      </div> */}
      <h2 className="text-primary  font-bold my-4  text-2xl" id="article">Articles</h2>
      <ul className="flex grow-0 flex-wrap gap-2 w-full justify-center">
        {loading ? (
          <ArticleSkeleton />
        ) : (
          blogList && blogList.length > 0 ? (
            blogList.map((Article, index) => (
              <ArticleItem key={index} name={{ Article, index }} />
            ))
          ) : (
            <p>No articles found.</p>
          )
        )}
      </ul>
      {/* Pagination */}
      <div className="join  flex  justify-center mt-4">
        {renderPageButtons(noOfPage, currentPage, handleOptionChange)}
      </div>
    </div>
  );
}

const ArticleItem = ({ name: { Article, index } }) => {
  return (
    <>
      <li
        className={
          "border shrink-0 grow-0 p-4 my-2 rounded-md shadow-md hover:shadow-lg   max-w-[280px]"
        }
      >
        <div className="skeleton h-32 w-full mb-4"></div>
        <p className="text-sm text-gray-500 mb-1">
          <span key={index} className="mr-2 ">
            {Article.category ? Article.category : "General"}
          </span>
          {Article.posted && "-"} <span>{Article.posted}</span>
        </p>
        <h3 className="text-lg font-bold">{Article.title}</h3>
        <p className="h-24 min-h-24  overflow-clip text-ellipsis text-sm">{Article.content}</p>
        <Link to={`/blog/${Article.blog_id}`} className="btn btn-primary block max-w-fit  ml-auto mt-3 btn-sm">
          <span className="h-full w-full flex items-center justify-center">Read</span>
        </Link>
      </li>
    </>
  );
};

const renderPageButtons = (noOfPage, currentPage, handleOptionChange) => {
  let elements = [];
  if (noOfPage === 0) return <Input
    ariaLabel="1"
    handleOptionChange={handleOptionChange}
    currentPage={currentPage}
    key="1"
  />;
  if (!(currentPage === 1)) {
    elements.push(
      <Input
        ariaLabel="<"
        handleOptionChange={handleOptionChange}
        currentPage={currentPage}
        key="<"
      />
    );
  }
  for (
    let i = currentPage === 1 ? currentPage : currentPage - 1;
    i <= noOfPage;
    i++
  ) {
    elements.push(
      <Input
        ariaLabel={i}
        handleOptionChange={handleOptionChange}
        currentPage={currentPage}
        key={i}
      />
    );
    if (i === 1 + currentPage && i < noOfPage - 2) {
      elements.push(
        <Input
          ariaLabel="..."
          handleOptionChange={handleOptionChange}
          currentPage={currentPage}
          key="..."
        />
      );
      i = noOfPage - 1;
    }
  }

  if (!(currentPage === noOfPage)) {
    elements.push(
      <Input
        ariaLabel=">"
        handleOptionChange={handleOptionChange}
        currentPage={currentPage}
        key=">"
      />
    );
  }
  return elements;
};

const Input = ({ ariaLabel, handleOptionChange, currentPage }) => {
  return (
    <input
      className="join-item btn btn-square"
      disabled={ariaLabel === "..." ? true : false}
      type="radio"
      name="options"
      aria-label={ariaLabel}
      key={ariaLabel + "-key"}
      id={ariaLabel}
      value={ariaLabel}
      checked={ariaLabel == currentPage}
      // onClick={}
      onChange={(e) => handleOptionChange(e)}
    />
  );
};


export const CardSkeleton = () => {
  return (
    <div className="flex w-52 flex-col gap-4 border shrink-0  p-4 my-2 rounded-md shadow-md hover:shadow-lg min-w-[260px]">
      <div className="skeleton h-32 min-w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-4/5"></div>
      <div className="skeleton ml-auto h-6 w-12"></div>
    </div>
  );
}

export const ArticleSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-2 shrink-0 w-full justify-center">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}