import Container from '../components/common/Container';
import profile from '../assets/img.jpg'
import mywork from '../assets/my-work.jpg'
import aboutme from '../assets/about-me.jpg'
import LazyImage from '../components/common/LazyImage';


const Home = () => {
  return (
    <Container>
      <div class='grid grid-cols-2 mt-16 gap-5'>
        <div class='grid items-center text-white rounded-[30px] border-grey grid-cols-2 gap-5 px-[40px] shadow-box relative'>
          <div>
            <LazyImage src={profile} class='rounded-l-[30px] w-[250px] h-[200px] object-cover' />
          </div>
          <div>
            <h4 class='text-grey font-bold'>A Web Developer</h4>
            <h3 class='text-4xl font-bold my-2'> I'm <br></br> Wai Yan Lin </h3>
            <p class='text-grey'>I am web developer base in Yangon.</p>
          </div>
        </div>
        <div class=''>
          <div class='grid grid-cols-2 gap-4'>
            <div class='col-span-2 shadow-box relative rounded-[30px] py-[17px] px-[17px]'>
              adada
            </div>
            <div class='rounded-[30px] shadow-box relative cursor-pointer p-3'>
              <div class='p-5'>
                <LazyImage src={aboutme} />
                <div class='flex justify-between items-center mt-5'>
                  <div>
                    <p class='text-grey fond-bold text-sm'>MORE ABOUT ME</p>
                    <h4 class='text-white text-xl font-bold'>Credentials</h4>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div class='rounded-[30px] shadow-box relative cursor-pointer p-3'>
              <div class='p-5'>
                <div class='text-center flex justify-center'>
                  <LazyImage src={mywork} />
                </div>
                <div class='flex justify-between items-center mt-5'>
                  <div>
                    <p class='text-grey fond-bold text-sm'>SHOW CASE</p>
                    <h4 class='text-white text-xl font-bold'>Projects</h4>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='grid grid-cols-4 mt-5 gap-5'>
        <div class='rounded-[30px] shadow-box relative cursor-pointer p-3'>
          <div class='p-5'>
            <LazyImage src={aboutme} />
            <div class='flex justify-between items-center mt-5'>
              <div>
                <p class='text-grey fond-bold text-sm'>BLOG</p>
                <h4 class='text-white text-xl font-bold'>Lazy Loading</h4>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>
        <div class='col-span-2 rounded-[30px] bg-[#32323242] cursor-pointer p-3'></div>
        <div class='rounded-[30px] shadow-box relative cursor-pointer p-3'>
          <div class='p-5'>
            <LazyImage src={aboutme} />
            <div class='flex justify-between items-center mt-5'>
              <div>
                <p class='text-grey fond-bold text-sm'>MORE ABOUT ME</p>
                <h4 class='text-white text-xl font-bold'>Credentials</h4>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class='grid grid-cols-2 mt-5 gap-5'>
        <div class='grid grid-cols-3 gap-5 rounded-[30px] shadow-box relative cursor-pointer p-8'>
          <div class='rounded-[20px] flex shadow-box-soft relative p-10 shadow-white flex-col justify-center items-center text-grey'>
            <p class='tex-2xl font-bold text-white text-4xl'>02</p>
            <p class='my-3'>YEARS</p>
            <p>EXPERIENCE</p>
          </div>
          <div class='rounded-[20px] flex shadow-box-soft relative flex-col justify-center items-center text-grey'>
            <p class='tex-2xl font-bold text-white text-4xl'>02</p>
            <p class='my-3'>YEARS</p>
            <p>EXPERIENCE</p>
          </div>
          <div class='rounded-[20px] flex shadow-box-soft relative flex-col justify-center items-center text-grey'>
            <p class='tex-2xl font-bold text-white text-4xl'>10</p>
            <p class='my-3'>TOTAL</p>
            <p>PROJECTS</p>
          </div>
        </div>
        <div class='grid gird-cols-3 gap-5 rounded-[30px] shadow-box relative cursor-pointer p-3'></div>
      </div>
    </Container>
  )
}

export default Home