import {app} from '../components/App';
import Link from 'next/link';

export default app(() => (
  <div>
    <Link href={'?' + Math.random()}>hi</Link>
    about
  </div>
));
