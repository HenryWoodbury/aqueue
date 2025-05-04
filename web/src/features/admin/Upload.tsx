/*
import { useState, useEffect } from "react";

export interface UploadFileFormFields extends HTMLFormControlsCollection {
  upload: HTMLInputElement
}

const uploadToServer = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return axios.post('http://localhost:8080/api/csv/upload', formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

function App() {

  const [data, setData] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:8080/api/employees");
      setData(result.data);
    })();
  }, []);

  const selectFile = (e: React.FormEvent<UploadFileFormFields>) => {
*/
 /*
    if (e.target.files === null) {
      return
    }
    const file = e.target.files[0]
  
    if (file) {
      if (file.type !== 'text/csv') {
        console.error('Please upload a .csv file')
      }
  
      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        const contents = event?.target?.result
        // do something with the file contents here
      }
  
      e.target.value = ''
      fileReader.readAsText(file)
    } else {
      console.error('File could not be uploaded. Please try again.')
    }
  }
*//*
    setSelectedFiles(e.target.files);
  };

  const handleUploadRostersSubmit = (e: React.FormEvent<UploadFileFormFields>) => {
    e.preventDefault();

    let currentFile = selectedFiles[0];

    setProgress(0);
    setCurrentFile(currentFile);

    uploadToServer(currentFile, (e) => {
      setProgress(Math.round((100 * e.loaded) / e.total));
    })
      .then(async (response) => {
        setMessage(response.data.message);
        const result = await axios("http://localhost:8080/api/employees");
        setData(result.data);
      })
      .catch(() => {
        setProgress(0);
        setMessage("Could not upload the file!");
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };

  return (
    <div>
      {currentFile && (
        <div className="progress">
          <div
            className = "progress-bar progress-bar-info progress-bar-striped"
            role = "progressbar"            
            aria-valuenow = {progress}
// Interesting. Typescript expects a number for aria-valuemin and aria-valuemin based on the `progressbar` role
// Which is why the values are passed in as variables
            aria-valuemin = {0}
            aria-valuemax = {100}
            style = {{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}

      <form id="uploadRosters" onSubmit={handleUploadRostersSubmit}>
        <label className="btn btn-default">
          <input id="upload" type="file" onChange={selectFile} />
        </label>
        <button 
          type="submit"
          disabled={!selectedFiles}
        >
          Upload Rosters
        </button>
      </form>

      <div className="alert alert-light" role="alert">
        {message}
      </div>
    </div>
  );
}

*/