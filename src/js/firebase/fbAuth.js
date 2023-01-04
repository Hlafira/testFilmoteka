import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

/*import { renderLogin } from '../renderLogin/renderLogin';
import { auth } from './fbInit';
import { fbFilmsData } from './fbFilms';
import { returnMessage } from '../dataStorage/errorsMessage';
*/
class FirebaseAuth1 {
  constructor(user, language = 'en') {
    this.user = user;
    this.isLogin = !!user;
    this.language = language;
  }


}



