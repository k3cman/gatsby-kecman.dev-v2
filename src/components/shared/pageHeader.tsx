import React from 'react';
import { PageProps } from 'gatsby';
import styled from "styled-components"

const PageHeaderContainer = styled.h1`
    font-size:40px;
    font-weight:bolder;
    margin-top:0.7em;
    margin-bottom: 1em;
    text-align: left;
    -webkit-text-fill-color: transparent;
    text-shadow: 
                          0px 0px rgba(39,39,39,0.85),
                          3px 3px #FC4C1C;
`

const PageHeader: React.FC<PageProps<any>> = ({children}) => {
return <PageHeaderContainer>{children}</PageHeaderContainer>
}

export default PageHeader;