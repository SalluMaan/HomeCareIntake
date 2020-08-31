import AsyncStorage from '@react-native-community/async-storage';

export const KEYS = {
  USER_ID: 'USER_ID',
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  USER_NAME: 'USER_NAME',
  USER_PICTURE: 'USER_PICTURE',
  USER_EMAIL: 'USER_EMAIL'
};

const clearAuthSession = () =>
  new Promise(async (resolve, reject) => {
    try {
      const $keys = [
        KEYS.USER_ID,
        KEYS.ACCESS_TOKEN,
        KEYS.USER_NAME,
        KEYS.USER_PICTURE,
        KEYS.USER_EMAIL
      ]
      await AsyncStorage.multiRemove($keys)
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });

const checkAuthSession = () =>
  new Promise(async (resolve, reject) => {
    try {
      const userId = await AsyncStorage.getItem(KEYS.USER_ID);
      const token = await AsyncStorage.getItem(KEYS.ACCESS_TOKEN);

      if (
        typeof userId === 'string' &&
        typeof token === 'string'
      ) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });

const getAuthSession = () =>
  new Promise(async (resolve, reject) => {
    try {
      const authSession = {}

      const userId = await AsyncStorage.getItem(KEYS.USER_ID);
      const accessToken = await AsyncStorage.getItem(KEYS.ACCESS_TOKEN);
      const username = await AsyncStorage.getItem(KEYS.USER_NAME);
      const userProfile = await AsyncStorage.getItem(KEYS.USER_PICTURE);
      const userEmail = await AsyncStorage.getItem(KEYS.USER_EMAIL);

      if (
        typeof userId === 'string' &&
        typeof accessToken === 'string'
      ) {
        authSession.userId = userId
        authSession.accessToken = accessToken

        if (username) authSession.username = username
        if (accountType) authSession.accountType = accountType
        if (doctorType) authSession.doctorType = doctorType
        if (serviceType) authSession.serviceType = serviceType
        if (userProfile) authSession.userProfile = userProfile
        if (userEmail) authSession.userEmail = userEmail

        resolve(authSession);
      } else {
        reject();
      }
    } catch (error) {
      reject(error);
    }
  });
const setAuthSession = authSession =>
  new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.setItem(KEYS.USER_ID, authSession.userId);
      await AsyncStorage.setItem(KEYS.ACCESS_TOKEN, authSession.accessToken);
      await AsyncStorage.setItem(KEYS.USER_NAME, authSession.username);
      if (authSession.userProfile) {
        await AsyncStorage.setItem(KEYS.USER_PICTURE, authSession.userProfile);
      }
      if (authSession.userEmail) {
        await AsyncStorage.setItem(KEYS.USER_EMAIL, authSession.userEmail);
      }
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });

const setLocalization = languageTag => {
  // RNPreference.set(KEYS.LANGUAGE, languageTag);
};

const getLocalization = () => {
  // return RNPreference.get(KEYS.LANGUAGE);
};

export default {
  KEYS,
  clearAuthSession,
  checkAuthSession,
  setAuthSession,
  getAuthSession,
  setLocalization,
  getLocalization,
};
