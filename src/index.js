import testFilms from './js/moviesAPI/test';

// testFilms();
import { ifItFirstOupen } from './js/renderMarkupFilmoteka/renderMarkupFilmoteka';
import { onSearch } from './js/renderMarkupFilmoteka/renderMarkupFilmoteka';

import { onFirstOupen } from './js/renderMarkupFilmoteka/renderMarkupFilmoteka';
import { buttonUp } from './js/scroll/button-up';
import toggleModalFilm from './js/modals/modal-film';
import { onDocumentCurrentPage } from './js/renderMarkupFilmoteka/renderMarkupFilmoteka';
import { retrySearch } from './js/errors/retrySearch';
import { onPagination } from './js/pagination/pagination';
import { loginModal } from './js/firebaseFilm/loginModal';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { fbFilmsAuth } from './js/firebaseFilm/testAuth';
import { changeMode } from './js/changeMode/changeMode';
import { testFbDataBase } from './js/firebaseFilm/test';
testFbDataBase();
console.log('change13');
