export interface SearchedPackageDto {
    objects: Object[];
    total:   number;
    time:    string;
}

export interface Object {
    package:     Package;
    score:       Score;
    searchScore: number;
}

export interface Package {
    name:        string;
    scope:       Scope;
    version:     string;
    description: string;
    keywords?:   string[];
    date:        Date;
    links:       Links;
    publisher:   Publisher;
    maintainers: Publisher[];
    author?:     Author;
}

export interface Author {
    name?:     string;
    email?:    string;
    username?: string;
    url?:      string;
}

export interface Links {
    npm:         string;
    homepage:    string;
    repository?: string;
    bugs?:       string;
}

export interface Publisher {
    username: string;
    email:    string;
}

export enum Scope {
    Unscoped = "unscoped",
}

export interface Score {
    final:  number;
    detail: Detail;
}

export interface Detail {
    quality:     number;
    popularity:  number;
    maintenance: number;
}
