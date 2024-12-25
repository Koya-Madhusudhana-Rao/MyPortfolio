import React from 'react';
import { Download } from 'lucide-react';
import 'react-vertical-timeline-component/style.min.css';
import './styles.css';

const Resume = () => {
  const downloadPdf = () => {
    window.open(process.env.REACT_APP_Resume_download_link);
  };

  return (
    <section className="resume-container">
      {/* Header */}
      <div className="resume-header">
        <h1 className="resume-title">My Resume</h1>
        <button onClick={downloadPdf} className="download-btn">
          <Download className="download-icon" size={20} />
          <span>Download CV</span>
        </button>
      </div>

      {/* PDF Preview */}
      <div className="pdf-preview">
        <iframe
          title="Resume Preview"
          src={process.env.REACT_APP_Resume_Link}
          className="pdf-frame"
        />
      </div>

      {/* Timeline Sections */}
      
    </section>
  );
};

export default Resume;