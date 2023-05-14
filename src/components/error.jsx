import React from "react";
import { useRouteError, useParams } from "react-router-dom";
function Error() {
  const error = useRouteError();
  const params = useParams();
  console.log(error, params);
  return <div>something went wrong </div>;
}

export default Error;
