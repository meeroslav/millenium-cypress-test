// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App({ defaultText }: { defaultText?: string }) {
  return (
    <div>
      <NxWelcome title={defaultText || 'myapp'} />
    </div>
  );
}

export default App;
