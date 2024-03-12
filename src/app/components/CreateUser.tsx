const CreateUser = () => {
return (
    <div className='mainbox'>
    <article className='itembox2'>
        <section className='contentitemboxrolle'><input type='text' placeholder='Brukernavn' className='inputbruker'></input></section>
        <section className='contentitemboxrolle'><input type='text' placeholder='Passord' className='inputbruker'></input></section>
    </article>

    <article className='centerbox'>
        <section className='contentitemboxrolle'><Rolledrop /></section>
    </article>

    <article className='centerbox'>
        <button className='generatebutton'>Opprett profil</button>
    </article>
</div>
)
}
export default CreateUser