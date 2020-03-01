import React, { useEffect, useState } from "react";
import { FetchUtils } from "../../utils/fetchUtils";
import { filterUtils } from "../../utils/filterUtils";
import RatingStar from "../../components/ratingStar";
import { parseUtils } from "../../utils/parseUtils";
import SearchBox from "../../components/searchBox";
let copyOfTopRemen = [];
function HomePage() {
  const [topRemen, setTopRemen] = useState([]);
  const [isLoaded, setisLoaded] = useState(null);
  /**
   * @description Component Did Mount
   */
  useEffect(() => {
    setisLoaded(FetchUtils.loadingState.LOADING);
    FetchUtils.get(
      `https://raw.githubusercontent.com/ashifa454/stashAwa/master/topRamen.json`
    )
      .then(result => {
        setisLoaded(FetchUtils.loadingState.SUCCESS);
        setTopRemen(result);
        copyOfTopRemen = result;
      })
      .catch(err => {
        setTopRemen([]);
        setisLoaded(FetchUtils.loadingState.FAILURE);
      });
  }, []);
  const applyFilter = (mode, query) => {
    switch (mode) {
      case "title":
        setTopRemen(filterUtils.filterByTitle(copyOfTopRemen, query));
        break;
      case "country":
        setTopRemen(filterUtils.filterByCountry(copyOfTopRemen, query));
        break;
      case "variety":
        setTopRemen(filterUtils.filterByVariety(copyOfTopRemen, query));
        break;
      default:
        break;
    }
  };
  return (
    <React.Fragment>
      <SearchBox applyFilter={applyFilter} />
      <div className="app-container">
        {isLoaded === FetchUtils.loadingState.FAILURE && (
          <div>Something went Wront</div>
        )}
        {isLoaded === FetchUtils.loadingState.LOADING && (
          <div className="shadow py-4 px-4 text-center max-w-xs mx-auto">Loading Please Wait</div>
        )}
        {isLoaded === FetchUtils.loadingState.SUCCESS &&
          topRemen.map(item => {
            return (
              <div className="max-w-sm w-full lg:max-w-full mx-auto lg:flex justify-center mb-2">
                <div className="rounded lg:w-2/6 sm:w-full shadow border-gray-400 lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 flex items-center">
                      {parseUtils.safeParse(item.Stars) > 0 ? (
                        <RatingStar rating={parseUtils.safeParse(item.Stars)} />
                      ) : (
                        "Not Available"
                      )}
                    </p>
                    <div className="text-gray-500 italic text-sm mb-4">
                      {`${item.Country} ${item["Top Ten"]}`}
                    </div>
                    <div className="">
                      <div className="text-lg font-bold text-grey-700">
                        {item.Brand}
                      </div>
                      <p className="text-gray-600 text-base">{item.Variety}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        Style <b>{item.Style}</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
}
export default HomePage;
