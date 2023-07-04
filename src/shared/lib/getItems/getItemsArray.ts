
export const getItemsArray = (itemsArray: string[] | undefined, data: any[]) : any[]=> {
    let arr: any[] = []

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