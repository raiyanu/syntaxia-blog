import { Network, BookOpen, Share2, Users, Code, FileText, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        About Syntaxia-blog
      </h1>

      <div className="hero bg-base-200 rounded-box p-8 mb-8">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="py-6">
              Syntaxia-blog is a public platform dedicated to the sharing of
              knowledge through beautifully formatted blog posts. We believe in
              the power of clear communication and the importance of making
              complex ideas accessible to all.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <BookOpen className="w-12 h-12 mb-4" />
            <h2 className="card-title">Rich Content</h2>
            <p>
              Our platform supports Markdown and LaTeX, allowing for beautifully
              formatted text and mathematical equations.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <Share2 className="w-12 h-12 mb-4" />
            <h2 className="card-title">Knowledge Sharing</h2>
            <p>
              Share your expertise with a global audience and learn from others
              in our vibrant community.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <Users className="w-12 h-12 mb-4" />
            <h2 className="card-title">Community-Driven</h2>
            <p>
              Join discussions, collaborate on ideas, and connect with
              like-minded individuals from around the world.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-base-200 rounded-box p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="mb-4">
          Syntaxia-blog was born out of a passion for sharing knowledge and the
          belief that everyone should have access to high-quality,
          well-presented information. Our journey began when a group of tech
          enthusiasts, academics, and lifelong learners came together with a
          shared vision.
        </p>
        <p>
          We recognized the need for a platform that could seamlessly blend
          technical content with beautiful presentation. By supporting both
          Markdown and LaTeX, we've created a space where complex ideas can be
          expressed clearly and elegantly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <Code className="inline-block mr-2" />
              For Developers
            </h2>
            <p>
              Share your coding insights, discuss the latest technologies, and
              help others learn through clear, well-formatted code snippets and
              explanations.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <FileText className="inline-block mr-2" />
              For Writers
            </h2>
            <p>
              Express your ideas with powerful formatting options. Whether
              you're writing a tutorial, an analysis, or a story, our platform
              helps your content shine.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">

        <h2 className="text-3xl font-bold mb-4"> <Network className="inline-block mr-3" />Join Our Community</h2>
        <p className="mb-4">

          Whether you're here to learn, teach, or simply explore, Syntaxia-blog
          welcomes you. Our diverse community of thinkers, creators, and
          learners is always growing, and we'd love for you to be a part of it.
        </p>
        <Link className="btn btn-primary" to="/login">Sign Up Now</Link>
      </div>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content rounded-box">
        <div>
          <p>
            © 2024 Syntaxia-blog - Empowering knowledge sharing through
            beautiful content
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
