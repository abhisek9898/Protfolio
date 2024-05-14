import React from "react";

const ResumeDownloadButton = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/My Resume.pdf";
    link.download = "My Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={downloadResume}
      style={{
        padding: "1%",
        color: "#000",
        fontSize: 20,
        backgroundColor: "lightblue",
        border: "2px solid #777",
        fontWeight: "bold",
        fontFamily: "Georgia, serif",
        cursor: "pointer",
      }}
    >
      My Resume
    </button>
  );
};

export default ResumeDownloadButton;
