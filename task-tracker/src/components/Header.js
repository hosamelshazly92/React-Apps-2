import Button from './Button.js';

const Header = ({title, onCreate, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onCreate} 
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Empty',
}

export default Header
