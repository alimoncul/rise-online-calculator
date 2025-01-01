import React, { useState } from "react";
import Item, { ItemRarityType } from "../types";

interface InventoryCellProps {
  item?: Item;
}

const InventoryCell: React.FC<InventoryCellProps> = (props: InventoryCellProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const rarityColor = props.item && props.item.rarity === ItemRarityType.Unique ? 'text-yellow-400' : props.item && props.item.rarity === ItemRarityType.Epic ? 'text-purple-400' : 'text-blue-400';
  return (
    <div
      className="bg-gray-700 h-16 w-16 border border-gray-600 rounded-md flex items-center justify-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {props.item && (
        <img
          src={`rise-online-calculator/assets/${props.item.name.toLowerCase()}.png`}
          alt={props.item.name}
          className="h-full w-full object-cover rounded-md"
        />
      )}
      {props.item && isHovered && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-72 z-50 text-center">
          <img
            src={`rise-online-calculator/assets/${props.item.name.toLowerCase()}.png`}
            alt={props.item.name}
            className="h-12 w-12 object-cover rounded-md mx-auto"
          />
          <p className={`mt-2 font-bold ${rarityColor}`}>{props.item.name} +{props.item.upgrade}</p>
          <hr className="my-2 border-gray-600" />
          {props.item.attackPower && (
            <p className="flex justify-between">
              <span>Attack Power:</span>
              <span>{props.item.attackPower}</span>
            </p>
          )}
          <p className="flex justify-between mt-2 font-bold text-yellow-400">
            <span>Gear score:</span>
            <span>{props.item.gearScore}</span>
          </p>
          <hr className="my-2 border-gray-600" />
          {props.item.defense && (
            <p className="flex justify-between">
              <span>Physical Defense Bonus:</span>
              <span>{props.item.defense}</span>
            </p>
          )}
          {props.item.primaries ? props.item.primaries.map((primary) => (
            <p className="flex justify-between text-green-500" key={primary.stat + primary.value}>
              <span>{primary.stat}</span>
              <span>+{primary.value}</span>
            </p>
          )) : ''}
        </div>
      )}
    </div>
  );
};

export default InventoryCell;