import React, { useState } from 'react';
import './App.css'; // This import is necessary for custom styles

function App() {
  // State variables for managing the application's data and UI state
  const [instagramUrl, setInstagramUrl] = useState(''); // Stores the URL entered by the user
  const [isLoading, setIsLoading] = useState(false); // Indicates if a download is in progress
  const [error, setError] = useState(''); // Stores any error messages
  const [downloadUrl, setDownloadUrl] = useState(''); // Stores the direct video download URL
  const [metadata, setMetadata] = useState(null); // Stores fetched metadata like thumbnail and title

  // Function to handle changes in the input field
  const handleUrlChange = (e) => {
    setInstagramUrl(e.target.value);
    // Clear any previous errors or download info when the URL changes
    setError('');
    setDownloadUrl('');
    setMetadata(null);
  };

  // Function to handle the form submission (download button click)
  const handleDownload = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)

    // Basic URL validation (more robust validation will be added later)
    if (!instagramUrl.trim()) {
      setError('Please enter an Instagram URL.');
      return;
    }

    setIsLoading(true); // Set loading state to true
    setError(''); // Clear any previous errors
    setDownloadUrl(''); // Clear any previous download URL
    setMetadata(null); // Clear any previous metadata

    // --- Placeholder for actual API call ---
    // In Day 6, this will be replaced with a fetch/axios call to your backend.
    // For now, we simulate a network request with a timeout.
    try {
      // Simulate a successful fetch after 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate a successful response (replace with actual backend response)
      const simulatedData = {
        downloadUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Example video URL
        thumbnailUrl: 'https://placehold.co/300x200/E0E0E0/333333?text=No+Thumbnail', // Example thumbnail
        title: 'Simulated Instagram Reel Title'
      };

      setDownloadUrl(simulatedData.downloadUrl);
      setMetadata({
        thumbnailUrl: simulatedData.thumbnailUrl,
        title: simulatedData.title
      });

      // Simulate an error for testing purposes (uncomment to test error state)
      // throw new Error('Failed to fetch video. Please try again.');

    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false); // Set loading state to false, regardless of success or failure
    }
    // --- End of Placeholder ---
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light p-4 custom-font">
      <div className="card shadow-lg p-4 p-md-5 w-100" style={{ maxWidth: '40rem' }}>
        <div className="card-body text-center">
          <h1 className="card-title text-dark mb-3">Instagram Downloader</h1>
          <p className="card-text text-muted mb-4">Enter an Instagram Reel or Video URL to download.</p>

          <form onSubmit={handleDownload} className="mb-4">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg rounded-pill-left"
                placeholder="e.g., https://www.instagram.com/reel/..."
                value={instagramUrl}
                onChange={handleUrlChange}
                disabled={isLoading} // Disable input when loading
              />
              <button
                type="submit"
                className="btn btn-primary btn-lg rounded-pill-right"
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Downloading...
                  </>
                ) : (
                  'Download'
                )}
              </button>
            </div>
          </form>

          {error && (
            <div className="alert alert-danger mt-3" role="alert">
              {error}
            </div>
          )}

          {isLoading && !error && (
            <div className="d-flex align-items-center justify-content-center mt-3">
              <div className="spinner-border text-primary me-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="text-muted mb-0">Fetching video data...</p>
            </div>
          )}

          {metadata && downloadUrl && (
            <div className="card mt-4 bg-light-subtle border-0">
              <div className="card-body">
                <h2 className="card-title text-dark mb-3">Download Ready!</h2>
                {metadata.thumbnailUrl && (
                  <img
                    src={metadata.thumbnailUrl}
                    alt="Video Thumbnail"
                    className="img-fluid rounded mb-3"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x200/E0E0E0/333333?text=No+Thumbnail'; }} // Fallback for broken image
                  />
                )}
                {metadata.title && (
                  <p className="card-text text-dark fw-medium mb-3">{metadata.title}</p>
                )}
                <a
                  href={downloadUrl}
                  download="instagram_video.mp4" // Suggests a filename for download
                  className="btn btn-success btn-lg"
                  target="_blank" // Opens the download in a new tab (optional, but good for direct links)
                  rel="noopener noreferrer" // Security best practice for target="_blank"
                >
                  Click to Download Video
                </a>
                <small className="d-block text-muted mt-2">Right-click and "Save Video As..." if direct download doesn't work.</small>
              </div>
            </div>
          )}

          <footer className="mt-5 text-muted text-sm">
            <p className="mb-1">&copy; 2025 Instagram Downloader. All rights reserved.</p>
            <p className="mb-0">This tool is for personal use and respects copyright rules.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
































// import React, { useState } from "react";
// // import './App.css'; // This line is removed as all styling is handled by Tailwind CSS

