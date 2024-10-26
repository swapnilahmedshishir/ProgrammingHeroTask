import React, { useState } from "react";
import { FaUser, FaFlag } from "react-icons/fa";
import playerFackData from "../FackData/Data.json";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { toast } from "react-toastify";
const Players = ({ coin, setCoin }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showSelected, setShowSelected] = useState(false);

  // Handle the selecting of a  player
  const handleSelectPlayer = (playerId) => {
    const playerFind = playerFackData.find(
      (player) => player.playerId === playerId
    );

    if (selectedPlayers.find((player) => player.playerId === playerId)) {
      toast.warn(`${playerFind.name} is already in your team.`);
      return;
    }

    if (playerFind && !selectedPlayers.includes(playerFind)) {
      if (coin >= playerFind.biddingPrice) {
        setSelectedPlayers((prev) => [...prev, playerFind]);
        setCoin(coin - playerFind.biddingPrice);
        toast.success(`${playerFind.name} has been added to this team!`);
      } else {
        toast.error("Not enough coins to select this player.");
      }
    }
  };
  // player remove
  const handleRemovePlayer = (playerID) => {
    const playerFind = selectedPlayers.find(
      (player) => player.playerId !== playerID
    );
    setSelectedPlayers((prev) =>
      prev.filter((player) => player.playerId !== playerID)
    );
    // i do the extra fetcher refun the coin
    setCoin(coin + playerFind.biddingPrice);
    toast.info(`${playerFind.name} has been removed from this team.`);
  };

  // Toggle between showing all and selected players
  const toggleShowSelected = () => setShowSelected(!showSelected);

  // Filter players based on the selected button
  const playersToDisplay = showSelected ? selectedPlayers : playerFackData;

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="player-card">
          <h3 className="text-sm md:text-lg font-medium">
            {showSelected
              ? `Selected Players ( ${selectedPlayers.length} / ${playerFackData.length})`
              : `Available Players`}
          </h3>
        </div>
        <div className="flex justify-evenly items-center gap-3">
          <button
            className="btn glass wide bg-[rgb(231,254,41)] mt-4"
            onClick={() => setShowSelected(false)}
          >
            Available
          </button>
          <button
            className="btn glass wide bg-[rgb(231,254,41)] mt-4"
            onClick={toggleShowSelected}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      <section className="pt-10">
        {showSelected ? (
          <>
            {playersToDisplay.map((player) => (
              <div
                key={player.playerId}
                className="w-full ring-2 ring-gray-200 md:p-7 flex justify-between items-center md:m-4 rounded-md"
              >
                <div className="flex items-center gap-5">
                  <img src={player.image} alt={player.name} className="w-40" />
                  <div>
                    <h2 className="card-title flex items-center gap-2">
                      {player.name}
                    </h2>
                    <h2 className="text-black">{player.battingType}</h2>
                  </div>
                </div>
                <div>
                  <button
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleRemovePlayer(player.playerId)}
                  >
                    <RiDeleteBin6Fill size={24} />
                  </button>
                </div>
              </div>
            ))}
            <button
              className="btn glass wide bg-[rgb(231,254,41)] mt-4"
              onClick={() => setShowSelected(false)}
            >
              Add More Player
            </button>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {playersToDisplay.map((player) => (
              <div
                className="card card-compact bg-base-100 w-full shadow-xl p-3 ring-2 ring-gray-200 ring-inset"
                key={player.playerId}
              >
                <figure className="w-fit h-3/6">
                  <img src={player.image} alt={player.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title flex items-center gap-2">
                    <FaUser /> {player.name}
                  </h2>
                  <div className="flex justify-between items-center">
                    <div className="text-gray-400 flex items-center gap-2">
                      <FaFlag /> <span>{player.country}</span>
                    </div>
                    <div className="bg-slate-300 p-2 rounded-md">
                      {player.role}
                    </div>
                  </div>
                  <div className="divider my-0 h-0"></div>
                  <h3 className="card-title">Rating</h3>
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-black">{player.battingType}</h2>
                    <h2>{player.bowlingType}</h2>
                  </div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-[rgb(0,0,0)] font-medium">
                      Price: $
                      <span>{player.biddingPrice.toLocaleString()}</span>
                    </h2>
                    <button
                      className="btn wide hover:bg-[rgb(231,254,41)] p-2"
                      onClick={() => handleSelectPlayer(player.playerId)}
                    >
                      Choose player
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Players;
