export class SportifAll {
    constructor(
        public _id: string,
        public idSportif: number,
        public nom: string,
        public prenom: string,
        public sexe: string,
        public age: number,
        public idSportifConseiller: number,
        public sport: Sport
    ) {}
}

export class SportifDetail {
    constructor(
        public _id: string,
        public idSportif: number,
        public nom: string,
        public prenom: string,
        public sexe: string,
        public age: number,
        public idSportifConseiller: number,
        public sport: Sport
    ) {}
}

export class Sport{
    constructor(
     public jouer : string[],
     public arbitrer : string[],
     public entrainer : string[]
    ){}

}