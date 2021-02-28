/* eslint-disable */
import { Auth, API } from "aws-amplify";
import { createUser } from "@/graphql/mutations";
import { getUser } from "@/graphql/queries";

const state = {
  user: null,
};
const getters = {
  userGetUser(state) {
    return state.user;
  },
};
const mutations = {
  userUpdateUser(state, data) {
    state.user = data;
  },
};
const actions = {
  async userGet(context, user) {
    let data;
    try {
      data = await API.graphql({
        query: getUser,
        variables: {
          id: user.attributes.sub,
        },
      });
      console.log("userData", data);
      if (data.data.getUser === null) {
        data = await context.dispatch("userCreate", user);
      }
      context.commit("userUpdateUser", data);
    } catch (e) {
      console.log("USERCHECKER", e);
    }
    // if(data) {
    //   context.dispatch('userCreate', user)
    // }
  },
  async userCreate(context, user) {
    let data;
    try {
      data = await API.graphql({
        query: createUser,
        variables: {
          input: {
            id: user.attributes.sub,
            email: user.attributes.email,
            name: user.attributes.name,
            status: "CREATED",
          },
        },
      });
    } catch (e) {
      console.log("USERCREATE", e);
    }
    return data;
  },
  async userSignOut(context) {
    try {
      await Auth.signOut();
    } catch (e) {
      console.log("USERSIGNOUT", e);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
