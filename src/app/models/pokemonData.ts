export type PokemonData = {
    sprites: {
        front_default: string
        };
        
    id:number,
    name:string;
    types:{
        slot: number
        type: {
            name:string,
            url:string
        }
    }[]
}