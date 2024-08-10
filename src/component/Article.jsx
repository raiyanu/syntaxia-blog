import React from "react";
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
  return (
    <div className="min-w-[70%] lg:max-w-[70%] p-2 md:p-4">
      <h2 className="text-primary  font-bold my-4  text-2xl">Top Article</h2>
      <ul className="flex grow-0 flex-wrap gap-2 w-full  justify-center">
        {Articles.map((Article, index) => (
          <ArticleItem key={index} name={{ Article, index }} />
        ))}
      </ul>
      <div className="join  flex  justify-center mt-4">
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          defaultChecked
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="4"
        />
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
