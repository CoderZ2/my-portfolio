import { Transition } from "solid-transition-group"
import { onCleanup, createEffect, createSignal, onMount } from "solid-js";
const About = () => {


const [isVisible, setVisible] = createSignal(true)
setVisible(true)

return <Transition name="slide-fade">
    <Show when={isVisible()}>
      <div class='text-white'>Hello</div>
    </Show>
</Transition>


}

export default About