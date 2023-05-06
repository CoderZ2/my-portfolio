import { Route, Routes, A } from '@solidjs/router';
import About from './pages/About';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Container from './components/common/Container';

function App() {
  return <>
    <Container>
      <div class='flex justify-between py-7 items-center text-white'>
        <h1 class='text-3xl font-bold'>WYL.</h1>
        <ul class='flex items-center -mx-6 text-md'>
          <li class='mx-6 router-link text-md text-grey'><A href='/' end>Home</A></li>
          <li class='mx-6 router-link text-md text-grey'><A href='/about'>About</A></li>
          <li class='mx-6 router-link text-md text-grey'><A href='/works'>Works</A></li>
          <li class='mx-6 router-link text-md text-grey'><A href='/contact'>Contact</A></li>
        </ul>
        <a class='bg-dark hover:bg-white hover:text-dark text-white inline-block transition-[0.3s] rounded-[16px] font-medium text-[16px] py-[12px] px-[30px]'>
          Let's talk
        </a>
      </div>
    </Container>
    <Routes>
      <Route path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/works' component={Work}></Route>
      <Route path='/contact' component={Contact}></Route>
    </Routes>
  </>
}

export default App;
