function PopupWithForm(props){
    return(
        <>
        <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_hidden' : ''}`}>
            <div className="popup__content">
                <button className='popup__close-button' type='button' onClick={props.onClose}></button>
                <h2 className='popup__title'>{props.title}</h2>
                <form className='popup__form popup__info' name={`popup-${props.name}`}>
                    {props.children}
                    <button className='popup__button' type='submit'>Сохранить</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default PopupWithForm;