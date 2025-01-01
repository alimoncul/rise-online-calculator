import { ITEMS } from "../database";
import Item, { ItemNames } from "../types";

export function getItem(name: ItemNames, upgrade: number): Item {
    const item = ITEMS.find((item) => item.name === name);

    if (!item) {
        throw new Error(`Item ${name} not found`);
    }

    const attackPower = item.attackPowers?.[upgrade - 1];
    const gearScore = item.gearScores?.[upgrade - 1];
    const defense = item.defenses?.[upgrade - 1];
    const primaries = item.primaries.map((primary) => ({ ...primary, value: primary.values?.[upgrade - 1] }));

    return {
        ...item,
        attackPower,
        gearScore,
        defense,
        primaries,
        upgrade,
    };
}