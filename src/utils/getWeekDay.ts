export function getWeekDay (value: string) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(value);
    const dayName = days[d.getDay()];
    return dayName
}