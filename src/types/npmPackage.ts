export interface BugTracker {
  readonly url?: string;
  readonly email?: string;
}

export interface NpmPackage {
  name: string;
  description: string;
  keywords: string;
  version?: string;
  versions?: string[];
  homepage: string;
  bugs: { url: string };
  license: string;
  main: string;
  repository: {
    type: string;
    url: string;
    directory: string;
  };
  dependencies: Record<string, string>;
  gitHead: string;
  _id: string;
  _nodeVersion: string;
  _npmVersion: string;
  maintainers: Human[];
  _npmUser: Human;
  _hasShrinkwrap: boolean;
  contributors?: Human[];
  dist: DistInfo;
}

export interface Human {
  name: string;
  email: string;
  url: string;
}

export interface DistInfo {
  /** Tarball URL */
  readonly tarball: string;

  /** SHA1 sum of the tarball */
  readonly shasum: string;

  /** Usually, SHA512 sum of the tarball preceded by `sha512-` */
  readonly integrity?: string;

  /** Number of files in the tarball */
  readonly fileCount?: number;

  /** Total size in bytes of the unpacked files in the tarball */
  readonly unpackedSize?: number;

  /** npm PGP signature */
  readonly "npm-signature"?: string;

  readonly signatures: { keyid: string; sig: string }[];
}
