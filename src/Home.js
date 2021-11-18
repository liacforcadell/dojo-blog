import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
//data:blogs lo que hace es cambiar el nombre de data a blogs
    

return ( 
        <div className="home">
            {error && <div> { error } </div> }
            { isPending && <div>Loading...</div> }
           {blogs && <BlogList blogs={blogs} title = "Todos los Blogs!"/> }
        </div>
     );
} 
 
export default Home;