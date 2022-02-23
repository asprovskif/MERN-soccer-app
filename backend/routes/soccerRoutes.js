import {
  addNewPlayer,
  getPlayers,
  getPlayerWithId,
  updatePlayer,
  deletePlayer
} from "../controllers/playerControllers";

const routes = (app) => {
  app
    .route("/players")
    // GET all players endpoint
    .get(getPlayers)
    // POST endpoint
    .post(addNewPlayer);

    app.route('/player/:PlayerId')
        // GET a player by id
    .get(getPlayerWithId)
        // PUT update a player with id
    .put(updatePlayer)
        // DELETE delete a player
    .delete(deletePlayer);
};

export default routes;
