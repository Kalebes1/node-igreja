type MenuOptions = '' | 'programacao' | 'localizacao' | 'eventos';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        programacao: false,
        localizacao: false,
        eventos:false
    };

    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    }
    return returnObject;
}