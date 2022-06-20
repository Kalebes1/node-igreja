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
        image:'home-1.jpeg',
        descricao:'',
    },
    {
        type: 'banner',
        image:'home-1.jpeg',
        descricao:'',
    },
    {
        type: 'banner',
        image:'home-2.jpg',
        descricao:'Culto abençoado',
    },
    {
        type: 'banner',
        image:'programacao-ensino.jpg',
        descricao:'Culto abençoado',
    },
]

export const Banners = {
    getAll:():Banner[]=>{
        return data;
    }
}

