export enum CHARACTER_CLASS {
    Warrior = "Warrior",
    Priest = "Priest",
    Rogue = "Rogue",
    Mage = "Mage",
}

export enum STATS {
    Strength = "Strength",
    Health = "Health",
    Dexterity = "Dexterity",
    Magic = "Magic",
    Intelligence = "Intelligence"
}

export const CHARACTER_BASE_STATS = {
    Warrior: {
        Strength: 70,
        Health: 70,
        Dexterity: 60,
        Magic: 40,
        Intelligence: 50
    },
    Rogue: {
        Strength: 60,
        Health: 55,
        Dexterity: 70,
        Magic: 50,
        Intelligence: 55
    },
    Priest: {
        Strength: 50,
        Health: 60,
        Dexterity: 55,
        Magic: 50,
        Intelligence: 75
    },
    Mage: {
        Strength: 50,
        Health: 40,
        Dexterity: 50,
        Magic: 70,
        Intelligence: 80
    }
}