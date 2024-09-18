import { useState } from "react";
import { useSelector } from "react-redux";
const Articles = [
  {
    title: "How to be a good programmer",
    category: "Technology & Science",
    posted: "Dec 12, 2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    title: "Getting Started with Python",
    category: "Technology & Science",
    posted: "Apr 2, 2022",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    title: "The Art of Public Speaking",
    category: "Personal Development",
    posted: "May 15, 2022",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    title: "Effective Time Management Techniques",
    category: "Self Improvement",
    posted: "Jun 8, 2022",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    title: "Healthy Eating Habits Impact",
    category: "Health tips & Tricks",
    posted: "Jul 20, 2022",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    title: "Getting Started with Python",
    category: "Technology & Science",
    posted: "Apr 2, 2022",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
];

export default function Article() {
  const loading = useSelector((state) => state.blog.loading);
  const blogList = useSelector((state) => state.blog.blogs);
  const [noOfPage, setNoOfPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(4);
  const [selectedOption, setSelectedOption] = useState(currentPage);
  const handleOptionChange = (e) => {
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
  };
  const refresh = () => {
    console.log("refresh");
  };
  return (
    <div className="min-w-[70%] lg:max-w-[70%] p-2 md:p-4">
      <div className="flex items-center justify-around w-full"> <span className="badge badge-primary">debugger:</span>

        <h1>loading: {loading ? "true" : "false"}</h1>
        <button className="btn btn-sm btn-outline" type="button" onClick={refresh}>refresh</button>
      </div>
      <h2 className="text-primary  font-bold my-4  text-2xl">Top Article</h2>
      <ul className="flex grow-0 flex-wrap gap-2 w-full  justify-center">
        {Articles.map((Article, index) => (
          <ArticleItem key={index} name={{ Article, index }} />
        ))}
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
            {Article.category}
          </span>
          - <span>{Article.posted}</span>
        </p>
        <h3 className="text-lg font-bold">{Article.title}</h3>
        <p className="h-24  overflow-clip text-sm">{Article.content}</p>
        <button className="btn btn-primary block ml-auto mt-3 btn-sm">
          Read
        </button>
      </li>
    </>
  );
};

const renderPageButtons = (noOfPage, currentPage, handleOptionChange) => {
  let elements = [];
  if (!(currentPage === 1)) {
    elements.push(
      <Input
        ariaLabel="<"
        handleOptionChange={handleOptionChange}
        currentPage={currentPage}
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
      />
    );
    if (i === 1 + currentPage && i < noOfPage - 2) {
      elements.push(
        <Input
          ariaLabel="..."
          handleOptionChange={handleOptionChange}
          currentPage={currentPage}
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
    <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
}