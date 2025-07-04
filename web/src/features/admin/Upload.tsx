import { useState, useRef, type RefObject } from 'react'

import { useUploadRostersMutation } from '../../services/upload'

const Upload = () => {
//  const [data, setData] = useState([]);
  const uploadRosters: RefObject<HTMLInputElement | null> = useRef(null);
  const [selectedFile, setSelectedFile] = useState<File>()
//  const [currentFile, setCurrentFile] = useState<File>()
//  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState('')

  // The destructured properties are generically named. Something to keep track of.
  const [uploadFile, { data, isLoading, error}] = useUploadRostersMutation()
  // Consider creating a log history page for the return value of the Mutation
  console.info('data', data)
  console.info('error', error)
  console.info('isLoading', isLoading)  

  // Some reading reveals all sorts of details in the way RTK Query handles file upload that
  // differs from the axios example I used as a starting point and some older RTK Query guides.
  // 1. Don't use a custom header ("Content-Type": "multipart/form-data") in the uploadApi. 
  // 2. Don't use `formData: true` -- it is no longer needed for a FormData submission
  // 3. RTK Query uses Fetch under the hood which doesn't expose a method to track progress
  // https://github.com/reduxjs/redux-toolkit/discussions/2603
  // This is in contrast to XhrRequest or Axios which exposes an `onUploadProgress` callback
  // This article covers how to incorporate Axios into RTK using the `queryFn` property
  // https://allafriken.hashnode.dev/how-to-track-upload-progress-using-reactjs-redux-toolkit-and-rtk-query
  const handleUploadRostersSubmit = (e: React.FormEvent) => {
    e.preventDefault();
//    setCurrentFile(selectedFile)
    uploadFile(selectedFile)
    const result = uploadFile(selectedFile);
    result.then(msg => {
      if (msg.data) {
        // Could be a toast. Could be configured for internationalization.
        setMessage(msg.data.message);
      } else if (msg.error) {
        // Format as errors
        // When using fetchBaseQuery, as your base query, errors will be of type FetchBaseQueryError | SerializedError.
        // FetchBaseQueryError
        if ('status' in msg.error) {
          const errMsg = 'error' in msg.error ? msg.error.error : JSON.stringify(msg.error?.data);
          setMessage(errMsg) 
        // SerializedError
        } else if ('message' in msg.error) {
          setMessage(msg.error.message || '');
        }
      }
    });
    setSelectedFile(undefined);
    if (uploadRosters.current) {
      uploadRosters.current.value = '';
      uploadRosters.current.type = "text";
      uploadRosters.current.type = "file";
    }
  }

  const selectFile =  (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const file = target.files === null ? undefined : target.files[0];

    if (!file || file?.type !== 'text/csv') {
      const errorMessage = !file ? 'File not found. Please select a file.' : 'Please upload a .csv file';
      setMessage(errorMessage);
      setSelectedFile(undefined);
//      setCurrentFile(undefined)
      return;
    }
    setMessage('');
// This can be used to validate the csv file before it is passed to the API
/*
    const fileReader = new FileReader()

      fileReader.onload = (event) => {
        const contents = event?.target?.result
        // do something with the file contents here
      }  

    fileReader.readAsText(file)
*/
    setSelectedFile(file);
  }

  return (
    <section>
      <h2>
        Upload
      </h2>
      <p>
        CSV Uploads to support
      </p>
      <ul>
        <li>
          Ottoneu Roster import
        </li>
        <li>
          Ottoneu Player Universe
        </li>
        <li>
          Fangraphs Projections (Steamer, by year, by batter / pitcher)
        </li>
      </ul>
      <p>
        Utilize an API
      </p>
      <ul>
        <li>
          MLB Statistics (by year, by batter / pitcher)
        </li>
        <li>
          MLB Statistics (by year, by batter / pitcher)
        </li>
      </ul>
      {isLoading ? (
        <div className="loading">
          Loading...
        </div>
      ): null }

      <form id="uploadRosters" onSubmit={handleUploadRostersSubmit}>
        <label className="btn btn-default">
          <input id="upload" type="file" onChange={selectFile} ref={uploadRosters} />
        </label>
        <button 
          type="submit"
          disabled={!selectedFile}
        >
          Upload Rosters
        </button>
      </form>

      <p>
        {message}
      </p>
    </section>
  );
}

export { Upload }

/*
// Progress bar code (using Axios)
      {currentFile && (
        <div className="progress">
          <div
            className = "progress-bar progress-bar-info progress-bar-striped"
            role = "progressbar"            
            aria-valuenow = {progress}
  // Typescript expects a number for aria-valuemin and aria-valuemin based on the `progressbar` role
  // which is why the values are passed in as variables
            aria-valuemin = {0}
            aria-valuemax = {100}
            style = {{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}
*/
