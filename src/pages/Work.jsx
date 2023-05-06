import ProjeCard from '../components/Card/ProjeCard'
import Container from '../components/common/Container'
import dockerLaravel from '../assets/projects/docker-laravel.webp'
import nextRealTime from '../assets/projects/real-time-nextjs.webp'
import bookShop from '../assets/projects/node-book-shop.png'

const Work = () => {
  return (
    <Container>
      <h2 class='text-white text-5xl font-bold text-center mb-5 mt-16'>All PROJECTS</h2>
      <div class='grid grid-cols-3 gap-5'>
        <ProjeCard
          src={bookShop}
          title={'Framework'}
          about={'Vue.js Todo'}
          href="https://github.com/MimosaMimosa/nextjs_chat_app" />
        <ProjeCard
          src={bookShop}
          title={'Framework'}
          about={'Vue.js Todo'}
          href="https://github.com/MimosaMimosa/nextjs_chat_app" />
        <ProjeCard
          src={bookShop}
          title={'Framework'}
          about={'Vue.js Todo'}
          href="https://github.com/MimosaMimosa/nextjs_chat_app" />
        <ProjeCard
          src={bookShop}
          title={'Framework'}
          about={'Vue.js Todo'}
          href="https://github.com/MimosaMimosa/nextjs_chat_app" />
        <ProjeCard
          src={bookShop}
          title={'Framework'}
          about={'Vue.js Todo'}
          href="https://github.com/MimosaMimosa/nextjs_chat_app" />
        <ProjeCard
          src={bookShop}
          title={'Framework'}
          about={'Vue.js Todo'}
          href="https://github.com/MimosaMimosa/nextjs_chat_app" />
        <ProjeCard
          src={dockerLaravel}
          title={'Backend'}
          about={'Docker And Laravel Setup'}
          href="https://github.com/CoderZ2/docker-laravel-setup"
        />
        <ProjeCard
          src={nextRealTime}
          title={'Backend, Frontend'}
          about={'Next.js Real Time Chat App'}
          href="https://github.com/MimosaMimosa/nextjs_chat_app"
        />
        <ProjeCard
          src={bookShop}
          title={'Backend, Frontend'}
          about={'Next.js Real Time Chat App'}
          href="https://github.com/MimosaMimosa/nextjs_chat_app" />
        <ProjeCard
          src={bookShop}
          title={'Framework'}
          about={'Solid.js Todo'}
          href="https://github.com/MimosaMimosa/nextjs_chat_app" />
        <ProjeCard
          src={bookShop}
          title={'Framework'}
          about={'Vue.js Todo'}
          href="https://github.com/MimosaMimosa/nextjs_chat_app" />
      </div>
    </Container>
  )
}

export default Work