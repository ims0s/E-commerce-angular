export interface IProduct {
    title:string,
    _id:string,
    price:number,
    imageCover:string,
    category:{
        name:string
        },
    subcategory:{
        name:string,
    }[],
    ratingsAverage:number,

        
}
