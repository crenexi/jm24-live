import { FC } from 'react';
import useContentful, { ItemMeta } from '@hooks/use-contentful';
import { Button } from '@components/action';
import sy from './Sandbox.scss';

export type Wish = {
  sender: string;
  message: string;
} & ItemMeta;

const Sandbox: FC = () => {
  const {
    data: wishes,
    isLoading,
    error,
    listful,
  } = useContentful<Wish>('jm24/wish');

  const handleAdd = () => {
    listful.add({
      sender: 'James Blume',
      message: 'Test test 1234',
    });
  };

  const handleRemove = (id: string) => {
    listful.remove(id);
  };

  return (
    <div className={sy.edge} style={{ color: '#fff' }}>
      {error && `Error: ${error.message}`}
      {isLoading && 'LOADING...'}
      <div className={sy.list}>
        <Button click={handleAdd}>Add</Button>
        <br />
        <br />
        {wishes?.map((wish) => (
          <div key={wish.id} className={sy.item}>
            <div>
              <strong>{wish.sender}</strong>
            </div>
            <div>{wish.message}</div>
            <div>{wish.createdAt}</div>
            {!wish.optimistic && (
              <Button variant="danger" click={() => handleRemove(wish.id)}>
                Delete
              </Button>
            )}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sandbox;
