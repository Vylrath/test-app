export interface PlanetResults {
  count: number,
  results: [
    {
      climate: string,
      diameter: string,
      gravity: string,
      name: string,
      orbital_period: string,
      population: string,
      residents: string[],
      rotation_period: string,
      surface_water: string,
      terrain: string,
      url: string
    }
  ]
}
