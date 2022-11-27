import { Position } from "../model/interfaces"

export const degree_to_radian = (degree: number) => {
    return degree * (Math.PI / 180)
}
//rayon terrestre
const R = 6367445; 

/* Calcul de la distance entre deux point : Rcos-1(sin(a)sing(b) + cos(a)cos(b)cos(c-d)) 
   a -> lat(a), b -> lat(b), c -> long(a), d->long(b) */

export const distance = (a : Position, b : Position) => {
    return R * Math.acos(Math.sin(degree_to_radian(a.lat)) * Math.sin(degree_to_radian(b.lat)) + Math.cos(degree_to_radian(a.lat)) * Math.cos(degree_to_radian(b.lat)) * Math.cos((degree_to_radian(a.lng)) - (degree_to_radian(b.lng))))

}