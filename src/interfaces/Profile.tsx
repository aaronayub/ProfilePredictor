// A profile is a set of predictions (age, gender, and nationality) based on a given name.
export default interface Profile {
    name: string,
    age: number,
    gender: string | null,
    genderProbability: number,
    country: string | null | {country_id: string, probability: number}[]
}