export enum Species {
  Dog = 'Cachorro',
  Cat = 'Gato',
  Other = 'Outros'
}

export enum Gender {
  Male = 'Macho',
  Female = 'Fêmea'
}

export enum Size {
  Small = 'Pequeno',
  Medium = 'Médio',
  Large = 'Grande'
}

export enum AgeGroup {
  Puppy = 'Filhote',
  Adult = 'Adulto',
  Senior = 'Idoso'
}

export interface Pet {
  id: string;
  name: string;
  species: Species;
  breed: string;
  age: number; // in years (0 for <1)
  ageGroup: AgeGroup;
  gender: Gender;
  size: Size;
  location: string;
  description: string;
  story: string;
  imageUrl: string;
  attributes: string[];
  isUrgent?: boolean;
  isNew?: boolean;
}

export interface FilterState {
  species: Species | 'All';
  gender: Gender | 'All';
  size: Size | 'All';
  ageGroup: AgeGroup | 'All';
  location: string;
}
