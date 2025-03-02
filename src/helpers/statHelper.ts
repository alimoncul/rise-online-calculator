export function calculateStatPoint(level?: number): number {
    let statPoints = 10;

    if (!level) {
        return statPoints;
    }

    if (level < 1) {
        level = 1;
    }

    if (level > 85) {
        level = 85;
    }

    statPoints += (level - 1) * 3;

    if (level > 60) {
        // Then add 5 points per level after 60
        statPoints += (level - 60) * 2;
    }

    return statPoints;
}