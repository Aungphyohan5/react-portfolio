import React from 'react';


const styles = {
  card: {
    width: '18rem'
  }
}

export default function About() {
  return (
    <div>
      <div className='d-flex bg-img'>
        <div className='container'>
          <h1>Aung Phyo Han</h1>
          <p>
            My name is Aung Phyo Han. I have found my passion in web development. Currently, I am attending a web-development Bootcamp from the University of New Brunswick. I love spending time coding and encountering new challenges.
          </p>
        </div>
        <div className="container">
          <img src='https://user-images.githubusercontent.com/112873819/227733187-ab411119-63fe-4781-bcf6-e408fe263197.png' className='img-thumbnail w-25 h-20' ></img>

        </div>
      </div>

      <div>
        <h2 className='text-center m-5 p-4'>What I Am Great At</h2>
      </div>

      <div className="container d-flex justify-content-between mb-5">

        <div className="card" style={styles.card}>
          <img className="card-img-top" src="https://user-images.githubusercontent.com/112873819/227736189-9bfad932-5027-482c-82c6-a10175082629.svg" alt="Card image cap"></img>
          <div className="card-body">
            <h2 className='text-center'>Node Js</h2>
            <p className="card-text">Node.js is a popular open-source runtime environment built on the Chrome V8 JavaScript engine. It allows developers to run JavaScript on the server-side and build scalable, high-performance applications.</p>
          </div>
        </div>

        <div className="card" style={styles.card}>
          <img className="card-img-top" src="https://user-images.githubusercontent.com/112873819/227736221-08f23783-6a50-487d-8375-bac6db538404.png" alt="Card image cap"></img>
          <div className="card-body">
            <h2 className='text-center'>React</h2>
            <p className="card-text">React is a popular JavaScript library used for building user interfaces. It was developed by Facebook and allows developers to create reusable UI components that can be used to build complex web applications.</p>
          </div>
        </div>

        <div className="card" style={styles.card}>
          <img className="card-img-top" src="https://user-images.githubusercontent.com/112873819/227736243-59469e7a-bcf2-45e9-ae31-0858c23216fb.png" alt="Card image cap"></img>
          <div className="card-body">
            <h2 className='text-center'>Express Js</h2>
            <p className="card-text">Express.js is a popular open-source web application framework for Node.js. It provides a robust set of features for building web applications and APIs, including routing, middleware support, and template engines.</p>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-between">

        <div className="card" style={styles.card}>
          <img className="card-img-top" src="https://user-images.githubusercontent.com/112873819/227736247-3d6c4412-abc3-4228-a11e-bf9cc6a7b91a.png" alt="Card image cap"></img>
          <div className="card-body">
            <h2 className='text-center'>MongoDB</h2>
            <p className="card-text">MongoDB is a popular open-source document-oriented database that stores data in flexible, JSON-like documents. It is designed to be scalable and high-performance, and is often used for web and mobile applications, content management systems, and other data-driven projects.</p>
          </div>
        </div>

        <div className="card" style={styles.card}>
          <img className="card-img-top" src="https://user-images.githubusercontent.com/112873819/227736252-427f1f86-76a1-42c3-82c4-2540f4869b69.png" alt="Card image cap"></img>
          <div className="card-body">
            <h2 className='text-center'>JQuery</h2>
            <p className="card-text">jQuery is a popular open-source JavaScript library used for simplifying HTML document traversal and manipulation, as well as event handling, animation, and Ajax interactions. It is designed to make it easier for developers to write JavaScript code that works across multiple browsers.</p>
          </div>
        </div>

        <div className="card" style={styles.card}>
          <img className="card-img-top" src="https://user-images.githubusercontent.com/112873819/227736255-802f1945-f30a-4291-b606-50ed677c47b1.png" alt="Card image cap"></img>
          <div className="card-body">
            <h2 className='text-center'>MySQL</h2>
            <p className="card-text">MySQL is a popular open-source relational database management system that uses SQL for querying and managing data. It is known for its stability, reliability, and scalability, and is commonly used for web applications, content management systems, and other data-driven projects.</p>
          </div>
        </div>


      </div>


    </div>






  );
}