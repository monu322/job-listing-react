import React, {useContext} from "react";

import './tags.styles.scss';

import {Row, Col} from 'react-bootstrap';

import { SearchTagsContext } from "../../contexts/searchTagsContext";

function Tags(props) {

    const { searchTags, setSearchTags } = useContext(SearchTagsContext);

    const handleDelete = item => {
        setSearchTags(searchTags.filter(li => li !== item));
    };


    return (
        <div className="tags-box">
            <Row>
                <Col className="tags-col">
                
                    {
                        searchTags.map((tag, key) => 
                        (
                            <span key={key} className="tag">{tag}<span onClick={() => handleDelete(tag)} className="tag-close"></span></span>
                        ))
                    }

                </Col>
            </Row>
        </div>
    )
}

export default Tags;
