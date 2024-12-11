import Layout from '../components/Layout';

const Education = () => {
  return (
    <Layout>
      <div className="card shadow p-4" style={{ backgroundColor: 'lightgrey' }}>
        <h2>Education</h2>

        <div className="mb-4">
          <h4>Tertiary Education</h4>
          <p><strong>Institution:</strong> Naga College Foundation, Inc.</p>
          <p><strong>Program:</strong> Bachelor of Science in Computer Science</p>
          <p><strong>Year:</strong> 2024 - Present</p>
        </div>

        <div className="mb-4">
          <h4>Associate Degree</h4>
          <p><strong>Institution:</strong> Worldtech Resources Foundation Institute</p>
          <p><strong>Program:</strong> Associate of Computer Technology</p>
          <p><strong>Year:</strong> 2022 - 2024</p>
        </div>

        <div className="mb-4">
          <h4>Secondary Education</h4>
          <p><strong>School:</strong> San Fernando National High School</p>
          <ul>
            <li><strong>Senior High School:</strong> Computer System Servicing (2020 - 2021)</li>
            <li><strong>Junior High School:</strong> (2016 - 2020)</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4>Primary Education</h4>
          <p><strong>School:</strong> San Fernando Central School</p>
          <p><strong>Year:</strong> 2011 - 2016</p>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
