import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  deleteUser,
  updateProfile,
} from 'firebase/auth';

import { authMy } from './fbInit';
import { returnMessage } from '../dataStorage/errorsMessage';

export class FbFilmsAuth {
  constructor(user, language = 'en') {
    console.log('constructor');
    this.user = user;
    this.isLogin = !!user;
    this.language = language;
  }

  /**
   * Вход
   * @param {String} email  не проверяет
   * @param {password} password
   * @returns {Promise} String  сообщение об ошибке
   */
  async login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      this.user = userCredential.user;
      return '';
    } catch (e) {
      return returnMessage(e.code, this.language);
    }
  }
  // Исключение
  /**
   *
   * @returns {Prommise} String сообщение об ошибке
   */
  async logOut() {
    //auth/user-not-found
    if (!this.isLogin) return '';
    try {
      await auth.signOut();
      return '';
    } catch (e) {
      return returnMessage(e.code, this.language);
    }
  }
}

export const fbFilmsAuth = new FbFilmsAuth(null);
