import css from './css/Sidebar.module.css';

// stateless functional component

function FunctionalSidebar() {
    return (
        <div className={css.sidebar}>
            <a href="#." target="_blank">My Photos</a>
            <a href="#." target="_blank">My Illustrations</a>
            <a href="#." target="_blank">My Paintings</a>
        </div>
    )
}

// arrow: const FunctionalSidebar = () => 'It works' 

export default FunctionalSidebar