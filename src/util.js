import dayjs from 'dayjs'

export function getMonth(month = dayjs().month()){ //current month in dayjs
    const year = dayjs().year() //current year in dayjs
    console.log(year);
    const firstDayOfTheMonth = dayjs(new Date(year, month , 1)).day()  //day of week
    console.log(firstDayOfTheMonth)
    let currentMonthCount = 0 - firstDayOfTheMonth // 
    console.log(currentMonthCount)
    const daysMatrix = new Array (5).fill([]).map(()=>{
        return new Array(7).fill(null).map(()=>{
            currentMonthCount++
            return dayjs(new Date(year, month, currentMonthCount))
        }) 
    })
    return daysMatrix
}

