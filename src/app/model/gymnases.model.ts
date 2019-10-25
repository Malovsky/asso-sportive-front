export class GymnasesAll {
    constructor(
        public _id: string,
        public idGymnase: number,
        public nomGymnase: string,
        public adresse: string,
        public ville: string,
        public surface: number
    ) {}
}

export class GymnaseDetail {
    constructor(
        public _id: string,
        public idGymnase: number,
        public nomGymnase: string,
        public adresse: string,
        public ville: string,
        public surface: number,
    ) {}
}