export const cropString = (title: string, symbolsCount: number = 25): string => {
    const croppedTitle = title.length > symbolsCount ? title.substring(0, symbolsCount) + '...' : title
    return croppedTitle
}