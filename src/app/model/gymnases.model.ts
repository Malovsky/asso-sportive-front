export class GymnasesAll {
    constructor(
        public _id: number,
        public idGymnase: number,
        public nomGymnase: string,
        public adresse: string,
        public ville: string,
        public surface: number
    ) {}
}

export class GymnaseDetail {
    constructor(
        public _id: number,
        public idGymnase: number,
        public nomGymnase: string,
        public adresse: string,
        public ville: string,
        public surface: number,
        public seances: Seances
    ) {}
}

export class Seances {
    constructor(
        public idSportifEntraineur: number,
        public jour: string,
        public horaire: number,
        public duree: number,
        public libelle: string,
    ) {}
}