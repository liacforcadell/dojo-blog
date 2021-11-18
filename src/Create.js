import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Lia')


    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>

            <form>
                <label>Blog title:</label>
                <input
                type="text"
                required
                value = {title}
                onChange = {(e) => setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea 
                required
                value = {body}
                onChange = {(e) => setBody(e.target.value)}>                   
                </textarea>

                <label>Blog Author:</label>
                    <select
                        value = {author}
                        onChange = {(e) => setAuthor(e.target.value)}
                    >
                        <option value = "Lia"> Lia </option>
                        <option value = "Graciela"> Graciela </option>
                    </select>
                   <button> Add Blog </button> 
            </form>

        </div>
     );
}
 
export default Create;