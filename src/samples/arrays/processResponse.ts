// Mock array for testing
const inputArray: Array<IItem> = [
    {
        date: '2022-02-25T00:00:00.000Z',
        value: 5,
    },
    {
        date: '2022-02-26T00:00:00.000Z',
        value: 6,
    },
    {
        date: '2022-03-03T00:00:00.000Z',
        value: 7,
    },
    {
        date: '2022-03-04T00:00:00.000Z',
        value: 8,
    },
]

interface IItem {
    date: string,
    value: number,
}

// TODO: Pass input array as a parameter
export const processInputArray = () => {
    
    let finalArray: Array<IItem> = [];
    let currentItem: IItem;
    
    const addDays = (dateString: string, days: number) => {
        const date = new Date(dateString);
        date.setDate(date.getDate() + days);
        const updatedDateStr = date.toISOString();
        return updatedDateStr;
    }
    
    inputArray.forEach(item => {
        if (typeof currentItem === 'undefined') {
            finalArray.push(item);
            // First item always goes as is
            currentItem = item;
        } else {
            let dif_in_time = new Date(item.date).getTime() - new Date(currentItem.date).getTime();
            let dif_in_days = Math.round(dif_in_time / (1000 * 3600 * 24));
            // If same date, just process
            if (dif_in_days > 1) {
                // For each date between, push date and value as 0
                for (let index = 1; index < dif_in_days; index++) {
                    const newDateString = addDays(currentItem.date, index);
                    const newItem = {
                        date: newDateString,
                        value: 0,
                    }
                    finalArray.push(newItem);
                }
            }
            currentItem = item;
            finalArray.push(currentItem);
        }
    })

    return(finalArray);
}




