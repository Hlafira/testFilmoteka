import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

/*import { renderLogin } from '../renderLogin/renderLogin';
import { auth } from './fbInit';
import { fbFilmsData } from './fbFilms';
import { returnMessage } from '../dataStorage/errorsMessage';

class FbFilmsAuth {
  constructor(user, language = 'en') {
    this.user = user;
    this.isLogin = !!user;
    this.language = language;
  }


}

export const firebaseAuth = new FirebaseAuth(null);
// Прослушивает авторизацию
auth.onAuthStateChanged(user => {
  console.log('loginf');
  if (user) {
    firebaseAuth.user = user;
    firebaseAuth.isLogin = true;
    fbFilmsData.setUid(user.uid);
  } else {
    firebaseAuth.user = null;
    firebaseAuth.isLogin = false;
    fbFilmsData.setUid(null);
  }
  renderLogin(firebaseAuth.isLogin, firebaseAuth.getUserDisplayName());
});
