import react, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./index.css";
import axios from "axios";
const A = () => {
  const [blogs, setBlogs] = useState([]);

useEffect(async()=>{
     //  setTogglelike[false];
   {const blogRequest = await axios.get(`http://10.10.12.125:3000/article/index`);
  //  console.log(blogRequest.data);
     setBlogs(blogRequest.data);
  }
//    setBlogs(blogRequest.data.Search)
},[])


     // return moviesRequest.data.Search;

//   useEffect(() => {
//     setBlogs([
//         {
//             id: 1,
//             title: "Title",
//             date: "01-01-2000",
//             category: "Design",
//             text: "ajdsnpasdiasifioasdfiasbfaisdfnaisdfnasiodfjnawefpjaseufbpaueifnaweiufhwfdbawefgakefgasbeiu ",
//             imgsrc: '/pexels-pixabay-531880.jpeg',
//           },{
//               id: 1,
//               title: "Title",
//               date: "01-01-2000",
//               category: "Design",
//               text: "ajdsnpasdiasifioasdfiasbfaisdfnaisdfnasiodfjnawefpjaseufbpaueifnaweiufhwfdbawefgakefgasbeiu ",
//               imgsrc: '/pexels-pixabay-531880.jpeg',
//             },
//             {
//               id: 1,
//               title: "Title",
//               date: "01-01-2000",
//               category: "Design",
//               text: "ajdsnpasdiasifioasdfiasbfaisdfnaisdfnasiodfjnawefpjaseufbpaueifnaweiufhwfdbawefgakefgasbeiu ",
//               imgsrc: '/pexels-pixabay-531880.jpeg',
//             },
//             {
//               id: 1,
//               title: "Title",
//               date: "01-01-2000",
//               category: "Design",
//               text: "ajdsnpasdiasifioasdfiasbfaisdfnaisdfnasiodfjnawefpjaseufbpaueifnaweiufhwfdbawefgakefgasbeiu ",
//               imgsrc: '/pexels-pixabay-531880.jpeg',
//             },
//             {
//               id: 1,
//               title: "Title",
//               date: "01-01-2000",
//               category: "Design",
//               text: "ajdsnpasdiasifioasdfiasbfaisdfnaisdfnasiodfjnawefpjaseufbpaueifnaweiufhwfdbawefgakefgasbeiu ",
//               imgsrc: '/pexels-pixabay-531880.jpeg',
//             },
//             {
//               id: 1,
//               title: "Title",
//               date: "01-01-2000",
//               category: "Design",
//               text: "ajdsnpasdiasifioasdfiasbfaisdfnaisdfnasiodfjnawefpjaseufbpaueifnaweiufhwfdbawefgakefgasbeiu ",
//               imgsrc: '/pexels-pixabay-531880.jpeg',
//             },
//             {
//               id: 1,
//               title: "Title",
//               date: "01-01-2000",
//               category: "Design",
//               text: "ajdsnpasdiasifioasdfiasbfaisdfnaisdfnasiodfjnawefpjaseufbpaueifnaweiufhwfdbawefgakefgasbeiu ",
//               imgsrc: '/pexels-pixabay-531880.jpeg',
//             },
//             {
//               id: 1,
//               title: "Title",
//               date: "01-01-2000",
//               category: "Design",
//               text: "ajdsnpasdiasifioasdfiasbfaisdfnaisdfnasiodfjnawefpjaseufbpaueifnaweiufhwfdbawefgakefgasbeiu ",
//               imgsrc: '/pexels-pixabay-531880.jpeg',
//             },
//     ]);
//   }, []);

  return (
    <div>
      <div className="flex flex-row px-6 ">
        <div className="flex drop-shadow-lg flex-row items-center px-4 flex-1">
          <input className="rounded-2xl p-2"placeholder="Search Blog Here" type="text" />
        </div>
        <div className="drop-shadow-md border-solid border-slate-200 border-2 rounded-xl p-2">
        <button type="submit">Newest first</button>
        </div>
      </div>
      {/* border: 2p;
    border: 2px solid red;
    border-radius: 30px 30px 0px 0px; */}
      <div className="bg-grey-100 flex flex-wrap flex-row">
    
        {
            
            blogs.map((blog)=>{
                return(
                <div className="blog-content flex flex-col">
                <img className="w-100 h-80 rounded-2xl " src="/pexels-pixabay-531880.jpeg" />
                <div className="flex flex-row blog-info backdrop-blur-md text-white drop-shadow-md">
                  <div className="flex flex-col flex-1 font-serif">
                    <div>{blog.article_title}</div>
                    {/* <div>{blog.date}</div> */}
                  </div>
                  <div className="font-serif">{blog.createdOn}</div>
                </div>
                <div className="font-serif text-xl font-normal">
                  {blog.article_content}<br/>
      
                 
                  <Link to = {`/article/findById/${blog.id}`} className="blog-readmore"> Read more...</Link>
                </div>
              </div>
              )
            })
        }
        {/* <div className="blog-content flex flex-col">
          <img className="w-100 h-80 rounded-2xl " src={blogs.imgsrc} />
          <div className="flex flex-row blog-info backdrop-blur-md text-white drop-shadow-md">
            <div className="flex flex-col flex-1 font-serif">
              <div>{blogs.title}</div>
              <div>{blogs.date}</div>
            </div>
            <div className="font-serif">{blogs.category}</div>
          </div>
          <div className="font-serif text-xl font-normal">
            {blogs.text.slice(50)}<br/>

            <a href="#" className="blog-readmore">Read More...</a>
          </div>
        </div> */}

       

      </div>
    </div>
  );
};

export default A;
