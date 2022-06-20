import { Request, Response } from 'express';
import { Cultos } from '../models/cultos';
import { Banners } from '../models/banners';
import { createMenuObject } from '../helpers/createMenuObject'

export const programacao  = (req:Request, res: Response) =>{
    let list  = Cultos.getAll();
    res.render('pages/page',{
        menu:createMenuObject('programacao'),
        banner:{
            title: 'Programação',
            background:'banner.jpg',
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
            background:'banner.jpg',
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
            background:'banner.jpg',
        },
        localizacao:true
    })
}