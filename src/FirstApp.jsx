import PropTypes from 'prop-types'


export const FirstApp = ({title, subTitle, name})=>{



    return(
        <>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <p>Soy programador</p>
            <h2>{name}</h2>
        </>

    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,

}


FirstApp.defaultProps={
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Yelitza',
}