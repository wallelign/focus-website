import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import teamData from "./teamData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Team"
          paragraph="Meet our expert remote team, dedicated to delivering exceptional results. We ensure your projects are handled with precision, creativity, and efficiency, providing seamless implementation and outstanding support"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {teamData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog team={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
