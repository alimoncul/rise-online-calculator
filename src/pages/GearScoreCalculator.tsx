import React from 'react';

import InventoryCell from '../components/InventoryCell';
import PlaceholderInventoryCell from '../components/PlaceholderInventoryCell';

import { FieldIds } from '../types';

const GearScoreCalculator: React.FC = () => {

  return (
    <div className="flex space-x-4 p-4 text-white">
      {/* Left Column: Item Search */}
      <div className="w-1/2">
        <div className="flex flex-col items-center p-4">
          <h3 className="text-lg font-bold mb-4">Search Items</h3>
          {/* Add your item search and upgrade selection UI here */}
        </div>
      </div>

      {/* Middle Column: Character Attributes */}
      <div className="w-1/2">
        <div className="flex flex-col items-center p-4">
          <h3 className="text-lg font-bold mb-4">Character Attributes</h3>
          {/* Add your character attributes UI here */}
        </div>
      </div>

      {/* Right Column: Inventory */}
      <div className="w-1/2">
        <div className="flex flex-col items-center p-4 gap-2">
          <h3 className="text-lg font-bold mb-4">Inventory</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center space-y-2">
              <InventoryCell fieldId={FieldIds.Helmet} />
              <InventoryCell fieldId={FieldIds.Chestplate} />
              <InventoryCell fieldId={FieldIds.Gloves} />
              <InventoryCell fieldId={FieldIds.Leggings} />
              <InventoryCell fieldId={FieldIds.Boots} />
            </div>

            <div className="flex flex-col items-center space-y-2">
              <InventoryCell fieldId={FieldIds.Earring1} />
              <InventoryCell fieldId={FieldIds.Relic} />
              <PlaceholderInventoryCell></PlaceholderInventoryCell>
              <InventoryCell fieldId={FieldIds.Ring1} />
            </div>

            <div className="flex flex-col items-center space-y-2">

              <InventoryCell fieldId={FieldIds.Earring2} />
              <InventoryCell fieldId={FieldIds.Amulet} />
              <InventoryCell fieldId={FieldIds.Belt} />
              <InventoryCell fieldId={FieldIds.Ring2} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <InventoryCell fieldId={FieldIds.RightHand} />
            <InventoryCell fieldId={FieldIds.LeftHand} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GearScoreCalculator;