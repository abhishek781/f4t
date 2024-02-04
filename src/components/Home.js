import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css'; // Import your custom styles
import Search from './Search'; // Import the Search component

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
    <h3 className='titl'>TravelMedia.in</h3>
     <h2 className='til'>Social Media For Travellers</h2>
      <Search /> {/* Include the Search component here */}
      <div className="container mt-5">
       
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={`https://picsum.photos/200?random=${post.id}`}
                  className="card-img-top"
                  alt={`Post ${post.id}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{`${post.body.slice(0, 100)}...`}</p>
                  <Link to={`/item/${post.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;


