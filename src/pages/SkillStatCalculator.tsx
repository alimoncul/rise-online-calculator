import { useState } from "react";
import { CHARACTER_CLASS, CHARACTER_BASE_STATS } from "../database/character";
import { CharacterStat } from "../types";
import { calculateStatPoint } from "../helpers/statHelper";

const SkillStatCalculator = () => {
  const [selectedClass, setSelectedClass] = useState<CHARACTER_CLASS>(CHARACTER_CLASS.Warrior);
  const [level, setLevel] = useState<number>();
  const [stats, setStats] = useState<CharacterStat>(CHARACTER_BASE_STATS.Warrior as CharacterStat);
  const [statPoints, setStatPoints] = useState<number>(10);

  return (
    <div className="flex flex-col p-4 text-white">
      {/* Class and Level Selection */}
      <div className="flex justify-center space-x-4 mb-6">
        <div className="flex flex-col">
          <div className="flex space-x-2">
            {Object.values(CHARACTER_CLASS).map((characterClass) => (
              <button
                key={characterClass}
                onClick={() => {
                  setSelectedClass(characterClass);
                  setStats(CHARACTER_BASE_STATS[characterClass])
                }}
                className={`px-4 py-2 rounded-md capitalize h-10 ${selectedClass === characterClass
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 hover:bg-gray-600'
                  }`}
              >
                {characterClass}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="level-input"
            type="number"
            min="10"
            max="85"
            className="bg-gray-700 border h-10 border-gray-600 rounded px-3 py-1 w-20"
            placeholder="Level"
            value={level ?? ''}
            onChange={(e) => {
              setLevel(parseInt(e.target.value));
              setStatPoints(calculateStatPoint(parseInt(e.target.value)));
            }}
          />
        </div>
      </div>
      <div className="flex space-x-4">
        {/* Left Column: Stat */}
        <div className="w-1/2">
          <div className="flex flex-col items-center p-4">
            <h3 className="text-lg font-bold mb-4">Stats</h3>
            <div className="w-full max-w-xs space-y-3">
              {Object.entries(stats).map(([stat, value]) => (
                <div key={stat} className="flex items-center justify-between">
                  <label className="capitalize">{stat}</label>
                  <div className="flex items-center space-x-2">
                    <input
                      disabled={true}
                      type="number"
                      value={value as number}
                      onChange={(e) => setStats(prev => ({
                        ...prev,
                        [stat]: parseInt(e.target.value) || 0
                      }))}
                      className="bg-gray-700 border border-gray-600 rounded px-3 py-1 w-20 text-left"
                    />
                  </div>
                </div>
              ))}
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className="flex items-center justify-between">
                <label>Available stat points: </label>
                <input
                  disabled={true}
                  type="number"
                  value={statPoints}
                  className="bg-gray-700 border border-gray-600 rounded px-3 py-1 w-20 text-left"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Skill */}
        <div className="w-1/2">
          <div className="flex flex-col items-center p-4">
            <h3 className="text-lg font-bold mb-4">Skills</h3>
            {/* Add your character attributes UI here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillStatCalculator;