import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

 //   const blogs = props.blogs; esto se puede evitar destructurando el props cuando ya se recibe y poniendolo entre {}
 //   const title = props.title;

    return ( 
        <div className="blog-list">
            <h2> {title} </h2>
            {blogs.map((Blog) => (
                <div className="blog-preview" key={Blog.id}>
                    <Link to = {`/blogs/${Blog.id}`} >
                        <h2>{ Blog.title }</h2>
                        <p>Written by { Blog.author } </p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;