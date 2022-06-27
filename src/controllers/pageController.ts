import { Request, Response } from 'express';
import { Cultos } from '../models/cultos';
import { Banners } from '../models/banners';
import { createMenuObject } from '../helpers/createMenuObject'
import { url } from 'inspector';

export const programacao  = (req:Request, res: Response) =>{
    let list  = Cultos.getAll();
    res.render('pages/page',{
        menu:createMenuObject('programacao'),
        banner:{
            title: 'Programação',
            background: 'programacao.png'
        },
        escala: true,
        list
    })
}
export const eventos  = (req:Request, res: Response) =>{
    let list = Banners.getAll();
    res.render('pages/page',{
        menu:createMenuObject('eventos'),
        banner:{
            title: 'Eventos',
            background:'eventos.png',
        },
        events:true,
        list

    })
}
export const localizacao  = (req:Request, res: Response) =>{
    res.render('pages/page',{
        menu:createMenuObject('localizacao'),
        banner:{
            title: 'Localização',
            background:'localizacao.png',
        },
        localizacao:true
    })
}