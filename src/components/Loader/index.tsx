import { Logo } from './styles';

export const Loader = () => {
  return (
    <>
      <div className='App'>
        <header className='App-header'>
            <h1>please wait...</h1>
            <Logo className='App-logo' />
        </header>
      </div>
    </>
  );
};
