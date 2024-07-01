export function capitalizeFirstLetter(string) {
    if (!string) return string; // handle empty string
    if (string.length === 1) return string.toUpperCase(); // handle single character
    return string.charAt(0).toUpperCase() + string.slice(1);
}