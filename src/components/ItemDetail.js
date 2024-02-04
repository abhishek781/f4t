import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === parseInt(id))
  );

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body" >
        <h3 className="card-title">Post Number {post.userId}</h3>
        <img
                src={`https://picsum.photos/200?random=${post.id}`} 
                className="card-img-top"
                alt={`Post ${post.id}`}
              />
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
   
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

