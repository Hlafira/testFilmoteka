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
}
