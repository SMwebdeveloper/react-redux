import React, { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
  const { error } = useSelector((state) => state.auth);
  const errorMessage = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(", ");
      return `${name} ${msg}`;
    });
  }, [error]);

  return (
    error !== null &&
    errorMessage().map((error, index) => (
      <div key={index} className="alert alert-danger mb-2 p-2" role="alert">
        {error}
      </div>
    ))
  );
};

export default ValidationError;
