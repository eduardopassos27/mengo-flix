export default class Video{

    id:string;
    year: number;
    title: string;
    description: string;
    posterBase64: string;
    bannerBase64: string;



    constructor(id:string, year: number, title: string, description: string, posterBase64: string, bannerBase64: string) {
        this.id = id,
        this.year = year,
        this.title = title,
        this.description = description,
        this.bannerBase64 = bannerBase64,
        this.posterBase64 = posterBase64
    }


}