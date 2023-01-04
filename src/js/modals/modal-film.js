import { getRefs } from '../refs';
import FilmsData from '../moviesAPI/filmsData';
import { renderModalMarkup } from '../renderMarkupFilmoteka/renderModalFilmMarkup';
import { markupModalCreating } from '../renderMarkupFilmoteka/renderModalFilmMarkup';
import renderErrorModalMarkup from '../renderMarkupFilmoteka/renderErrorModalMarkup';
// import { firebaseAuth } from '../firebase/fbAuth';
// import { fbFilmsData } from '../firebase/fbFilms';

const refs = getRefs();
const filmsData = new FilmsData();

let currentFilm = null;
export default function toggleModalFilm() {
  let atHome = true;

  if (!atHome) {
    console.log(atHome);
    return;
  }

  refs.gallery.addEventListener('click', openModalFilm);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function toggleClasses() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is_hidden');
    currentFilm = null;
  }

  function openModalFilm(event) {
    if (event.target === event.currentTarget) return;

    refs.modalFilmWrapper.innerHTML = '';
    document.addEventListener('keydown', closeModalOnEscape);
    refs.modal.addEventListener('click', closeModalOnBackdrop);
    toggleClasses();

    filmsData
      .getById(event.target.dataset.id)
      .then(filmProperties => {
        console.log(filmProperties);

        currentFilm = filmProperties;

        console.log(currentFilm);
        // refs.modalErrorMarkup.classList.add('visually-hidden');
        renderModalMarkup(
          refs.modalFilmWrapper,
          markupModalCreating(filmProperties)
        );
        // if (firebaseAuth.isLogin) {
        //   addBtnAction();
        // }
      })
      // .catch(refs.modalErrorMarkup.classList.remove('visually-hidden'));
      .catch(renderErrorModalMarkup);
  }
  function closeModal(event) {
    toggleClasses();
  }

  function closeModalOnEscape(event) {
    if (event.key !== 'Escape') return;

    toggleClasses();
    document.removeEventListener('keydown', closeModalOnEscape);
    refs.modalFilmWrapper.innerHTML = '';
  }

  function closeModalOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;

    toggleClasses();
    refs.modal.removeEventListener('click', closeModalOnBackdrop);
    refs.modalFilmWrapper.innerHTML = '';
  }
}

toggleModalFilm();

function addBtnAction() {
  const refsBtn = {
    addW: document.querySelector('.add-to-watched-btn'),
  };
  console.log(refsBtn);
  refsBtn.addW.addEventListener('click', () => {
    addFilmToW();
  });
}

async function addFilmToW() {
  console.log(currentFilm);
  // const film2 = await fbFilmsData.writeTo(currentFilm, 'WA');
  console.log(film2);
}
