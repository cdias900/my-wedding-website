import ReactDOM from 'react-dom';

import { App } from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorkerRegistration.register({
  onSuccess: () => {
    window.postMessage(
      {
        type: 'serviceWorkerMessage',
        message: 'text.contentCached',
        timeout: 5000,
      },
      '*',
    );
  },
  onUpdate: () => {
    window.postMessage(
      {
        type: 'serviceWorkerMessage',
        message: 'text.newContentAvailable',
        action: 'updateServiceWorker',
      },
      '*',
    );
  },
});