// function App() {
//   // State variables for managing the application's data and UI state
//   const [instagramUrl, setInstagramUrl] = useState(""); // Stores the URL entered by the user
//   const [isLoading, setIsLoading] = useState(false); // Indicates if a download is in progress
//   const [error, setError] = useState(""); // Stores any error messages
//   const [downloadUrl, setDownloadUrl] = useState(""); // Stores the direct video download URL
//   const [metadata, setMetadata] = useState(null); // Stores fetched metadata like thumbnail and title

//   // Function to handle changes in the input field
//   const handleUrlChange = (e) => {
//     setInstagramUrl(e.target.value);
//     // Clear any previous errors or download info when the URL changes
//     setError("");
//     setDownloadUrl("");
//     setMetadata(null);
//   };

//   // Function to handle the form submission (download button click)
//   const handleDownload = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior (page reload)

//     // Basic URL validation (more robust validation will be added later)
//     if (!instagramUrl.trim()) {
//       setError("Please enter an Instagram URL.");
//       return;
//     }

//     setIsLoading(true); // Set loading state to true
//     setError(""); // Clear any previous errors
//     setDownloadUrl(""); // Clear any previous download URL
//     setMetadata(null); // Clear any previous metadata

//     // --- Placeholder for actual API call ---
//     // In Day 6, this will be replaced with a fetch/axios call to your backend.
//     // For now, we simulate a network request with a timeout.
//     try {
//       // Simulate a successful fetch after 2 seconds
//       await new Promise((resolve) => setTimeout(resolve, 2000));

//       // Simulate a successful response (replace with actual backend response)
//       const simulatedData = {
//         downloadUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
//         thumbnailUrl:
//           "https://placehold.co/300x200/E0E0E0/333333?text=Video+Thumbnail", // Example thumbnail
//         title: "Simulated Instagram Reel Title",
//       };

//       setDownloadUrl(simulatedData.downloadUrl);
//       setMetadata({
//         thumbnailUrl: simulatedData.thumbnailUrl,
//         title: simulatedData.title,
//       });

//       // Simulate an error for testing purposes (uncomment to test error state)
//       // throw new Error('Failed to fetch video. Please try again.');
//     } catch (err) {
//       setError(err.message || "An unexpected error occurred.");
//     } finally {
//       setIsLoading(false); // Set loading state to false, regardless of success or failure
//     }
//     // --- End of Placeholder ---
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-inter">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">
//           Instagram Downloader
//         </h1>
//         <p className="text-gray-600 mb-6">
//           Enter an Instagram Reel or Video URL to download.
//         </p>

//         <form onSubmit={handleDownload} className="space-y-4">
//           <input
//             type="text"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="e.g., https://www.instagram.com/reel/..."
//             value={instagramUrl}
//             onChange={handleUrlChange}
//             disabled={isLoading} // Disable input when loading
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
//             disabled={isLoading} // Disable button when loading
//           >
//             {isLoading ? "Downloading..." : "Download"}
//           </button>
//         </form>

//         {error && <p className="text-red-600 mt-4 text-sm">{error}</p>}

//         {isLoading && (
//           <div className="mt-4 flex items-center justify-center">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
//             <p className="ml-3 text-gray-700">Fetching video data...</p>
//           </div>
//         )}

//         {metadata && downloadUrl && (
//           <div className="mt-6 p-4 border border-gray-200 rounded-md bg-gray-50">
//             <h2 className="text-xl font-semibold text-gray-800 mb-3">
//               Download Ready!
//             </h2>
//             {metadata.thumbnailUrl && (
//               <img
//                 src={metadata.thumbnailUrl}
//                 alt="Video Thumbnail"
//                 className="w-full h-auto rounded-md mb-3 object-cover"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src =
//                     "https://placehold.co/300x200/E0E0E0/333333?text=No+Thumbnail";
//                 }} // Fallback for broken image
//               />
//             )}
//             {metadata.title && (
//               <p className="text-gray-700 font-medium mb-3">{metadata.title}</p>
//             )}
//             <a
//               href={downloadUrl}
//               download="instagram_video.mp4" // Suggests a filename for download
//               className="inline-block bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition duration-300 ease-in-out"
//               target="_blank" // Opens the download in a new tab (optional, but good for direct links)
//               rel="noopener noreferrer" // Security best practice for target="_blank"
//             >
//               Click to Download Video
//             </a>
//             <p className="text-gray-500 text-xs mt-2">
//               Right-click and "Save Video As..." if direct download doesn't
//               work.
//             </p>
//           </div>
//         )}

//         <footer className="mt-8 text-gray-500 text-sm">
//           <p>&copy; 2023 Instagram Downloader. All rights reserved.</p>
//           <p className="mt-1">
//             This tool is for personal use and respects copyright rules.
//           </p>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default App;
