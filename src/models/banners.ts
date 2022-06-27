type Banner = {
    type: 'banner',
    image:string,
    descricao:string
}


const data:Banner[] = [
    {
        type: 'banner',
        image:'home-1.jpeg',
        descricao:'',
    },
    {
        type: 'banner',
        image:'home-2.jpeg',
        descricao:'',
    },
    {
        type: 'banner',
        image:'home-3.jpeg',
        descricao:'',
    },
]

export const Banners = {
    getAll:():Banner[]=>{
        return data;
    }
}

