import {FC} from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'
import {Grid, Row, Col} from 'rsuite'


interface CategoryGridProps {
    categories: string[]
    selectedCategory: string
    onSelectCategory: (string) => void
}


const Btn = styled.a`
    display: inline-block;
    width: 100%;
    height: 36px;
    line-height: 36px;
    margin-bottom: 10px;
    border-radius: 18px;
    background-color: #2B2D2F; // TODO: color
    box-shadow: inset 0 0 0 2px #3F4045; // TODO: color
    color: #606060; // TODO: color
    text-align: center;
    font-size: 18px;

    &:hover {
        cursor: pointer;
        text-decoration: none;
    }

    &.--active {
        background-color: #3F4045; // TODO: color
        box-shadow: inset 0 0 0 2px #2B2D2F; // TODO: color
        color: #FFFFFF; // TODO: color
    }
`


const CategoryGrid: FC<CategoryGridProps> = props => {
    return <Grid fluid>
        <Row>
            {props.categories.map((category, index) => (
                <Col xs={6} key={index}>
                    <Btn
                        className={classNames({'--active': category == props.selectedCategory})}
                        onClick={() => props.onSelectCategory(category)}>
                        {category}
                    </Btn>
                </Col>
            ))}
        </Row>
    </Grid>
}


export default CategoryGrid
