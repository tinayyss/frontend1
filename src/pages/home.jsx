import Layout from '../components/Layout';

const Home = () => {
  return (
    
    <Layout>
      <div className="card shadow p-4" style={{ backgroundColor: 'lightgrey', margin: '10' }}>
        <h2>My Personal Website</h2>
        <p>
Thank you for visiting! This site is a reflection of who I am, showcasing my academic background, professional journey, and personal interests. Here, you'll find details about my education, career, and hobbies that fuel my passion for technology and growth.
Feel free to explore, and if you're interested in connecting or collaborating, don't hesitate to reach out. I look forward to sharing my work and ideas with you!
        </p>
      </div>
    </Layout>
  );
};

export default Home;
