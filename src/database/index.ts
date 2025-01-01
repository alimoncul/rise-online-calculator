import Item, { ClassType, DamageType, ItemNames, ResistanceType, StatType } from "../types";

export const ITEMS: Item[] = [
    {
        name: ItemNames.Vixen,
        class: ClassType.Rogue,
        attackPowers: [92, 94, 96, 99, 103, 108, 115, 125, 139, 175],
        primaries: [
            {
                stat: DamageType.Poison,
                values: [36, 40, 44, 50, 56, 62, 70, 80, 92, 106],
            },
            {
                stat: ResistanceType.Fire,
                values: [2, 3, 4, 5, 6, 7, 9, 12, 15, 20],
            }
        ],
        gearScores: [0, 0, 0, 0, 0, 0, 1045, 1205, 1385, 1600],
    },
    {
        name: ItemNames.RangersRing,
        class: ClassType.All,
        defenses: [10, 12, 14, 16, 19, 22],
        primaries: [
            {
                stat: StatType.Health,
                values: [5, 6, 7, 8, 10, 12],
            },
            {
                stat: StatType.Dexterity,
                values: [5, 6, 9, 12, 15, 19],
            },
            {
                stat: ResistanceType.Fire,
                values: [5, 7, 9, 11, 13, 15]
            },
            {
                stat: ResistanceType.Ice,
                values: [5, 7, 9, 11, 13, 15]
            },
            {
                stat: ResistanceType.Lightning,
                values: [5, 7, 9, 11, 13, 15]
            },
            {
                stat: ResistanceType.Poison,
                values: [20, 22, 24, 26, 28, 30]
            },
        ],
        gearScores: [115, 160, 195, 235, 295, 360],
    },
];
