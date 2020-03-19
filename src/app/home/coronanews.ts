import { Source } from './source';

export class CoronsNews{
    constructor(
        public source:Source,
        public author:string,
        public title:string,
        public description:string,
        public url:string,
        public urlToImage:string,
        public publishedAt:Date,
        public content:string
    )
    {

    }
}