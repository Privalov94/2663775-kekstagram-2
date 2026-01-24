import { renderMiniatures } from './thumbails';
import { closePhotoEditor } from './upload-thumbail-form.js';
import { setUserFormSubmit } from './form-validation.js';
import { showTimeError } from './show-error-message.js';
import { getData } from './api.js';

getData()
  .then((images) => {
    renderMiniatures(images);
  })
  .catch(() => {
    showTimeError();
  });

setUserFormSubmit(closePhotoEditor);
