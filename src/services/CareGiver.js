import axios from "./axios";
import AsyncStorage from "@react-native-community/async-storage";
import preferences from "../common/preferences";

export const login = (email, password) =>
  new Promise(async (resolve, reject) => {
    try {
      const requestBody = JSON.stringify({
        email: email,
        password: password,
        accountType: "doctor",
      });

      const response = await axios.post("/caregiverLogin", requestBody);
      const { data } = response;
      console.log("login", "response", data);

      resolve(data);
    } catch (error) {
      console.log("login", "error", error);
      reject(error);
    }
  });

export const register = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const requestBody = JSON.stringify(payload);

      const response = await axios.post("/caregiverSignup", requestBody);
      const { data } = response;
      console.log("register", "response", data);

      resolve(data);
    } catch (error) {
      console.log("register", "error", error);
      reject(error);
    }
  });

export const resetPassword = (email) =>
  new Promise(async (resolve, reject) => {
    try {
      const requestBody = JSON.stringify({
        email,
      });

      const response = await axios.post("/resetPassword", requestBody);
      const { data } = response;
      console.log("resetPassword", "response", data);

      resolve(data);
    } catch (error) {
      console.log("resetPassword", "error", error);
      reject(error);
    }
  });

export const updatePassword = (newPassword) =>
  new Promise(async (resolve, reject) => {
    try {
      const requestBody = JSON.stringify({
        newPassword,
      });

      const response = await axios.post(
        "/caregiverUpdatePassword",
        requestBody
      );
      const { data } = response;
      console.log("updatePassword", "response", data);

      resolve(data);
    } catch (error) {
      console.log("updatePassword", "error", error);
      reject(error);
    }
  });

export const updateProfile = (email) =>
  new Promise(async (resolve, reject) => {
    try {
      const requestBody = JSON.stringify({
        email,
      });

      const response = await axios.post("/updateCaregiverProfile", requestBody);
      const { data } = response;
      console.log("register", "response", data);

      resolve(data);
    } catch (error) {
      console.log("register", "error", error);
      reject(error);
    }
  });

export const getProfile = (userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get("/getCaregiverProfile/" + userId);
      const { data } = response;
      console.log("getProfile", "response", data);

      resolve(data);
    } catch (error) {
      console.log("getProfile", "error", error);
      reject(error);
    }
  });

export const getNotifications = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get("/getCaregiverNotification");
      const { data } = response;
      console.log("getNotification", "response", data);

      resolve(data);
    } catch (error) {
      console.log("getNotification", "error", error);
      reject(error);
    }
  });

export const getSchedules = () =>
  new Promise(async (resolve, reject) => {
    try {
      const userId = await AsyncStorage.getItem("token");

      const response = await axios.get(`/getCaregiverSchedules/${userId}`);
      const { data } = response;
      console.log("getSchedules", "response", data);

      resolve(data);
    } catch (error) {
      console.log("getSchedules", "error", error.response);
      reject(error);
    }
  });

export const RES_STATUS = {
  SUCCESS: "success",
};
