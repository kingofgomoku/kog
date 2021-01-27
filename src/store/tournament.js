/* eslint-disable */
import generator from 'tournament-generator';

const state = {
  tournament: null,
  type:  'double-round',
  session: 'mytournament'
};

const getters = {
  tournamentGetTournament(state) {
    return state.tournament
  },
  tournamentGetType(state) {
    return state.type
  },
  tournamentGetState(state) {
    return state.session
  }
};

const mutations = {
  tournamentUpdateTournament(state, tournament) {
    state.tournament = tournament
  },
  tournamentUpdateType(state, type) {
    state.type = type
  },
  tournamentUpdateSession(state, session) {
    state.session = session
  }
};

const actions = {
  tournamentCreateTournament(context, {listofPlayers, type}) {
    context.state.commit('tournamentUpdateType', type)
    context.state.commit('tournamentUpdateTournament', generator(listofPlayers, { type }))
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
