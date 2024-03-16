import { FC } from 'react';
import useContentful, { ItemMeta } from '@hooks/use-contentful';
import sy from './Sandbox.scss';

export type Wish = {
  sender: string;
  message: string;
} & ItemMeta;

const Sandbox: FC = () => {
  const { data: wishes, isLoading, error } = useContentful<Wish>('jm24/wish');

  return (
    <div className={sy.edge} style={{ color: '#fff' }}>
      {error && `Error: ${error.message}`}
      {isLoading && 'LOADING...'}
      <div className={sy.list}>
        {wishes?.map((wish) => (
          <div key={wish.id} className={sy.item}>
            <div>
              <strong>{wish.sender}</strong>
            </div>
            <div>{wish.message}</div>
            <div>{wish.createdAt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sandbox;
