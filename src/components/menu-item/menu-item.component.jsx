import React from 'react'
import { withRouter } from 'react-router-dom'

import { MenuItemContainer, BackgroundImage, Content, TitleImage, SubTitleImage } from './menu-item.styles'

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) =>(
    <MenuItemContainer large={size} onClick={ () => history.push(`${match.url}${linkUrl}`) }>
        <BackgroundImage imageUrl={imageUrl} />
        <Content>
            <TitleImage>{ title.toUpperCase() }</TitleImage>
            <SubTitleImage>SHOP NOW</SubTitleImage>
        </Content>
    </MenuItemContainer>
);

export default withRouter(MenuItem);
