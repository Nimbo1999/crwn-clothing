import styled, { css } from 'styled-components'

const Large = css`
    height: 380px;
`

const useLarge = props => {
    if(props.large) return Large
}

const image = props => {
    return props.imageUrl
}

export const TitleImage = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`

export const SubTitleImage = styled.span`
    font-weight: lighter;
    font-size: 16px;
`

export const Content = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
`

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${image});
`

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    background-position: center;
    background-size: cover;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        ${Content} {
            opacity: 0.9;
        }

        ${BackgroundImage} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.35, 0.56, 0.55, 1);
        }
    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    ${useLarge}

    @media screen and (max-width: 800px) {
        height: 200px;
    }
`