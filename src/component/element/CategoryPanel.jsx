import { css } from "@emotion/css";

const Categories = [
  "Technology",
  "Science",
  "Art",
  "History",
  "Literature",
  // "Philosophy",
  // "Religion",
  "Social Science",
];
export default function CategoryPanel() {
  return (
    <div className="my-6 w-[85%] block mx-auto">
      <h2 className="text-primary  font-bold my-4  text-2xl">Categeries</h2>
      <ul>
        {Categories.map((category, index) => (
          <CatergoryItem key={index} name={category} />
        ))}
      </ul>
    </div>
  );
}
const CatergoryItem = ({ name }) => {
  return (
    <>
      <li
        className={
          css`
            &:hover {
              border: 1px solid black;
              background: red;
            }
          ` + "text-primary"
        }
        key={name}
      >
        <a href="#">{name}</a>
      </li>
      <div className="divider my-1"></div>
    </>
  );
};
