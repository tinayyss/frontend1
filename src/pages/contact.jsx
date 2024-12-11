import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="card shadow p-4" style={{ backgroundColor: 'lightgrey' }}>
        <h2>Contact Information</h2>
        
        <p>If you'd like to get in touch with me, feel free to reach out through the following channels:</p>
        
        <div className="mb-3">
          <h4>Email</h4>
          <p>You can reach me via email at: <strong><a href="mailto:cflor@gbox.ncf.edu.ph">cflor@gbox.ncf.edu.ph</a></strong></p>
        </div>

        <div className="mb-3">
          <h4>Social Media</h4>
          <p>Connect with me on the following platforms:</p>
          <ul>
            <li><strong><a href="https://www.facebook.com/christine.flor.12" target="_blank" rel="noopener noreferrer">Facebook</a></strong></li>
            <li><strong><a href="https://github.com/tinayyss" target="_blank" rel="noopener noreferrer">GitHub</a></strong></li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;