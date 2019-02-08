import { Noticia } from "./noticias";

export interface Categoria {
    categoria : string;
    imagem : string;
    noticias : Noticia[];
}