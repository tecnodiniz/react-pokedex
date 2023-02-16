import { getQueriesForElement } from "@testing-library/react";

export function handleTypeColor(handleType){
    var card = "";
    switch (handleType){
        case 'normal':
            card = "var(--normal)";
            break;
        case 'fire':
            card = "var(--fire)";
            break;
        case 'grass':
            card = "var(--grass)";
            break;
        case 'water':
            card = "var(--water)";
            break;
        case 'bug':
            card = "var(--bug)";
            break;
        case 'poison':
            card = "var(--poison)";
            break;
        case 'electric':
            card = "var(--electric)";
            break;
        case 'ground':
            card = "var(--ground)";
            break;
        case 'fairy':
            card = "var(--fairy)";
            break;
        case 'fighting':
            card = "var(--fighting)";
            break;
        case 'psychic':
            card = "var(--psychic)";
            break;
        case 'rock':
            card = "var(--rock)";
            break;
        case 'ghost':
            card = "var(--ghost)";
            break;
        case 'ice':
            card = "var(--ice)";
            break;
        case 'dragon':
            card = "var(--dragon)";
            break;
        default:
            card = "var(--normal)";
    }
    return card;

}
export function handleInfoGraphBar(value){
    return value < 50? "#FD4B4B": "#009945";
}