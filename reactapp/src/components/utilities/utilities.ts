
//Convert string date to datetime
export const stringToDate = (date: string): number => {
    const convertedDate = new Date(date);
    return convertedDate.getTime();
}

const windowSize = {
    mobile:768,
    table:940,
    desktop:1024
}

export const IsMobile = (): boolean => {
    let isMobile = false;
    switch (true) {
        case window.innerWidth < windowSize.mobile:
            isMobile = true;
            break;
        default:
            isMobile = false;
            break;
    }
    return isMobile;
}