import './App.css';

function App() {
  return (
    <div className='bg-[#000926] min-h-full px-[30px] pt-[80px] pb-[30px] text-[#D5D5D5] pl-[300px] mobile:pl-0 mobile:grid mobile:place-items-center'>
      <div className='w-[380px]'>
        <h3 className='text-[30px] pb-[10px] font-bold'>Signin to your account</h3>
        <p className='text-sm font-normal'>Sign in to see what's happening on your account. Feel free to look around, it's yours</p>
        <div className='mt-[50px]'>
          <label className='text-base'>Username</label>
          <input className='w-full h-[45px] border border-solid border-white rounded-md bg-transparent mt-[10px] outline-none' />
        </div>
        <div className='mt-[25px]'>
          <label className='text-base'>Passcode</label>
          <div className='flex flex-row space-x-3 mt-[10px]'>
            <label className='border border-solid border-white rounded-md w-[45px] h-[45px]'></label>
            <label className='border border-solid border-white rounded-md w-[45px] h-[45px]'></label>
            <label className='border border-solid border-white rounded-md w-[45px] h-[45px]'></label>
            <label className='border border-solid border-white rounded-md w-[45px] h-[45px]'></label>
            <label className='border border-solid border-white rounded-md w-[45px] h-[45px]'></label>
            <label className='border border-solid border-white rounded-md w-[45px] h-[45px]'></label>
          </div>
        </div>
      </div>
      <div className='mt-[-35px] flex flex-row items-end w-[85%] justify-between 
        desktop:flex-col-reverse desktop:justify-start desktop:items-start desktop:mt-[35px] mobile:w-[380px]'
        >
        <button className='w-[180px] rounded-md h-[45px] text-sm bg-[#6DE7B4] text-[#00071F] font-bold desktop:mt-[25px] desktop:w-[280px]'>Login</button>
        <div className='w-[330px]'>
          <div className='flex flex-row flex-wrap space-x-4 mt-[15px]'>
            <button className='border border-solid border-[#6E84D1] rounded-md w-[55px] h-[55px] bg-[#2F4DBD] font-bold'>1</button>
            <button className='border border-solid border-[#6E84D1] rounded-md w-[55px] h-[55px] bg-[#2F4DBD] font-bold'>2</button>
            <button className='border border-solid border-[#6E84D1] rounded-md w-[55px] h-[55px] bg-[#2F4DBD] font-bold'>3</button>
            <button className='border border-solid border-[#6E84D1] rounded-md w-[55px] h-[55px] bg-[#2F4DBD] font-bold'>4</button>
          </div>
          <div className='flex flex-row flex-wrap space-x-4 mt-[15px]'>
            <button className='border border-solid border-[#6E84D1] rounded-md w-[55px] h-[55px] bg-[#2F4DBD] font-bold'>5</button>
            <button className='border border-solid border-[#6E84D1] rounded-md w-[55px] h-[55px] bg-[#2F4DBD] font-bold'>6</button>
            <button className='border border-solid border-[#6E84D1] rounded-md w-[55px] h-[55px] bg-[#2F4DBD] font-bold'>7</button>
            <button className='border border-solid border-[#6E84D1] rounded-md w-[55px] h-[55px] bg-[#2F4DBD] font-bold'>8</button>
          </div>
          <div className='flex flex-row flex-wrap space-x-4 mt-[15px]'>
            <button className='border border-solid border-[#6E84D1] rounded-md w-[55px] h-[55px] bg-[#2F4DBD] font-bold'>9</button>
            <button className='border border-solid border-[#6E84D1] rounded-md w-[55px] h-[55px] bg-[#2F4DBD] font-bold'>0</button>
            <button className='border border-solid border-[#FED0B7] rounded-md w-[55px] h-[55px] bg-transparent font-bold'></button>
          </div>
          <div className='flex flex-row flex-wrap space-x-4 mt-[15px]'>
            <button 
              className='border border-solid border-[#FF0062] rounded-md w-[120px] h-[45px] bg-[#FF0062] font-bold hover:border-[#4D5362]
                hover:bg-transparent transition-all duration-[0.2s]
              '
              >
              Delete
            </button>
            <button className='border border-solid border-[#FF0062] rounded-md w-[120px] h-[45px] bg-transparent font-bold'>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
