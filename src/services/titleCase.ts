export function toTitleCase(input: string): string {
    // Split the input string by camelCase or spaces
    const words = input.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');

    // Convert each word to title case
    const titleCasedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

    // Join the words back together with a space
    return titleCasedWords.join(' ');
}