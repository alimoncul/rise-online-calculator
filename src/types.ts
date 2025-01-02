export enum ClassType { Warrior = 'Warrior', Rogue = 'Rogue', Mage = 'Mage', Priest = 'Priest', All = 'All' };
export enum StatType { Strength = 'Strength Bonus', Health = 'Health Bonus', Dexterity = 'Dexterity Bonus', Magic = 'Magic Bonus', Intelligence = 'Intelligence Bonus' };
export enum DamageType { Fire = 'Fire Damage', Ice = 'Ice Damage', Lightning = 'Lightning Damage', Poison = 'Poison Damage' };
export enum ResistanceType { Fire = 'Fire Resistance', Ice = 'Ice Resistance', Lightning = 'Lightning Resistance', Poison = 'Poison Resistance' };
export enum AdditionalEffectType { ManaBurn = 'ManaBurn' };
export enum EnemyTypes { Magical = 'Magical' };
export enum ItemRarityType { Rare = 'Rare', Epic = 'Epic', Unique = 'Unique' };

// +7 Strength
interface StatBonus {
    stat: StatType;
    value?: number; // Single value
    values?: number[]; // Array of values for each upgrade
}

// +70 Fire Damage
interface DamageBonus {
    stat: DamageType;
    value?: number; // Single value
    values?: number[]; // Array of values for each upgrade
}

// +2 Fire Resistance
interface ResistanceBonus {
    stat: ResistanceType;
    value?: number; // Single value
    values?: number[]; // Array of values for each upgrade
}

// %2 Mana Burn
interface AdditionalBonus {
    stat: AdditionalEffectType;
    value?: number; // Single value
    values?: number[]; // Array of values for each upgrade
}

// %10 Attack Bonus against Magical
interface ItemBonus {
    stat: EnemyTypes;
    value?: number; // Single value
    values?: number[]; // Array of values for each upgrade
}

interface Item {
    name: ItemNames;
    upgrade?: number;
    rarity: ItemRarityType;
    class: ClassType;
    attackPower?: number; // Single item's attack power
    attackPowers?: number[]; // Array of attack powers for each upgrade
    primaries: (StatBonus | DamageBonus | ResistanceBonus)[];
    additionals?: AdditionalBonus[];
    itemBonuses?: ItemBonus[];
    gearScore?: number;
    gearScores?: number[];
    defense?: number;
    defenses?: number[];
}

export enum ItemNames {
    Vixen = "Vixen",
    RangersRing = "Ranger's Ring"
}

export enum FieldIds { Helmet = "Helmet", Chestplate = "Chestplate", Gloves = "Gloves", Leggings = "Leggings", Boots = "Boots", Ring1 = "Ring 1", Ring2 = "Ring 2", Amulet = "Amulet", Belt = "Belt", Earring1 = "Earring 1", Earring2 = "Earring 2", LeftHand = "Left Hand", RightHand = "Right Hand", Relic = "Relic" }

export default Item;