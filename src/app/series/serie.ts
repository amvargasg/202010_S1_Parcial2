export class Serie {

  constructor(private nameA: string, private canalA:string, private temporadasA: number) {

  }
  get nombre(): string { return this.nameA; }
  get canal(): string { return this.canalA; }
  get temporadas(): number { return this.temporadasA; }
}
