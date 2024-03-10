import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setAmount] = useState(5);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [result, setResult] = useState(0);

  const currencyInfoHookUse = useCurrencyInfo(from)

  const optionsJoShowHonge = Object.keys(currencyInfoHookUse);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setResult(amount)
    setAmount(result)
  }

  const convert = () => {setResult(amount*currencyInfoHookUse[to])}

  return (
    <div id="main" className='flex' >
        <div id="left" className='w-96'  >
        <img className='w-full h-full object-center object-cover '  src="./chai.jpg" alt="" />
        </div>
        <div
        className=" w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{backgroundColor:"black"}}
    >
        <div className="w-full ">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()

                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            onAmountChange={setAmount}
                            currencyOptions={optionsJoShowHonge}
                            onCurrencyChange={(cur) => setFrom(cur) }
                            selectCurrency={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={result}
                            currencyOptions={optionsJoShowHonge}
                            onCurrencyChange={(curr) => setTo(curr) }
                            selectCurrency={to}
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
    </div>
);
}

export default App;
