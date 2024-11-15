import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './services/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  const url = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

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
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
      <img src={url} className='img' />
      <div className='wrapper'>
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>
        
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        {result ? (
          <p>
            Ready! Share this link: <a href={result} target="_blank" rel="noopener noreferrer">{result}</a>
          </p>
        ) : (
          <p>Select a file to upload</p>
        )}
    </div>
    </div>
  );
}

export default App;