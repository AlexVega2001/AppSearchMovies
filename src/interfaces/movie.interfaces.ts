export interface IMovie {
    page:         number;
    results:      IResult[];
    total_pages:   number;
    total_results: number;
}

export interface IResult {
    adult:            boolean;
    backdrop_path:     null | string;
    genre_ids:         number[];
    id:               number;
    original_language: IOriginalLanguage;
    original_title:    string;
    overview:         string;
    popularity:       number;
    poster_path:       null | string;
    release_date:      string;
    title:            string;
    video:            boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum IOriginalLanguage {
    En = "en",
    Fr = "fr",
    Ja = "ja",
}
