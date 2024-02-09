// BlogPage.jsx

import React from 'react';
import './Blog.css';
import image from'./Assets/imag3.jpg';
import image1 from './Assets/image5\ \(2\).jpg';
import NavigationBar from './Navbar';
const BlogPage = () => {
  return (<>
      <NavigationBar/>
    <div className="blog-page">
      <h1 className="blog-title1">Art Gallery Blog</h1>
      <div className="blog-posts">
        <div className="blog-post">
          <img src={image} alt="Blog Post" className="blog-post-image" />
          <div className="blog-post-content">
            <h2 className="blog-post-title">“I Did It My Way”: How Rita Asfour Captured Bodies in Motion</h2>
            <p className="blog-post-text">
            Rita Asfour's keen observational eye captured ballerinas and Vegas showgirls alike in fanciful impressionist-style paintings.
            Then again, most artists were not Rita Asfour. The late painter, sculptor, and gallerist blew up the walls separating highbrow and lowbrow.
            </p>
           
          </div>
        </div>

        <div className="blog-post">
          <img src={image1} alt="Blog Post" className="blog-post-image" />
          <div className="blog-post-content">
            <h2 className="blog-post-title">Bob Thompson "My first Gallery"</h2>
            <p className="blog-post-text">
            “So let us all be citizens” is a small but enlightening retrospective of painter Bob Thompson’s meteoric career, which ended prematurely on May 30, 1966—roughly a month before the artist’s twenty-ninth birthday. Deftly curated by 52 Walker’s Ebony L. Haynes, the show presents fourteen oil paintings,
            </p>
           
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogPage;
