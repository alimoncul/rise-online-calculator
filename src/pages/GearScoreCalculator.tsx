import React from "react";
import InventoryCell from "../components/InventoryCell";
import { getItem } from "../helpers/itemHelper";
import { ItemNames } from "../types";

const GearScoreCalculator = () => {
  return (
    <div className="text-white p-4 rounded-lg w-[400px] mx-auto">
      {/* Equipment Section */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {/* Armor Slots */}
        <InventoryCell item={getItem(ItemNames.Vixen, 7)} />
        <InventoryCell item={getItem(ItemNames.RangersRing, 2)} />
        <InventoryCell />
      </div>

      {/* Gear Score */}
      <div className="text-center mb-4">
        <h3 className="text-lg">Gear Score</h3>
        <p className="text-yellow-400 text-2xl font-bold">2,084</p>
      </div>
    </div>
  );
};

export default GearScoreCalculator;
