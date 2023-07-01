import { compact } from "lodash-es";
import { NpmPackage } from "@/types/npmPackage";
import parseVsUrl from "@/utils/parseVsUrl";
import HorizontalPadding from "@/components/horizontalPadding";
import PackageInfoHeader from "@/components/packageInfoHeader/PackageInfoHeader";

const getPackageData = (packageName: string): Promise<NpmPackage> =>
  fetch(`https://registry.npmjs.org/${packageName}/latest`).then((res) =>
    res.json()
  );

const getPackagesData = async (packages: string[]) => {
  const allData = await Promise.allSettled(packages.map(getPackageData));
  const responses = allData.map((i) => i.status === "fulfilled" && i.value);
  return compact(responses);
};

export default async function Page({
  params,
}: {
  params: { packageNames: string };
}) {
  const selectedPackages = parseVsUrl(params.packageNames);
  const data = await getPackagesData(selectedPackages);
  console.log("-x", data);
  const isMultiplePackages = selectedPackages.length > 1;

  return (
    <HorizontalPadding>
      <div className="py-4">
        {isMultiplePackages ? (
          <h1 className="text-3xl font-semibold">
            {data.map((i, index) => (
              <>
                {i.name}
                {index + 1 !== data.length && (
                  <span className="text-xl font-light px-2">vs</span>
                )}
              </>
            ))}
          </h1>
        ) : (
          <PackageInfoHeader packageInfo={data[0]} />
        )}
      </div>
    </HorizontalPadding>
  );
}
