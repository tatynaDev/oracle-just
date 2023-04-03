function MyForm() {
    const send = (e) => {
        e.preventDefault()
    }
    return (
        <form className='form' onSubmit={send}>
            <label className='form--item'>
                <span className='form--item__text' style={{
                    color: '#A6A5A5'
                }}>Ваш номер телефона</span>
                <input className='form--item__in' type="number" required={true}/>
            </label>
            <label className='form--item'>
                <span className='form--item__text' style={{
                    color: '#A6A5A5'
                }}>Задавайте вопрос</span>
                <input className='form--item__in' type="text" required={true}/>
            </label>
            <button className='form--btn'>Задать вопрос</button>
        </form>
    )
}

export default MyForm;