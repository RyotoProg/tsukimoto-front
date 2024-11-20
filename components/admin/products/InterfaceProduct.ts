export interface stockControl {
    stock: Number
    date: Date
}

export interface Vols {
    name: String
    autor: String
    ilustrator: String
    isbn: Number
    sku: String
    vol: Number
    price: Number
    pages: Number
    stock: Number
    sinopsis: String
    sinopsiCard: String
    portada: String
    banner: String
    date: Date
    genres: Array<String>
    income: Array<stockControl>
    egress: Array<stockControl>
}

export interface product {
    name: String
    sku: String
    date: Date
    price:  Number
    stock: Number
    vols: Array<Vols>
    type: String
    income: Array<stockControl>
    egress: Array<stockControl>
}