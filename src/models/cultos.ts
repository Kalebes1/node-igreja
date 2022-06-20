type Culto = {
    type: 'culto',
    nome: string,
    horario: string,
    image:string
}
const data: Culto[] = [
    {
        type: 'culto',
        nome:'Culto de Ensino',
        horario:'Toda Terça-Feira ás 19:30',
        image:'programacao-ensino.jpg'
    },
    {
        type: 'culto',
        nome:'Culto de Libertação',
        horario:'Toda Quinta-Feira ás 19:30',
        image:'programacao-libertacao.jpg'
    },
    {
        type: 'culto',
        nome:'Culto da Família',
        horario:'Toda Domingo ás 19:00',
        image:'programacao-familia.jpg'
    },
    {
        type: 'culto',
        nome:'Culto de Santa Ceia',
        horario:'Todo Segundo Sábado do mês ás 19:30',
        image:'programacao-santa-ceia.jpg'
    },
    {
        type: 'culto',
        nome:'Escola Bíblica',
        horario:'Toda Domingo ás 09:00',
        image:'programacao-escola.jpg'
    },
    {
        type: 'culto',
        nome:'Oração',
        horario:'Toda Sábado e domingo ás 06:00',
        image:'programacao-oracao.jpg'
    }
]

export const Cultos = {
    getAll:(): Culto[]=>{
        return data; 
    }
}