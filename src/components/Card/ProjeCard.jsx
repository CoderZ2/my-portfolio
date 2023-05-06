import LazyImage from '../common/LazyImage'

const ProjeCard = (props) => {
    return (
        <a href={props.href} class='p-[16px] shadow-box relative rounded-[30px] block cursor-pointer' target='_blank'>
            <LazyImage src={props.src} class='rounded-[30px]' />
            <div class='mt-5'>
                <p class='text-grey fond-bold text-md'>{props.title}</p>
                <h4 class='text-white text-2xl font-bold mt-2'>{props.about}</h4>
                <ol class='text-white text-xs mt-3'>
                    {props.features?.map((item) => {
                        return <>
                            <li>
                                - {item}
                            </li>
                        </>
                    })}
                </ol>
            </div>
        </a>
    )
}

export default ProjeCard