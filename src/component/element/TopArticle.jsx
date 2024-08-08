import { css } from "@emotion/css";

const Articles = [
  {
    title: "How to be a good programmer",
    tag: ["Technology", "Programming"],
    posted: "Dec 12, 2021",
  },
  {
    title: "Getting Started with Python",
    tag: ["Technology", "Python"],
    posted: "Apr 2, 2022",
  },
  {
    title: "The Art of Public Speaking",
    tag: ["Personal Development"],
    posted: "May 15, 2022",
  },
  {
    title: "Effective Time Management Techniques",
    tag: ["Self Improvement"],
    posted: "Jun 8, 2022",
  },
  {
    title: "Healthy Eating Habits",
    tag: ["Health", "Lifestyle"],
    posted: "Jul 20, 2022",
  },
];
export default function TopArticle() {
  return (
    <div className="mb-6 w-[85%] block mx-auto">
      <h2 className="text-primary  font-bold my-4  text-2xl">Top Article</h2>
      <ul>
        {Articles.map((Article, index) => (
          <ArticleItem key={index} name={{ Article, index }} />
        ))}
      </ul>
    </div>
  );
}
const ArticleItem = ({ name: { Article, index } }) => {
  return (
    <>
      <li
        className={
          css`
            position: relative;
            &:hover {
              border: 1px solid black;
              background: red;
            }
            &:after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 200px;
              height: 20px;
              background-color: black;
            }
          ` + "text-primary font-semibold text-lg my-2"
        }
        key={index}
      >
        <a href="#">
          {Article.title}
          <p className="flex justify-between text-neutral-content  text-sm">
            <span>
              {Article.tag.map((tag, index) => (
                <span key={index} className="mr-2">
                  {tag}
                </span>
              ))}
            </span>
            <span>{Article.posted}</span>
          </p>
        </a>
      </li>

      {index >= Articles.length - 1 ? null : (
        <div className="divider my-1"></div>
      )}
    </>
  );
};
