// App.tsx used just for routing

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
// import HomePage from './pages/HomePage';
// import Counter from './projects/1.Counter/Counter';
// import ColorPicker from './projects/2.ColorPicker/ColorPicker';
// import TemperaturConverter from './projects/3.TemperatureConverter/TemperatureConverter';
// import TabsComponent from './projects/4.TabsComponent/Tabs';
// import Accordian from './projects/5.Accordion/Accordion';
// import DigitalClock from './projects/6.DigitalClock/DigitalClock';
// import RandomQuote from './projects/7.RandomQuote/RandomQuote';
// import FormValidation from './projects/8.FormValidation/FormValidation';
// import Todo from './projects/9.TodoApp/TodoApp';
// import Calculator from './projects/10.Calculator/Calculator';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element ={<Layout/>}>
                   <Route index element={<HomePage />} />
                    {/* <Route path= 'counter' element={<Counter/>} />
                    <Route path= 'color-picker' element={<ColorPicker/>} />
                    <Route path= 'temperature-conver' element={<TemperaturConverter/>} />
                    <Route path= 'tabs-component' element={<TabsComponent/>} />
                    <Route path= 'accordion' element={<Accordian/>} />
                    <Route path= 'digital-clock' element={<DigitalClock/>} />
                    <Route path= 'random-quote' element={<RandomQuote/>} />
                    <Route path= 'form-validation' element={<FormValidation/>} />
                    <Route path= 'todo' element={<Todo/>} />
                    <Route path= 'calculator' element={<Calculator/>} />
                    <Route path= "*" element={<div> 404-Project Not Found</div>} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;