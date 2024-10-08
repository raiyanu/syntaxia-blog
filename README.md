# Syntaxia Blog

Welcome to the Syntaxia Blog! This is a simple project where we share articles and tutorials related to programming and software development. Whether you're a beginner or an experienced developer, you'll find valuable content here to enhance your skills.

<h1 style="text-align:center;">

[![Netlify Status](https://api.netlify.com/api/v1/badges/c4d4676e-fdf5-4d37-b88c-913f7f51dead/deploy-status)](https://app.netlify.com/sites/syntaxi/deploys) [![Live-Link](https://img.shields.io/badge/Live-Link-blue)](https://syntaxi.netlify.app/) [![Docker-Image](https://img.shields.io/badge/Docker-Image-white)](https://hub.docker.com/r/raiyanu/syntaxia)

</h1>

<h1 style="text-align:center;"> <sup style="display:inline;font-size:12px;">Progress</sup> 55%</h1>

## Getting Started

To get started with the Syntaxia Blog, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies.
3. Run the project locally.
4. Start exploring the articles and tutorials.

## Running docker image
  
```bash
docker pull raiyanu/syntaxia
  
docker run -d -p 3000:3000 -p 6969:6969 --name syntaxi-blog raiyanu/syntaxia:latest
```  

- Open your browser and go to `localhost:3000` to see the project Frontend running.
- Open your browser and go to `localhost:6969` to access backend API running.
- To stop the container, run `docker stop syntaxi-blog`.
- To remove the container, run `docker rm syntaxi-blog`.
- To remove the image, run `docker rmi syntaxi-blog`.
- To see the logs, run `docker logs syntaxi-blog`.
- To enter the container, run `docker exec -it syntaxi-blog /bin/bash`.
- To see all the running containers, run `docker ps`.
- To see all the containers, run `docker ps -a`.

## Features

- Browse through a collection of informative articles.
- Learn new programming concepts through tutorials.
- Engage in discussions by leaving comments on articles.
- Easily navigate through different categories and tags.
- Non-Tech content is welcomed as well.

## Contributing

We welcome contributions from the community! If you have an article or tutorial you'd like to share, or if you find any issues or bugs, please feel free to submit a pull request or open an issue.

## My Progress and To-Do

**Progress:**

- [x] 1. Create a perfect model for blog
  - [x] (with **Foreign-Key**).
- [x] 2. Adding blog through **API** by the user
- [x] 3. Creating blog adding page in User-Interface(for Auth users only)
- [ ] 4. blog editor with local save draft to continue on again.
  - [ ] improvise
- [x] 5. Making api request from user interface
- [ ] 6. Wrapping

```json
modal: blog_collections > blog{
 "title":"blah blah blah",
 "createdAt":"12:121:!2:!@",
 "updatedAt":"adsd",
 "content":"dsaad",
 "author":"ref('aasdaasd')",
}
```

- [ ] Write an introductory blog post.
- [ ] Home page redesign and improvise(its trash for now).
- [ ] Implement user authentication.
- [ ] Add search functionality.
- [ ] Optimize website performance.
- [ ] Deploy the project to a hosting platform.

**Completion:**

- [x] Set up the project structure.
- [x] FrontEnd
  - [ ] Making all Pages
  - [ ] Making custom Logo
  - [x] Routing page according to functionality
  - [ ] Making a custom 404 Page
- [x] Adding Redux/Toolkit
  - [x] Making Responsive
  - [X] Adding Dark Mode
  - [ ] Adding Animation
  - [x] Adding Auth
  - [ ] Adding Comment Section
  - [ ] Adding Search functionality
  - [ ] Adding Pagination
  - [ ] Adding Like/Dislike
  - [ ] Adding Tags
- [ ] Designing Author Detail Page
  - [ ] Adding Author Detail Page ***Public***
  - [x] Adding Author Detail Page ***Self***
  - [ ] Adding Author Detail Page ***Admin***
- [x] Create the homepage layout.
- [x] Implement article listing functionality.
- [ ] Design the article detail page.
  - [ ] Add Article page
  - [ ] Improvised Article page
- [ ] Add comment functionality.

## API ROUTES

```mermaid 
graph LR;
    A["/api"] --> B["/api/blogs"]
    A --> C["/api/users"]

    B --> B1["GET /api/blogs/:blogId"]
    B --> B2["POST /api/blogs"]
    B2 --> B3["PUT /api/blogs"]
    B --> B4["GET /api/blogs/page/:pageNo"]

    C --> C1["POST /api/users/auth"]
    C --> C2["POST /api/users/register"]
    C --> C3["POST /api/users/logout"]
    C --> C4["GET /api/users/profile"]
    C4 --> C5["PUT /api/users/profile"]

```

Feel free to update this section as you make progress and complete tasks. Happy coding!
