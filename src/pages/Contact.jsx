import Container from '../components/common/Container'
import TextArea from '../components/common/TextArea'
import TextField from '../components/common/TextField'

const Contact = () => {
  return (
    <Container>
      <div class='grid grid-cols-3 gap-5 mt-16'>
        <div>
          <h3 class='text-white mb-2'>CONTACT INFO</h3>
          <div>
            <div class='flex items-center mb-10'>
              <div class='w-[68px] h-[68px] flex justify-center items-center bg-dark rounded-[10px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div class='flex flex-col justify-between ml-5'>
                <span class='text-grey text-md'>MAIL US</span>
                <span class='text-white text-lg'>info@bluebase.com</span>
                <span class='text-white text-lg'>info@bluebase.com</span>
              </div>
            </div>
            <div class='flex items-center mb-10'>
              <div class='w-[68px] h-[68px] flex justify-center items-center bg-dark rounded-[10px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>

              </div>
              <div class='flex flex-col justify-between ml-5'>
                <span class='text-grey text-md'>CONTACT US</span>
                <span class='text-white text-lg'>info@bluebase.com</span>
                <span class='text-white text-lg'>info@bluebase.com</span>
              </div>
            </div>
            <div class='flex items-center mb-10'>
              <div class='w-[68px] h-[68px] flex justify-center items-center bg-dark rounded-[10px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div class='flex flex-col justify-between ml-5'>
                <span class='text-grey text-md'>LOCATION</span>
                <span class='text-white text-lg'>info@bluebase.com</span>
                <span class='text-white text-lg'>info@bluebase.com</span>
              </div>
            </div>
            <div class='flex items-center'>
              <a class='w-[82px] h-[82px] flex justify-center items-center'>

              </a>
            </div>
          </div>
        </div>
        <div class='col-span-2'>
          <div class='bg-dark-soft rounded-[30px] p-[40px]'>
            <h2 class='text-5xl text-white'>Let’s work <span class='text-sky-blue'>together.</span></h2>
            <div class='mt-5'>
              <TextField placeholder={'Name *'} />
            </div>
            <div class='mt-5'>
              <TextField placeholder={'Email *'} />
            </div>
            <div class='mt-5'>
              <TextField placeholder={'Your Subject *'} />
            </div>
            <div class='mt-5'>
              <TextArea placeholder={'Your Message *'} rows={'5'} />
            </div>
            <div class='mt-5'>
              <button class='bg-dark w-full hover:bg-white hover:text-dark text-white inline-block transition-[0.3s] rounded-[16px] font-medium text-[16px] py-[12px] px-[30px]'>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Contact