/* how value passed -------- 

ThemeContext => ko create context kia ( value yahi pass krdi )
ThemeContext => ko.provider bna diya ( ab sari value dono k pass hai themeProvider and themeContext )

useTheme hook bnaya => useContext(ThemeContext) iski wjh se har file mai useContext import nhi krna pdega 

sari functionality ThemeContext ki value ki App.jsx mai bnayi same name se target krke , mtlb jo app.jsx mai likha wo sab themeContext file mai update hua

ab App.jsx ke sare children ko yahi file mai hi wrap kiya or value pass ki( value humesha pass krni hogi )

ek useEffect chalu kiya jisme Theme ki value change hoti hi full html class change hojyegi , to mtlb kahi se kisi bhi file se change hoga to useEffect run hoga hi hoga 

------ KESE THEME KI VALUE CHANGE KI BUTTON K CLICK PR ------------

sabse pehle useTheme hook se value le li ThemeBtn file mai 
sari values nikal li {themeMode, darkTheme, lightTheme}

button pr onClick lgya => usme function pass kiya 

function run hote hi => button ka darkModeStatus le rhe hai e.currentTarget.checked;
if(darkModeStatus){
      darkTheme()
  }else{
      lightTheme()
  }

  ab value Theme ki switch hote hi wo sidha ThemeContext ki main file mai change ho rha hai isliye Card pr bhi apne aap apply horha hai kyuki ClassesChange krne wala function full html ko target kr rha hai or (card) usme hi hai , 

To in short ------------------

ek main context file hai 
usme change kiya button se 
or wo button ne global variable ( jo ki context file mai hai ) usko change krdiya
ab value pr ek useEffect chalu hai jo apne aap run hua or sari classes remove or add krdi ( light or dark ) ki.

*/