/* eslint-disable @typescript-eslint/no-explicit-any */

export const getItemsArray = (itemsArray: string[] | undefined, data: any[]) : any[]=> {
    const arr: any[] = []

    if(itemsArray) {
        for(let i = 0; i < itemsArray?.length; i++) {
            data.forEach( item => {
                if(item.url === itemsArray[i]) {
                    arr.push(item)
                }
            })
        }
    }
    return arr
}