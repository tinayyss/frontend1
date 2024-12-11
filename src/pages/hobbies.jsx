import Layout from '../components/Layout';

const Hobbies = () => {
  return (
    <Layout>
      <div className="card shadow p-4" style={{ backgroundColor: 'lightgrey' }}>
        <h2>My Hobbies</h2>
        
        <ul>
          <li>
            <strong>Reading Books</strong>  
            <p>
              I’m an avid reader and believe that books are windows to new worlds. Whether it’s fiction that sparks my imagination or non-fiction that broadens my knowledge, I’m always looking for my next great read. From science fiction to biographies, I love diving into stories that challenge my thinking and expand my perspective.
            </p>
          </li>
          <li>
            <strong>Watching Anime</strong>  
            <p>
              One of my favorite activities is watching anime. I enjoy it because it's full of different genres with unique stories. It’s a great way for me to relax and step into other worlds and cultures, all while enjoying the creativity and artistry that go into each series.
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Hobbies;