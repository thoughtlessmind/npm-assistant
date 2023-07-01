"use client";
import { useEffect, useState } from "react";
import { Object, SearchedPackageDto } from "../../types/searchedPackageDto";
import { BsTagsFill } from "react-icons/Bs";

const Search = () => {
  const [suggestedPackages, setSuggestedPackages] =
    useState<SearchedPackageDto | null>(null);

  const fetchPackageList = async (searchString: string) => {
    const dynamicData = await fetch(
      `https://registry.npmjs.org/-/v1/search?text=${searchString}`,
      { cache: "no-store" }
    );
    const result = await dynamicData.json();
    if (!!result) {
      setSuggestedPackages(result);
    }
  };
  useEffect(() => {
    const urlSearchParams = window.location.search.substring(1).split("=")[1];
    if (!!urlSearchParams) {
      fetchPackageList(urlSearchParams);
    }
  }, []);

  return (
    <div className="px-24 py-10 bg-primary-3">
      {!suggestedPackages ? (
        <h1 className="text-red">No Package received</h1>
      ) : (
        suggestedPackages.objects.map((data: Object) => (
          <div
            className="flex flex-col p-10 shadow-md mb-5 rounded-lg cursor-pointer bg-primary-5"
            key={data.package.name}
          >
            <div id="search-package-suggestions-container">
              <h1>{data.package.name} ( {data.package.version} )</h1>
              <h6>{data.package.description}</h6>
              <h6 className="flex flex-row gap-3 items-center">
                <BsTagsFill />
                {data.package.keywords?.join(",")}
              </h6>
              {/* <h6>Updated Last year by {data.package.}</h6> */}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Search;
