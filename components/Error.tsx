import React from "react";

interface ErrorProps {
  errorMessage: string;
}

const Error: React.FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <div className="text-[#f25360] mb-4 p-4 bg-[#3E0005]  text-center">
      {errorMessage}
    </div>
  );
};

export default Error;
