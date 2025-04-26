import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import { uploadFile } from './services/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        try {
          const response = await uploadFile(data);
          if (response && response.path) {
            setResult(response.path);
          } else {
            console.error("Invalid response:", response);
          }
        } catch (error) {
          console.error("Error while calling the API:", error);
        }
      }
    };

    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    
    <div className="container">
      
      <header className="app-header">
        <h1> SnapDrop</h1>
      </header>


      {/* Floating Background Objects */}
      <div className="floating-object obj1"></div>
      <div className="floating-object obj2"></div>
      <div className="floating-object obj3"></div>

      <motion.div
        className="circle-container"
        onClick={onUploadClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="animated-ring"></div>
        <div className="circle-content">
          <h2>Upload Files</h2>
          <p>Click Here</p>
        </div>
      </motion.div>

      <motion.button
        className="upload-folder-btn"
        onClick={onUploadClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Upload Folder →
      </motion.button>

      <div className="status">
        {result ? (
          <p>
            Ready! Share this link: <a href={result} target="_blank" rel="noopener noreferrer">{result}</a>
          </p>
        ) : (
          <p>Select a file to upload</p>
        )}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => setFile(e.target.files[0])}
      />
    </div>
  );
}

export default App;
