const ProjeCard = (props) => {
    return (
        <a href={props.href} class='p-[16px] bg-dark-soft rounded-[30px] block cursor-pointer' target='_blank'>
            <img src={props.src} class='rounded-[30px]' />
            <div class='mt-5'>
                <p class='text-grey fond-bold text-md'>{props.title}</p>
                <h4 class='text-white text-2xl font-bold mt-2'>{props.about}</h4>
            </div>
        </a>
    )
}

export default ProjeCard