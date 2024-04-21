
//Convert string date to datetime
export const stringToDate = (date: string): number => {
    const convertedDate = new Date(date);
    return convertedDate.getTime();
}
