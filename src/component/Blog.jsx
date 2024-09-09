import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getBlog } from "../slices/blogSlice";
import Markdown from "react-markdown";
import styled from "styled-components"

export default function Blog() {
  // TODO: find the blog in the state using the blogId from the URL if it exists else fetch it from the server Tadah! caching !! 🎉
  const params = useParams();
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blog);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      console.log("Fetching blog with id:", params.blogId);
      await dispatch(getBlog(params.blogId));
    };

    fetchBlog();
  }, [dispatch, params.blogId]);

  useEffect(() => {
    const foundBlog = blogs.find((b) => b.blog_id.toString() === params.blogId);
    if (foundBlog) {
      setBlog(foundBlog);
      console.log("Blog found:", foundBlog);
    } else {
      console.log("Blog not found in state");
    }
  }, [blogs, params.blogId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="flex items-center justify-center min-w-full flex-col">
      <span>
        <Link to="/blog/1" className="btn">
          1
        </Link>
        <Link to="/blog/2" className="btn">
          2
        </Link>
        <Link to="/blog/3" className="btn">
          3
        </Link>
        <Link to="/blog/4" className="btn">
          4
        </Link>
      </span>
      <div className="phone-3   max-w-full w-full  min-h-fit rounded-md mt-6 mb-8 flex items-center justify-center flex-col">
        <div className="h-[95%] w-[95%] sm:w-[97%] max-w-[1100px] xl:max-w-[1100px] max-h-[500px]  aspect-video ">
          <div className="skeleton h-full w-full  aspect-video bg-base-300 "></div>
        </div>
        <div className="w-[85%] sm:h-[95%] sm:w-[95%] -mt-24 min-h-fit">
          <div className="w-full  max-w-[900px] min-h-full bg-base-100 mx-auto  rounded-md  max-md:p-2 flex items-start justify-start flex-col gap-2 p-8">
            <div className="w-full max-w-[900px] min-h-full bg-base-100 mx-auto rounded-md max-md:p-2 flex items-start justify-start flex-col gap-2 p-8">
              <h1>Blog-id: {blog.blog_id}</h1>
              <h1 className="font-extrabold">
                {blog ? blog.title : "Loading..."}
              </h1>
              <ContentContainer > {blog.content ? <MarkdownToJsx content={blog.content} /> : "Loading..."} </ContentContainer>
              {/* <Loremo /> TODO: remove this templater */}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export const ContentContainer = styled.div`
max-width: 100%;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
p {
  margin: .5rem 0;
} 
h1, h2, h3, h4, h5, h6 {
  margin: 1rem 0 .5rem 0;
}
img {
  max-width: 100%;
  height: auto;
}
blockquote {
  border-left: 4px solid #ccc;
  padding: 0 15px;
  margin: 1rem 0;
}
pre {
  background-color: #f4f4f4;
  padding: 1rem;
  overflow-x: auto;
  border-radius: 5px;
}
   h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin: 1.5rem 0;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.75em;
  }

  h3 {
    font-size: 1.5em;
  }

  p {
    line-height: 1.6;
    margin: 1rem 0;
  }

  a {
    text-decoration: underline;
  }

  ul, ol {
    padding-left: 1.5rem;
    margin: 1rem 0;
  }

  li {
    margin: 0.5rem 0;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 4px solid;
    margin: 1rem 0;
    font-style: italic;
  }

  pre {
    background-color: inherit;
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
  }

  code {
    background-color: inherit;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: 'Courier New', Courier, monospace;
  }

`;

export const MarkdownToJsx = ({ content }) => {
  return (
    <Markdown>
      {content}
    </Markdown>
  );
}

export const Loremo = () => {
  return (
    <>
      <div className="phone-3   max-w-full w-full  min-h-fit rounded-md mt-6 mb-8 flex items-center justify-center flex-col">
        <div className="h-[95%] w-[95%] sm:w-[97%] max-w-[1100px] xl:max-w-[1100px] max-h-[500px]  aspect-video ">
          <div className="skeleton h-full w-full  aspect-video bg-base-300 "></div>
        </div>
        <div className="w-[85%] sm:h-[95%] sm:w-[95%] -mt-24 min-h-fit">
          <div className="w-full  max-w-[900px] min-h-full bg-base-100 mx-auto  rounded-md  max-md:p-2 flex items-start justify-start flex-col gap-2 p-8">
            <h1 className="font-extrabold">
              React Router Updates: A Developer’s Frustration
            </h1>
          </div>
        </div>
      </div>
      <p>
        As a developer, there's nothing more frustrating than dealing with tools
        that evolve without considering the impact on the people who use them
        every day. Unfortunately, React Router is starting to feel like one of
        those tools. Let’s talk about the recent updates and why they’ve left me
        feeling more frustrated than ever.
      </p>
      <br />
      <br />

      <h2 className="font-semibold">The Update Struggle</h2>
      <p>
        React Router has been a go-to solution for client-side routing in React
        applications. It’s powerful, flexible, and has been a reliable tool in
        my development arsenal. But with the recent updates, it feels like the
        library is moving away from what made it great in the first place:
        simplicity and ease of use.
      </p>
      <br />
      <br />
      <p>
        The shift towards new paradigms like <code>createBrowserRouter</code>{" "}
        and <code>RouterProvider</code> feels unnecessary for many use cases.
        These changes introduce complexity that wasn’t there before. Developers
        who’ve been using React Router for years are now forced to rethink and
        rewrite parts of their applications, even if they don’t need the new
        features.
      </p>
      <br />
      <br />

      <h2 className="font-semibold">Documentation Overload</h2>
      <p>
        Another issue is the documentation. With each new version, the
        documentation becomes more bloated. While detailed docs are generally a
        good thing, they can also be overwhelming. For developers just trying to
        keep up with the latest best practices, it can feel like you're
        constantly wading through a sea of information to find what you need.
      </p>
      <br />
      <br />
      <p>
        The introduction of new concepts without proper context or clear
        migration paths adds to the confusion. It feels like React Router is
        being designed with only advanced users in mind, leaving the rest of us
        scrambling to catch up.
      </p>
      <br />
      <br />

      <h2 className="font-semibold">Breaking Changes</h2>
      <p>
        Let’s not forget the breaking changes. While breaking changes are
        sometimes necessary, they should be introduced with care. But React
        Router’s updates have left many developers dealing with broken apps and
        a mountain of refactoring work. What should be simple and
        straightforward updates turn into days of debugging and testing. It’s
        frustrating to see a tool you rely on become a source of unnecessary
        headaches.
      </p>
      <br />
      <br />

      <h2 className="font-semibold">The Developer Experience</h2>
      <p>
        At the end of the day, React Router should serve the developers who use
        it. But the recent updates make it feel like the developers are being
        forced to serve React Router instead. The focus seems to be on
        introducing new, complex features rather than improving the core
        experience.
      </p>
      <br />
      <br />
      <p>
        It’s time for the maintainers to step back and consider the impact these
        changes are having on the community. Simplicity and stability should be
        the priority, not pushing the latest and greatest features.
      </p>
      <br />
      <br />

      <h2 className="font-semibold">Conclusion</h2>
      <p>
        React Router has been an essential tool in the React ecosystem, but the
        recent updates have made it harder to use, not easier. As developers, we
        need tools that work with us, not against us. Here’s hoping that future
        updates will take into consideration the people who rely on React Router
        every day. Until then, we’ll just have to keep adjusting and hope for
        the best.
      </p>
      <br />
      <br />
    </>
  );
};
