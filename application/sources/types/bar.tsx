export type Bar = {
    name: string,
    bar_id: number,
    gps_position: object,
    price: number,
    Description: string,
    image: string
    // Tags
}

export type BarList = {
    data: {
        id: number,
        attributes: Bar
    }[],
    meta: {
        pagination: pagination
    }
}

type pagination = {
    page:        number,
    pageSize:    number,
    pageCount:    number,
    total:        number
}