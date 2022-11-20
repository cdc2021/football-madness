import { useState } from 'react';
import { assignedNameAndTeam } from './helper';
import background2 from './assets/background2.png';


function App()
{
  const [name, setName] = useState('');
  const [prevName, setPrevName] = useState('');
  const [team, setTeam] = useState('');
  const [flag, setFlag] = useState('');
  const [error, setError] = useState('');

  const showAllocatedTeam = (e) =>
  {
    let resultToUser = '';
    let error = '';
    const nameNotFoundText = 'Please enter one of these names: Chris, Diane, Xanjo, Josh, Jadan, Jay, Marcel, Daphne, Margaret, Roy, Anton';
    const lowerCaseName = name.toLowerCase();

    if (assignedNameAndTeam?.[lowerCaseName]?.['team'] === undefined)
    {
      error = nameNotFoundText;
    } else
    {
      resultToUser = assignedNameAndTeam?.[lowerCaseName]?.['team'];
    };
    setTeam(resultToUser);
    setFlag(assignedNameAndTeam?.[lowerCaseName]?.['flag']);
    setPrevName(name);
    setName('');
    setError(error);
  };

  const handleNameInput = (e) =>
  {
    setName(e.target.value);
  };

  const handleKeypress = e =>
  {
    if (e.key === 'Enter')
    {
      handleNameInput(e);
      showAllocatedTeam();
    }
  };

  return (
    <div
      className="App font-themeFontFamily min-h-screen py-10 bg-right-top"
      style={{ backgroundImage: `url(${background2})` }}
    >
      <div className='pr-8'>
        <h1 className='text-3xl text-themeBlack uppercase text-right mb-2'>welcome to</h1>
        <p className='sm:text-5xl md:text-7xl text-themeBlack uppercase text-right'>our world cup <br />raffle</p>
        <h2 className='text-themeBlack text-right pt-2'>Enter your first name to find out who your allocated team is</h2>
      </div>

      <div className='flex justify-end pr-8 my-6 space-x-4'>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => handleNameInput(e)}
          onKeyPress={(e) => handleKeypress(e)}
          placeholder="Enter your first name..."
          className="focus:outline-none focus:ring-1 focus:border-themeBlack px-2"
        />
        <button
          className='bg-themeGold uppercase text-themeBlack px-4 py-2 hover:opacity-75 active:opacity-50'
          onClick={showAllocatedTeam}
          onKeyPress={(e) => handleKeypress(e)}
        >Show me my team!
          </button>
      </div>

      <div className='flex flex-col pr-8 items-end'>
        <hr className='w-80 self-end bg-themeGold h-0.5 mb-4' />
        {team && (
          <div className='flex flex-col items-center space-y-8 mt-8'>
            <p className='text-xl text-themeBlack text-center'>{prevName}, your allocated team is:</p>
            <div className='flex space-x-6 items-center'>
              <img className='h-20' src={flag} alt='country flag' />
              <p className='text-3xl text-themeBlack text-center'>{team}!</p>
            </div>
          </div>
        )}
        {error && (
          <div className='flex flex-col items-end mt-10'>
            <p className='text-xl text-rose-500'>Name not found</p>
            <p className='text-sm w-96 text-end text-themeBlack text-center'>{error}</p>
          </div>
        )}
      </div>

    </div >
  );
}

export default App;


