import React from "react";
import { FaNpm, FaLink, FaGithub } from "react-icons/fa";
import { NpmPackage } from "@/types/npmPackage";
import { twMerge } from "tailwind-merge";

type PackageInfoHeaderProps = { packageInfo: NpmPackage };

const PackageInfoHeader = (props: PackageInfoHeaderProps) => {
  const { packageInfo } = props;

  const iconClassName =
    "text-lg hover:fill-primary-10 cursor-pointer transition";

  return (
    <div>
      <h1 className="text-3xl font-semibold ">{packageInfo.name}</h1>
      <div className="flex items-center gap-4">
        <p>{packageInfo.description}</p>
        <div className="border border-l-2" />
        <div className="flex items-center gap-2">
          <div className="tooltip" data-tip="NPM">
            <a href="">
              <FaNpm className={twMerge(iconClassName, "text-3xl")} />
            </a>
          </div>
          <div className="tooltip" data-tip="Website">
            <a href={packageInfo.homepage}>
              <FaLink className={iconClassName} />
            </a>
          </div>
          <div className="tooltip" data-tip="Github">
            <a
              href={packageInfo.repository.url
                .replace("git+https", "https")
                .replace(".git", "")}
            >
              <FaGithub className={iconClassName} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageInfoHeader;