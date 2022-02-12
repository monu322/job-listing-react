import React, {useRef, useContext} from "react";

import './header.styles.scss';

import {Container, Row, Col, Form, Button} from 'react-bootstrap';

import { SearchTagsContext } from "../../contexts/searchTagsContext";

function Header(props) {

    const searchBtn = useRef(null);

    const { searchTags, setSearchTags } = useContext(SearchTagsContext);

    const addItem = e => {
        e.preventDefault();
        const item = e.target.newTag.value;
        
        if (item) setSearchTags([...searchTags, item]);

        searchBtn.current.blur();//overriding button active state styling
        e.target.reset();
    };

    return (
        <div className="header">
            
            <Container className="page-container header-container">
                <Row>
                    <Col>
                        <Form onSubmit={e => addItem(e)}>
                            <Form.Control name="newTag" className="searchbar" type="text" placeholder="Search" />

                            <Button ref={searchBtn} type="submit" className="search-btn">Submit</Button>
                        </Form>
                    </Col>
                </Row>

                

            </Container>
        </div>
    )
}

export default Header;
