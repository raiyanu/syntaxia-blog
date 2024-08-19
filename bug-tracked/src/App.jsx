import { useState } from "react";
import "./App.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Input,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";

function App() {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        {/* <h1 className="text-3xl font-bold underline text-center">Hello</h1> */}
        <Card width="500px" className="">
          <div className="flex w-full items-center md:flex-nowrap gap-4">
            <Input type="text" label="Bug" size="sm" />{" "}
            <Button color="primary" size="md">
              Add
            </Button>
          </div>
          <Listbox
            aria-label="Actions"
            onAction={(key) => alert(key)}
            className="py-3"
          >
            <ListboxItem key="new">New file</ListboxItem>
            <ListboxItem key="copy">Copy link</ListboxItem>
            <ListboxItem key="edit">Edit file</ListboxItem>
            <ListboxItem key="delete" className="text-danger" color="danger">
              Delete file
            </ListboxItem>
          </Listbox>
        </Card>
      </div>
    </>
  );
}

export default App;
