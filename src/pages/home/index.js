import React, { useEffect, useState } from "react";
import { FetchUtils } from "../../utils/fetchUtils";
function HomePage() {
  const [topRemen, setTopRemen] = useState([]);
  const [isLoaded, setisLoaded] = useState(null);
  /**
   * @description Component Did Mount
   */
  useEffect(() => {
    FetchUtils.get(`http://starlord.hackerearth.com/TopRamen`)
      .then(result => {
        console.log(result);
      })
      .catch(err => {});
  }, []);
  return <div>HOME PAGE</div>;
}
export default HomePage;
